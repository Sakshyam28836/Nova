
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
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Zero comes packed with everything you need to manage and enhance your Discord server
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={feature.name} className="feature-card group">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-secondary/50 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <feature.icon className={`h-8 w-8 ${feature.color} group-hover:text-primary transition-colors`} />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">{feature.name}</h3>
              <p className="text-muted-foreground text-sm text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold text-lg hover:scale-105">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
