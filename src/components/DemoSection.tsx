import { CheckCircle2, Eye, FolderSearch } from "lucide-react";
import firstTabImage from "../assets/galoria-first-tab.png";
import resultsImage from "../assets/galoria-results.png";

const workflow = [
  {
    icon: FolderSearch,
    title: "Analyze locally",
    description: "Inspect image metadata, folder context, and supported visual signals on the PC.",
  },
  {
    icon: Eye,
    title: "Review the plan",
    description: "Reassign categories, exclude images, and rename destination folders before applying.",
  },
  {
    icon: CheckCircle2,
    title: "Apply with control",
    description: "Confirm the reviewed moves, keep a local history log, and undo the latest operation.",
  },
];

const DemoSection = () => {
  return (
    <section id="demo" className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            See the review workflow before you buy
          </h2>

          <p className="mt-4 text-muted-foreground md:text-lg">
            See the Galoria app first, then the organized output folder after your image collection is sorted.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
          <figure className="overflow-hidden rounded-xl border border-primary/20 bg-card shadow-2xl">
            <img src={firstTabImage} alt="Galoria AI opening screen for choosing a picture folder" width="1280" height="900" loading="lazy" className="h-auto w-full bg-background" />
            <figcaption className="px-5 py-4 text-sm text-muted-foreground">Galoria AI — first tab</figcaption>
          </figure>
          <figure className="overflow-hidden rounded-xl border border-primary/20 bg-card shadow-2xl">
            <img src={resultsImage} alt="Galoria AI organized image output folder showing categories" width="1875" height="963" loading="lazy" className="h-auto w-full bg-background" />
            <figcaption className="px-5 py-4 text-sm text-muted-foreground">Galoria AI — organized results</figcaption>
          </figure>
        </div>

        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-muted-foreground/90">
          Real Galoria app screenshots: the opening screen and the organized output folder.
        </p>
      </div>
    </section>
  );
};

export default DemoSection;
