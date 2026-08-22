import { motion } from "framer-motion";
import { Clock, FileSearch, FolderX } from "lucide-react";

const problems = [
  {
    icon: FolderX,
    title: "Mixed image folders",
    desc: "Downloads, Pictures, and screenshot folders quickly fill with camera photos, exports, memes, and graphics.",
  },
  {
    icon: FileSearch,
    title: "Unnamed clutter",
    desc: "Short-lived filenames like IMG_4829.jpg and Screenshot 2026-08-01.png stop helping once the folder grows.",
  },
  {
    icon: Clock,
    title: "Repeated cleanup",
    desc: "Manual sorting costs attention every time you return to the same messy image folder.",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            Your photo folder is not broken. It is doing too many jobs.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">
            Galoria turns a noisy image inbox into a reviewed Windows plan you can inspect before anything moves.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-gradient-card p-8 transition-colors hover:border-primary/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

