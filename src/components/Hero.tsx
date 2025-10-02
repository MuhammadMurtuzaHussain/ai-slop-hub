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
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in-up inline-block">
          <div className="relative">
            <div className="absolute inset-0 gradient-hero rounded-full blur-2xl opacity-60" />
            <img
              src="/src/assets/muhammad-murtuza.png"
              alt="Muhammad Murtuza - Cybersecurity Consultant"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-glow-pink mx-auto"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 animate-fade-in-up [animation-delay:100ms] text-white">
          Hi, I'm Muhammad!
        </h1>
        
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 animate-fade-in-up [animation-delay:200ms] text-white/95">
          Cybersecurity Consultant & AI Enthusiast
        </p>
        
        <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up [animation-delay:300ms]">
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
            We all love AI — sometimes a little too much! 
            <br />
            <span className="text-white font-semibold">
              But when it comes to protecting your digital life, trust a human expert.
            </span>
          </p>
        </div>

        <Button
          onClick={() => {
            const contactSection = document.getElementById("contact");
            contactSection?.scrollIntoView({ behavior: "smooth" });
          }}
          size="lg"
          className="animate-fade-in-up [animation-delay:400ms] bg-white text-primary hover:bg-white/90 shadow-glow-pink font-semibold text-lg px-8 py-6 rounded-full transition-smooth hover:scale-105 group"
        >
          Let's Work Together!
          <ChevronDown className="ml-2 h-5 w-5 animate-float group-hover:animate-none" />
        </Button>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
