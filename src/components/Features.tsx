
import { 
  Users, 
  Hammer, 
  DollarSign, 
  Bot, 
  Lock, 
  BarChart3, 
  Search,
  Sparkles,
  Gift,
  Link,
  Settings,
  Music,
  MessageSquare,
  Ticket,
  Heart
} from "lucide-react";

const Features = () => {
  const features = [
    { name: "Moderation", icon: Hammer, description: "Advanced moderation tools", color: "text-red-400" },
    { name: "Economy", icon: DollarSign, description: "Virtual currency system", color: "text-green-400" },
    { name: "Music", icon: Music, description: "High-quality music player", color: "text-purple-400" },
    { name: "Fun", icon: Sparkles, description: "Entertainment commands", color: "text-yellow-400" },
    { name: "Utility", icon: Search, description: "Helpful utility tools", color: "text-blue-400" },
    { name: "Statistics", icon: BarChart3, description: "Server analytics", color: "text-cyan-400" },
    { name: "Giveaways", icon: Gift, description: "Giveaway management", color: "text-pink-400" },
    { name: "Tickets", icon: Ticket, description: "Support ticket system", color: "text-orange-400" }
  ];

  return (
    <section id="features" className="py-16 md:py-20 section-bg-secondary relative">
      <div className="container">
        <div className="text-center mb-12 md:mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text">
            Powerful Features
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage and enhance your Discord server
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div key={feature.name} className="feature-card group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-secondary/50 rounded-lg group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className={`h-6 w-6 md:h-8 md:w-8 ${feature.color} group-hover:text-primary transition-colors duration-300`} />
                </div>
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-2 text-center">{feature.name}</h3>
              <p className="text-muted-foreground text-sm text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
