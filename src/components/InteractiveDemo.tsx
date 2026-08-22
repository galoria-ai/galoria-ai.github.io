import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileImage, FolderOpen, FolderPlus, Wand2 } from "lucide-react";

const originalFiles = [
  {
    name: "IMG_20230515_14.990322.jpg",
    path: "C:\\Users\\Alex\\Pictures\\IMG_20230515_14.990322.jpg",
    icon: FileImage,
    color: "text-blue-400",
  },
  {
    name: "Screenshot 2026-08-01.png",
    path: "C:\\Users\\Alex\\Downloads\\Screenshot 2026-08-01.png",
    icon: FileImage,
    color: "text-purple-400",
  },
  {
    name: "meme_004.webp",
    path: "C:\\Users\\Alex\\Downloads\\meme_004.webp",
    icon: FileImage,
    color: "text-pink-400",
  },
  {
    name: "logo-draft.png",
    path: "C:\\Users\\Alex\\Design\\logo-draft.png",
    icon: FileImage,
    color: "text-orange-400",
  },
  {
    name: "reference-board.jpg",
    path: "C:\\Users\\Alex\\Design\\reference-board.jpg",
    icon: FileImage,
    color: "text-blue-400",
  },
  {
    name: "IMG_4829.png",
    path: "C:\\Users\\Alex\\Downloads\\IMG_4829.png",
    icon: FileImage,
    color: "text-sky-400",
  },
  {
    name: "wallpaper_001.jpg",
    path: "C:\\Users\\Alex\\Pictures\\wallpaper_001.jpg",
    icon: FileImage,
    color: "text-green-400",
  },
  {
    name: "receipt_scan.heic",
    path: "C:\\Users\\Alex\\Downloads\\receipt_scan.heic",
    icon: FileImage,
    color: "text-red-400",
  },
];

const organizedStructure = [
  {
    folder: "Camera Photos",
    files: [
      {
        name: "IMG_20230515_14.990322.jpg",
        path: "C:\\Users\\Alex\\Pictures\\Organized\\Travel\\IMG_20230515_14.990322.jpg",
        icon: FileImage,
        color: "text-blue-400",
      },
      {
        name: "IMG_4829.png",
        path: "C:\\Users\\Alex\\Pictures\\Organized\\Travel\\IMG_4829.png",
        icon: FileImage,
        color: "text-blue-400",
      },
    ],
  },
  {
    folder: "Screenshots",
    files: [
      {
        name: "Screenshot 2026-08-01.png",
        path: "C:\\Users\\Alex\\Pictures\\Organized\\Screenshots\\Screenshot 2026-08-01.png",
        icon: FileImage,
        color: "text-purple-400",
      },
      {
        name: "receipt_scan.heic",
        path: "C:\\Users\\Alex\\Pictures\\Organized\\Receipts\\receipt_scan.heic",
        icon: FileImage,
        color: "text-red-400",
      },
      {
        name: "reference-board.jpg",
        path: "C:\\Users\\Alex\\Pictures\\Organized\\Design Assets\\reference-board.jpg",
        icon: FileImage,
        color: "text-blue-400",
      },
    ],
  },
  {
    folder: "Design Assets",
    files: [
      {
        name: "logo-draft.png",
        path: "C:\\Users\\Alex\\Pictures\\Organized\\Design Assets\\logo-draft.png",
        icon: FileImage,
        color: "text-orange-400",
      },
      {
        name: "wallpaper_001.jpg",
        path: "C:\\Users\\Alex\\Pictures\\Organized\\Wallpapers\\wallpaper_001.jpg",
        icon: FileImage,
        color: "text-pink-400",
      },
    ],
  },
  {
    folder: "Memes",
    files: [
      {
        name: "meme_004.webp",
        path: "C:\\Users\\Alex\\Pictures\\Organized\\Memes\\meme_004.webp",
        icon: FileImage,
        color: "text-pink-400",
      },
    ],
  },
];

const InteractiveDemo = () => {
  const [organized, setOrganized] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Scanning files...");

  const handleOrganize = () => {
    if (animating) return;

    setAnimating(true);
    setProgress(0);
    setStatus("Scanning files...");

    const duration = 900;
    const intervalTime = 50;
    const steps = duration / intervalTime;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;

      const newProgress = (currentStep / steps) * 100;
      setProgress(newProgress);

      if (newProgress < 20) setStatus("Scanning files...");
      else if (newProgress < 40) setStatus("Analyzing image types...");
      else if (newProgress < 60) setStatus("Reading folder context...");
      else if (newProgress < 80) setStatus("Generating folder structure...");
      else setStatus("Organizing images...");

      if (currentStep >= steps) {
        clearInterval(interval);

        setTimeout(() => {
          setOrganized((prev) => !prev);
          setAnimating(false);
        }, 200);
      }
    }, intervalTime);
  };

  return (
    <div className="mx-auto max-w-4xl">
      <button
        onClick={handleOrganize}
        disabled={animating}
        className="mx-auto mb-6 flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-shadow disabled:opacity-60"
      >
        <Wand2 className={`h-4 w-4 ${animating ? "animate-spin" : ""}`} />
        {animating ? "Organizing..." : organized ? "Reset Images" : "Start AI Organization"}
      </button>

      {animating && (
        <div className="mb-8">
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-2 bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-2 text-center text-xs text-muted-foreground">
            {status} {Math.floor(progress)}%
          </p>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div
          className={`rounded-2xl border-2 border-dashed p-5 transition-colors duration-500 ${
            organized ? "border-muted/30 bg-card/30" : "border-border bg-card"
          }`}
        >
          <div className="mb-4 flex items-center gap-2">
            <FolderOpen className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-semibold text-foreground">
              Original Images
            </span>
          </div>

          <div className="space-y-2">
            {originalFiles.map((file, i) => {
              const Icon = file.icon;

              return (
                <motion.div
                  key={file.name}
                  animate={{
                    opacity: organized ? 0.3 : 1,
                    x: organized ? -8 : 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: organized ? i * 0.05 : (originalFiles.length - i) * 0.05,
                  }}
                  className="flex items-center gap-3 rounded-lg border border-border/50 bg-secondary/50 px-3 py-2.5"
                >
                  <Icon className={`h-4 w-4 shrink-0 ${file.color}`} />

                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">
                      {file.name}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {file.path}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div
          className={`rounded-2xl border-2 p-5 transition-colors duration-500 ${
            organized
              ? "border-primary/30 bg-primary/5"
              : "border-dashed border-border bg-card/30"
          }`}
        >
          <div className="mb-4 flex items-center gap-2">
            <FolderPlus
              className={`h-5 w-5 transition-colors ${
                organized ? "text-primary" : "text-muted-foreground"
              }`}
            />
            <span className="text-sm font-semibold text-foreground">
              Organized Structure
            </span>
          </div>

          <AnimatePresence mode="wait">
            {!organized ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex h-48 items-center justify-center"
              >
                <p className="text-sm text-muted-foreground">
                  Click "Start AI Organization" to see the workflow.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="organized"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-3"
              >
                {organizedStructure.map((group, gi) => (
                  <motion.div
                    key={group.folder}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: gi * 0.12 }}
                  >
                    <div className="mb-1.5 flex items-center gap-2">
                      <FolderPlus className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">
                        {group.folder}
                      </span>
                    </div>

                    <div className="ml-4 space-y-1.5">
                      {group.files.map((file, fi) => {
                        const Icon = file.icon;

                        return (
                          <motion.div
                            key={file.name}
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: gi * 0.12 + fi * 0.08 + 0.15,
                            }}
                            className="flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2"
                          >
                            <Icon className={`h-4 w-4 shrink-0 ${file.color}`} />

                            <div className="min-w-0">
                              <p className="truncate text-sm font-medium text-foreground">
                                {file.name}
                              </p>
                              <p className="truncate text-xs text-muted-foreground">
                                {file.path}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemo;
