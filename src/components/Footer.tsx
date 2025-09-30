import { Moon, Sun, Heart, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import creatorImage from "@/assets/muhammad-murtuza.png";

const Footer = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <footer className="py-16 px-4 border-t border-border bg-card">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* Creator Section */}
          <div className="text-center max-w-2xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Created By
            </p>
            <a
              href="https://muhammadmurtuza.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block"
            >
              <div className="flex flex-col items-center gap-4 transition-smooth hover:scale-105">
                <div className="relative">
                  <div className="absolute inset-0 gradient-hero rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-smooth" />
                  <img
                    src={creatorImage}
                    alt="Muhammad Murtuza - Creator of iloveai.com"
                    className="relative w-24 h-24 rounded-full object-cover border-4 border-primary shadow-glow-pink"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold group-hover:text-gradient transition-smooth">
                    Muhammad Murtuza
                  </h3>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Designer & Developer
                </p>
              </div>
            </a>
          </div>

          {/* Theme Toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full transition-smooth hover:scale-110"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>

          {/* Disclaimer */}
          <div className="text-center max-w-2xl">
            <p className="text-sm text-muted-foreground mb-4">
              <strong className="text-foreground">Disclaimer:</strong> This site is a humorous parody of AI overuse 
              and is not meant to shame individuals. We actually love AI tools and think they're incredibly useful! 
              This is all in good fun. 😊
            </p>
            
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
              Made with <Heart className="h-3 w-3 text-primary fill-primary" /> by AI enthusiasts
            </p>
          </div>

          {/* Legal */}
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} iloveai.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
