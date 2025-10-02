import { Mail, Linkedin, Globe } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Globe,
      label: "Portfolio",
      value: "muhammadmurtuza.framer.website",
      href: "https://muhammadmurtuza.framer.website",
      cta: "Visit Website"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/muhammadmurtuzahussain/",
      cta: "Connect"
    },
    {
      icon: Mail,
      label: "Email",
      value: "muhammadmurtuzahussain@gmail.com",
      href: "mailto:muhammadmurtuzahussain@gmail.com",
      cta: "Send Email"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-fade-in-up">
          Ready to Secure Your Digital Future?
        </h2>
        <p className="text-xl text-muted-foreground mb-12 animate-fade-in-up [animation-delay:100ms]">
          Let's work together to protect what matters most. Get in touch for a free consultation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={method.label}
                className="p-6 bg-background rounded-lg border border-border transition-smooth hover:shadow-card hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{method.label}</h3>
                <p className="text-muted-foreground text-sm mb-4">{method.value}</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full"
                >
                  <a 
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {method.cta}
                  </a>
                </Button>
              </div>
            );
          })}
        </div>

        <div className="p-8 bg-background rounded-xl border-2 border-primary shadow-glow-pink animate-fade-in-up [animation-delay:500ms]">
          <p className="text-lg mb-6">
            <span className="font-semibold text-foreground">Book a Free Consultation</span>
            <br />
            <span className="text-muted-foreground">
              Let's discuss how I can help secure your business against modern cyber threats.
            </span>
          </p>
          <Button
            asChild
            size="lg"
            className="font-semibold px-8"
          >
            <a 
              href="https://calendly.com/muhammadmurtuzahussain/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;