import { Award, Users, TrendingUp } from "lucide-react";
import profileImage from "@/assets/muhammad-murtuza.png";
const stats = [{
  icon: Users,
  value: "100+",
  label: "Happy Clients"
}, {
  icon: Award,
  value: "10+",
  label: "Hackathons Won"
}, {
  icon: TrendingUp,
  value: "99.9%",
  label: "Success Rate"
}];
const AboutSection = () => {
  return <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Bio with Image */}
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <div className="relative inline-block">
                <div className="absolute inset-0 gradient-hero rounded-full blur-2xl opacity-60" />
                <img src={profileImage} alt="Muhammad Murtuza - Cybersecurity Consultant" className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary shadow-glow-pink" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              About Muhammad
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">Ethical hacker, consultant, and educator helping businesses stay secure in an increasingly digital world. With over a decade of experience in cybersecurity, I've protected organisations from threats both old and new (yes, even AI-powered ones).</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not breaking into systems (legally!), I'm probably exploring the latest AI tools or explaining 
              why your password shouldn't be "Password123".
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-6 animate-fade-in-up [animation-delay:200ms]">
            {stats.map((stat, index) => {
            const Icon = stat.icon;
            return <div key={stat.label} className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border transition-smooth hover:shadow-card hover:scale-105" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;