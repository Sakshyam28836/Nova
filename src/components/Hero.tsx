
import { Bot, Shield, Zap, Users, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 md:pt-24 lg:pt-32 pb-16 md:pb-20 lg:pb-24 section-bg-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-in">
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="p-4 md:p-6 glass-effect hero-glow">
              <img 
                src="/lovable-uploads/112a0c03-f028-4202-8084-9b6481cdccc9.png" 
                alt="Zero Bot" 
                className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 gradient-text leading-tight">
            Zero Discord Bot
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            The ultimate Discord bot with 15+ powerful features to manage, entertain, and grow your server community with professional-grade tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16">
            <a 
              href="https://discord.com/oauth2/authorize?client_id=1380841482948448357&permissions=8&integration_type=0&scope=bot+applications.commands"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 w-full sm:w-auto text-base md:text-lg"
            >
              <Bot className="h-5 w-5" />
              Invite Zero Bot
              <ExternalLink className="h-4 w-4" />
            </a>
            <a 
              href="https://discord.gg/vdHy6VPR8f"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2 w-full sm:w-auto text-base md:text-lg"
            >
              <Shield className="h-5 w-5" />
              Join Support Server
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-2xl mx-auto">
            <div className="glass-effect p-3 md:p-4 hover:bg-card/50 transition-all duration-300 group">
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm md:text-base">Moderation</h3>
            </div>
            <div className="glass-effect p-3 md:p-4 hover:bg-card/50 transition-all duration-300 group">
              <Zap className="h-6 w-6 md:h-8 md:w-8 text-yellow-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm md:text-base">Lightning Fast</h3>
            </div>
            <div className="glass-effect p-3 md:p-4 hover:bg-card/50 transition-all duration-300 group">
              <Bot className="h-6 w-6 md:h-8 md:w-8 text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm md:text-base">AI Powered</h3>
            </div>
            <div className="glass-effect p-3 md:p-4 hover:bg-card/50 transition-all duration-300 group">
              <Users className="h-6 w-6 md:h-8 md:w-8 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm md:text-base">Community</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
