import { CheckCircle2, Eye, FolderSearch } from "lucide-react";
import demoGif from "../assets/galoria-real-demo.gif";

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
            Galoria does not hide image moves. Review the analyze, preview, and apply flow before using it on a large collection.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="overflow-hidden rounded-xl border border-primary/20 bg-card shadow-2xl">
            <img src={demoGif} alt="Real Galoria AI app workflow showing a selected picture folder, proposed categories, and the review screen" width="1280" height="900" loading="lazy" className="h-auto w-full bg-background" />
          </div>
        </div>

        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-muted-foreground/90">
          Real Galoria app recording: choose a picture folder, inspect proposed categories, and review every move before approval.
        </p>
      </div>
    </section>
  );
};

export default DemoSection;
