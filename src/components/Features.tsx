
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
    <section id="features" className="py-16 md:py-20 section-bg-secondary relative overflow-hidden">
      {/* Enhanced background animations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse-slow"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12 md:mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text animate-text-shimmer">
            Powerful Features
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-typing-reveal">
            Everything you need to manage and enhance your Discord server
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.name} 
              className="feature-card group cursor-pointer relative overflow-hidden hover:scale-105 hover:-translate-y-3 transition-all duration-500" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-secondary/50 rounded-lg group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
                    <feature.icon className={`relative h-6 w-6 md:h-8 md:w-8 ${feature.color} group-hover:text-primary transition-colors duration-300`} />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-center group-hover:text-primary transition-colors duration-300">{feature.name}</h3>
                <p className="text-muted-foreground text-sm text-center leading-relaxed group-hover:text-accent transition-colors duration-300">{feature.description}</p>
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 rounded-xl transition-colors duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
