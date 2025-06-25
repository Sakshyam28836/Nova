
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
    { name: "Admin", icon: Settings, description: "Complete server administration tools", color: "text-red-400" },
    { name: "Anime", icon: Heart, description: "Anime commands and content", color: "text-pink-400" },
    { name: "Automod", icon: Hammer, description: "Automated moderation system", color: "text-orange-400" },
    { name: "Economy", icon: DollarSign, description: "Virtual economy and currency", color: "text-green-400" },
    { name: "Fun", icon: Sparkles, description: "Entertainment and games", color: "text-yellow-400" },
    { name: "Giveaway", icon: Gift, description: "Giveaway management system", color: "text-purple-400" },
    { name: "Invite", icon: Link, description: "Invitation tracking and rewards", color: "text-blue-400" },
    { name: "Information", icon: Bot, description: "Server and user information", color: "text-cyan-400" },
    { name: "Moderation", icon: Settings, description: "Advanced moderation tools", color: "text-red-500" },
    { name: "Music", icon: Music, description: "High-quality music streaming", color: "text-indigo-400" },
    { name: "Owner", icon: Lock, description: "Bot owner exclusive commands", color: "text-gray-400" },
    { name: "Social", icon: MessageSquare, description: "Social interaction features", color: "text-green-500" },
    { name: "Statistics", icon: BarChart3, description: "Detailed server analytics", color: "text-blue-500" },
    { name: "Suggestions", icon: MessageSquare, description: "Community suggestion system", color: "text-teal-400" },
    { name: "Ticket", icon: Ticket, description: "Support ticket management", color: "text-amber-400" },
    { name: "Utility", icon: Search, description: "Essential utility commands", color: "text-slate-400" }
  ];

  return (
    <section id="features" className="py-16 md:py-20 section-bg-secondary relative">
      <div className="container">
        <div className="text-center mb-12 md:mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text">
            Powerful Features
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Zero comes packed with everything you need to manage and enhance your Discord server with professional-grade tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
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

        <div className="text-center">
          <button className="btn-primary text-lg">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
