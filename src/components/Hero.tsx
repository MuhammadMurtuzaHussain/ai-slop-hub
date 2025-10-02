import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToDirectory = () => {
    const directorySection = document.getElementById("directory");
    directorySection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-hero animate-gradient-shift bg-[length:200%_200%]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 animate-fade-in-up [animation-delay:100ms] text-white">
          Welcome AI lovers
        </h1>
        
        <div className="max-w-5xl mx-auto mb-12 animate-fade-in-up [animation-delay:200ms]">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-8">
            Can't even write a simple message or email by yourself and had to ask AI to do it better for you?
            <br />
            <span className="text-white/95">
              While you think it is smart, we all know it is slop.
            </span>
          </p>
        </div>

        <Button
          onClick={() => {
            const servicesSection = document.getElementById("services");
            servicesSection?.scrollIntoView({ behavior: "smooth" });
          }}
          size="lg"
          className="animate-fade-in-up [animation-delay:300ms] bg-white text-primary hover:bg-white/90 shadow-glow-pink font-semibold text-lg px-8 py-6 rounded-full transition-smooth hover:scale-105 group"
        >
          Scroll Down
          <ChevronDown className="ml-2 h-5 w-5 animate-float group-hover:animate-none" />
        </Button>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
