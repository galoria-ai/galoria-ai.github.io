import { CheckCircle2, Eye, FolderSearch } from "lucide-react";

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
          <div className="overflow-hidden rounded-xl border border-primary/20 bg-card p-6 shadow-2xl md:p-10">
            <div className="grid gap-5 md:grid-cols-3">
              {workflow.map((step, index) => (
                <article key={step.title} className="rounded-xl border border-border bg-secondary/40 p-6">
                  <div className="flex items-center justify-between">
                    <step.icon className="h-6 w-6 text-primary" />
                    <span className="text-xs font-semibold text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-muted-foreground/90">
          Workflow illustration based on the current app behavior. It is not a product screenshot.
        </p>
      </div>
    </section>
  );
};

export default DemoSection;

