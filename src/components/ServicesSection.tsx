import { Shield, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    name: "Starter Support Plan",
    description: "Perfect for small businesses starting their security journey",
    features: [
      "Initial security risk scan",
      "Security awareness onboarding",
      "Basic compliance guidance",
      "Email & phone support",
      "Quarterly security check-ins"
    ],
    cta: "Request Support"
  },
  {
    name: "Growth Enablement Plan",
    description: "Comprehensive protection for growing businesses",
    features: [
      "Everything in Starter Plan",
      "Advanced threat monitoring",
      "Incident response planning",
      "Full compliance roadmap (GDPR, ISO 27001)",
      "24/7 priority support",
      "Monthly security reviews"
    ],
    cta: "Request Support",
    featured: true
  }
];

const ServicesSection = () => {
  const handleBooking = () => {
    window.open('https://calendly.com/muhammadmurtuzahussain/new-meeting', '_blank');
  };

  return (
    <section id="services" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hero mb-6 animate-fade-in-up">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient animate-fade-in-up [animation-delay:100ms]">
            Cybersecurity Consulting
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 animate-fade-in-up [animation-delay:200ms]">
            Let me protect your business from hackers, trolls, and AI mischief. 
            Trust a human hacker who still loves AI – in moderation!
          </p>
          <div className="text-center animate-fade-in-up [animation-delay:250ms]">
            <a 
              href="https://muhammadmurtuza.framer.website/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm"
            >
              Check out my portfolio →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.name}
              className={`transition-smooth hover:scale-105 hover:shadow-card animate-fade-in-up ${
                service.featured ? 'border-primary border-2 shadow-glow-pink' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                {service.featured && (
                  <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-2 w-fit">
                    MOST POPULAR
                  </div>
                )}
                <CardTitle className="text-2xl">{service.name}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={handleBooking}
                  className="w-full font-semibold"
                  variant={service.featured ? "default" : "outline"}
                >
                  Book a Consultation
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;