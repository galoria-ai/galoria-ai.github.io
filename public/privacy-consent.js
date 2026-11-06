(function () {
  "use strict";

  if (window.SitePrivacy) return;

  var STORAGE_KEY = "galoria.optional-consent.v1";
  var CAMPAIGN_STORAGE_KEY = "galoria.campaign";
  var state = "unknown";
  var banner;
  var settingsOpen = false;
  var settingsTrigger;

  function hasBrowserPrivacySignal() {
    return (
      navigator.globalPrivacyControl === true ||
      navigator.doNotTrack === "1" ||
      window.doNotTrack === "1"
    );
  }

  function readStoredChoice() {
    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);
      return saved === "granted" || saved === "denied" ? saved : "unknown";
    } catch (_error) {
      return "unknown";
    }
  }

  function writeStoredChoice(value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (_error) {
      // Consent remains valid for this page if storage is unavailable.
    }
  }

  function optionalServicesAllowed() {
    return state === "granted" && !hasBrowserPrivacySignal();
  }

  function queueGoogleConsent(value) {
    window.dataLayer = window.dataLayer || [];
    (function () {
      window.dataLayer.push(arguments);
    })("consent", value === "default" ? "default" : "update", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: value === "granted" ? "granted" : "denied",
      functionality_storage: value === "granted" ? "granted" : "denied",
      personalization_storage: "denied",
      security_storage: "granted",
      wait_for_update: value === "default" ? 500 : undefined,
    });
  }

  function clearOptionalStorage() {
    try {
      window.sessionStorage.removeItem(CAMPAIGN_STORAGE_KEY);
    } catch (_error) {
      // Optional storage may be unavailable.
    }

    try {
      document.cookie.split(";").forEach(function (cookie) {
        var name = cookie.split("=")[0].trim();
        if (name === "_ga" || name === "_gid" || name.startsWith("_ga_")) {
          document.cookie = name + "=; Max-Age=0; path=/; SameSite=Lax";
          document.cookie =
            name + "=; Max-Age=0; path=/; domain=.galoriaai.com; SameSite=Lax";
        }
      });
    } catch (_error) {
      // Cookie cleanup is best-effort and must not block the page.
    }
  }

  function renderChoice() {
    if (!banner) return;

    banner.hidden = state !== "unknown" && !settingsOpen;
  }

  function setOptionalConsent(granted) {
    var wasAllowed = optionalServicesAllowed();
    state = granted && !hasBrowserPrivacySignal() ? "granted" : "denied";
    writeStoredChoice(state);
    queueGoogleConsent(state);
    if (state === "denied") clearOptionalStorage();
    settingsOpen = false;
    renderChoice();

    var trigger = settingsTrigger;
    settingsTrigger = undefined;
    if (trigger && trigger.isConnected) trigger.focus();

    document.dispatchEvent(
      new CustomEvent("galoria:consent-change", {
        detail: { optionalServices: optionalServicesAllowed() },
      }),
    );

    // Third-party scripts cannot be reliably unloaded. Reload after consent
    // withdrawal so they are no longer present or able to send more requests.
    if (wasAllowed && state === "denied") {
      window.setTimeout(function () {
        window.location.reload();
      }, 50);
    }
  }

  function showSettings(trigger) {
    if (!banner) return;
    settingsOpen = true;
    settingsTrigger = trigger || document.activeElement;
    renderChoice();
    var rejectButton = banner.querySelector("[data-reject]");
    if (rejectButton) rejectButton.focus();
  }

  function mountControls() {
    if (document.getElementById("galoria-privacy-banner")) return;

    var style = document.createElement("style");
    style.textContent = ".galoria-privacy{position:fixed;z-index:10000;right:1rem;bottom:1rem;width:min(24rem,calc(100vw - 2rem));box-sizing:border-box;margin:0;text-align:left;border:1px solid #332d3e;border-radius:12px;background:#191521;color:#f5f1f7;padding:1rem;box-shadow:0 12px 32px #0004;font:14px/1.5 system-ui,sans-serif;animation:galoria-privacy-in 180ms ease-out}\n.galoria-privacy[hidden]{display:none}.galoria-privacy p{margin:0 0 .75rem}\n.galoria-privacy-actions{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center}\n.galoria-privacy button,.galoria-privacy a{border-radius:7px;padding:.5rem .8rem;font:inherit;transition:background-color 150ms,border-color 150ms}\n.galoria-privacy button{min-height:44px;cursor:pointer;border:1px solid #332d3e;background:transparent;color:#f5f1f7}\n.galoria-privacy button[data-accept]{border-color:#bb8ff0;background:#bb8ff0;color:#21132e}\n.galoria-privacy button:hover{border-color:#bb8ff0}.galoria-privacy a{color:#bb8ff0;font-size:12px}\n.galoria-privacy :focus-visible{outline:2px solid #bb8ff0;outline-offset:3px}\n@keyframes galoria-privacy-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}\n@media(prefers-reduced-motion:reduce){.galoria-privacy{animation:none}.galoria-privacy button,.galoria-privacy a{transition:none}}";
    document.head.appendChild(style);

    banner = document.createElement("section");
    banner.id = "galoria-privacy-banner";
    banner.className = "galoria-privacy";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Privacy choices");
    banner.innerHTML =
      "<p><strong>Privacy choices</strong><br>Allow optional analytics?</p>" +
      "<div class=\"galoria-privacy-actions\">" +
      "<button type=\"button\" data-reject>Reject</button>" +
      "<button type=\"button\" data-accept>Allow</button>" +
      "<a href=\"/docs/privacy/\">Privacy details</a>" +
      "</div>";
    document.body.appendChild(banner);

    banner.querySelector("[data-reject]").addEventListener("click", function () {
      setOptionalConsent(false);
    });
    banner.querySelector("[data-accept]").addEventListener("click", function () {
      setOptionalConsent(true);
    });

    document.addEventListener("click", function (event) {
      var target = event.target instanceof Element ? event.target : null;
      var trigger = target && target.closest("[data-galoria-privacy-open]");
      if (!trigger) return;
      event.preventDefault();
      showSettings(trigger);
    });

    if (hasBrowserPrivacySignal()) {
      var message = banner.querySelector("p");
      message.innerHTML =
        "<strong>Privacy signal detected</strong><br>Optional services are off.";
      banner.querySelector("[data-accept]").hidden = true;
    }

    renderChoice();
  }

  state = hasBrowserPrivacySignal() ? "denied" : readStoredChoice();
  queueGoogleConsent("default");
  if (state === "granted") queueGoogleConsent("granted");
  if (state === "denied") clearOptionalStorage();

  window.SitePrivacy = {
    getState: function () {
      return state;
    },
    optionalServicesAllowed: optionalServicesAllowed,
    setOptionalConsent: setOptionalConsent,
    showSettings: showSettings,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountControls, { once: true });
  } else {
    mountControls();
  }
})();
