
import { Bot, Shield, Zap, Users, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 md:pt-24 lg:pt-32 pb-16 md:pb-20 lg:pb-24 section-bg-primary relative overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent animate-pulse-slow"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="p-4 md:p-6 glass-effect hero-glow animate-scale-in">
              <img 
                src="/lovable-uploads/48d5ac17-7fc6-4a8e-bfea-36c8dc2cc75b.png" 
                alt="Zero Bot" 
                className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 animate-glow-pulse"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 gradient-text leading-tight animate-text-reveal">
            <span className="inline-block animate-slide-up">Zero</span>{" "}
            <span className="inline-block animate-slide-up-delayed">Discord</span>{" "}
            <span className="inline-block animate-slide-up-more-delayed">Bot</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
            The ultimate Discord bot with powerful features to manage and grow your server community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16 animate-buttons-entrance">
            <a 
              href="https://discord.com/oauth2/authorize?client_id=1380841482948448357&permissions=8&integration_type=0&scope=bot+applications.commands"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 w-full sm:w-auto text-base md:text-lg animate-btn-hover"
            >
              <Bot className="h-5 w-5 animate-pulse" />
              Add to Discord
              <ExternalLink className="h-4 w-4" />
            </a>
            <a 
              href="https://discord.gg/vdHy6VPR8f"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2 w-full sm:w-auto text-base md:text-lg animate-btn-hover-delayed"
            >
              <Shield className="h-5 w-5" />
              Support Server
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-2xl mx-auto">
            {[
              { icon: Shield, text: "Secure", color: "text-blue-400", delay: "0s" },
              { icon: Zap, text: "Fast", color: "text-yellow-400", delay: "0.1s" },
              { icon: Bot, text: "Smart", color: "text-green-400", delay: "0.2s" },
              { icon: Users, text: "Reliable", color: "text-purple-400", delay: "0.3s" }
            ].map((item, index) => (
              <div key={index} className="glass-effect p-3 md:p-4 hover:bg-card/50 transition-all duration-300 group animate-feature-card" style={{ animationDelay: item.delay }}>
                <item.icon className={`h-6 w-6 md:h-8 md:w-8 ${item.color} mx-auto mb-2 group-hover:scale-125 transition-transform duration-300 animate-icon-float`} />
                <h3 className="font-semibold text-sm md:text-base animate-text-glow">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
