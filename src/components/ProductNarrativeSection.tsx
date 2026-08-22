import { Eye, FolderOpen, Search, Wand2 } from "lucide-react";

const narrative = [
  {
    icon: FolderOpen,
    label: "Problem",
    title: "Your folders became image inboxes",
    text: "Downloads, Pictures, and Screenshots collect camera photos, exports, memes, wallpapers, and unfinished creative work with no shared structure.",
  },
  {
    icon: Search,
    label: "Mechanism",
    title: "Galoria analyzes local context",
    text: "Galoria reviews filenames and supported image content locally to propose folders and clearer names.",
  },
  {
    icon: Eye,
    label: "Control",
    title: "You review before anything moves",
    text: "The preview step helps you catch uncertain suggestions before bulk image moves happen.",
  },
  {
    icon: Wand2,
    label: "Outcome",
    title: "Photos become easier to find and reuse",
    text: "A messy folder turns into a structure based on purpose, project, image type, and useful filenames.",
  },
];

const ProductNarrativeSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            From chaotic folder to reviewed photo structure
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Galoria is designed for the common image problem: you know the files matter, but the names and locations no longer explain what they are.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {narrative.map((item) => (
            <article key={item.label} className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-xs font-semibold uppercase tracking-wide text-primary">
                {item.label}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductNarrativeSection;

