import { motion } from "framer-motion";
import { Brain, Eye, FileText, FolderTree, ShieldCheck, WifiOff } from "lucide-react";

const features = [
  { icon: Brain, title: "Local AI suggestions", desc: "Analyze image folders and supporting context on your device." },
  { icon: FolderTree, title: "Photo folder organization", desc: "Group mixed image libraries into folders that reflect purpose and context." },
  { icon: FileText, title: "Editable organization plan", desc: "Reassign images, exclude items, and rename destination folders before applying." },
  { icon: Eye, title: "Preview before changes", desc: "Review proposed folders and filenames before applying them." },
  { icon: WifiOff, title: "Offline sorting workflow", desc: "Images do not need to be uploaded to a cloud organizer." },
  { icon: ShieldCheck, title: "Privacy-focused by design", desc: "Use Galoria on local image folders such as Downloads, Pictures, and Screenshots." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            Photo organization features that keep you in control
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">
            Galoria focuses on practical photo cleanup work: categorization, safe moves, privacy, and review.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-gradient-card p-7 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

