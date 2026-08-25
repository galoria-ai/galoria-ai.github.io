import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import { trackEvent } from "@/lib/analytics";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-lg font-bold text-foreground">
          <img src="/icon-192.png" alt="Galoria AI" className="h-8 w-8 object-contain" />
          Galoria AI
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="/#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a>
          <a href="/#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">How It Works</a>
          <a href="/#download" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Download</a>
          <a href="/#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">FAQ</a>
        </div>
        <a href="/#download" className="rounded-lg border border-border p-2 text-muted-foreground md:hidden" aria-label="Open download section">
          <Menu className="h-5 w-5" />
        </a>
        <a
          href="#download"
          onClick={() => {
            trackEvent("platform_download_cta_clicked", { platform: "windows", location: "header" });
          }}
          className="hidden rounded-lg bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background sm:inline-flex"
        >
          Download for Windows
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;

