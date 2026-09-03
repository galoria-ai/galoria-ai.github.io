import { motion } from "framer-motion";
import { CheckCircle2, Download, Eye, ShieldCheck, WifiOff } from "lucide-react";

import InteractiveDemo from "./InteractiveDemo";
import { trackEvent } from "@/lib/analytics";

const trustItems = [
  { icon: WifiOff, label: "Runs locally" },
  { icon: Eye, label: "Preview first" },
  { icon: ShieldCheck, label: "No cloud upload" },
  { icon: CheckCircle2, label: "Undo supported" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden border-b border-border/60 pt-28 md:pt-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--border) / 0.4) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.35) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, black, transparent 72%)",
        }}
      />

      <div className="container relative pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-md border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-sm font-medium text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Windows-only local photo planning
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-7xl">
            Organize mixed photo folders
            <br />
            <span className="text-gradient">without losing control</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Galoria AI scans local image folders on Windows, shows exact destinations and conflicts, then applies only the changes you approve.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#download"
                onClick={() => {
                  trackEvent("platform_download_cta_clicked", {
                    platform: "windows",
                    location: "hero",
                  });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:opacity-90 glow-shadow"
              >
                <Download className="h-4 w-4" />
                Download for Windows
              </a>

              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-[#111] to-[#222] px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white/20 hover:bg-[#1a1a1a]"
              >
                <Eye className="h-4 w-4" />
                See workflow
              </a>
            </div>

            <div className="mt-4 text-sm text-white/70">Windows 10/11 only</div>
            <div className="mt-3 text-sm text-white/60">
              Review first, apply approved changes, and keep a local audit trail.
            </div>
          </div>

          <div className="mx-auto mt-7 grid max-w-3xl grid-cols-2 gap-2 text-left sm:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex min-h-11 items-center gap-2 rounded-md border border-border/70 bg-background/70 px-3 text-sm text-secondary-foreground backdrop-blur"
              >
                <item.icon className="h-4 w-4 shrink-0 text-primary" />
                <span className="truncate">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          id="demo"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-12 max-w-6xl md:mt-16"
        >
          <InteractiveDemo />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
