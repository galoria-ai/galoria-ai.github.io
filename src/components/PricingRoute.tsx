import { getPricingNavigation } from "@/lib/pricingNavigation";
import { trackEvent } from "@/lib/analytics";

const PricingRoute = ({ route, trackClick = false }: { route: string; trackClick?: boolean }) => {
  const navigation = getPricingNavigation(route);
  if (!navigation) return null;

  return (
    <section aria-label="Galoria pricing" data-pricing-route className="mt-8 border-t border-border pt-6">
      <p className="text-sm leading-relaxed text-muted-foreground">{navigation.context}</p>
      <a
        href={navigation.href}
        onClick={trackClick ? () => trackEvent("download_cta_clicked", { location: navigation.route }) : undefined}
        className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-foreground underline decoration-primary/60 underline-offset-4 hover:decoration-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        See pricing
      </a>
    </section>
  );
};

export default PricingRoute;
