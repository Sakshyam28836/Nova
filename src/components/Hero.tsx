
import { Bot, Shield, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-20 md:pt-24 lg:pt-32 pb-16 md:pb-20 lg:pb-24 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="p-4 md:p-6 bg-primary/20 rounded-2xl hero-glow">
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
            The ultimate Discord bot with 15+ powerful features to manage, entertain, and grow your server community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16">
            <a 
              href="https://discord.com/oauth2/authorize?client_id=1380841482948448357&permissions=8&integration_type=0&scope=bot+applications.commands"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold text-base md:text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              Invite Zero Bot
            </a>
            <a 
              href="https://discord.gg/vdHy6VPR8f"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-all duration-300 font-semibold text-base md:text-lg"
            >
              Join Support Server
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-2xl mx-auto">
            <div className="text-center p-3 md:p-4 bg-card/30 rounded-xl hover:bg-card/50 transition-colors">
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-blue-400 mx-auto mb-2" />
              <h3 className="font-semibold text-sm md:text-base">Moderation</h3>
            </div>
            <div className="text-center p-3 md:p-4 bg-card/30 rounded-xl hover:bg-card/50 transition-colors">
              <Zap className="h-6 w-6 md:h-8 md:w-8 text-yellow-400 mx-auto mb-2" />
              <h3 className="font-semibold text-sm md:text-base">Fast</h3>
            </div>
            <div className="text-center p-3 md:p-4 bg-card/30 rounded-xl hover:bg-card/50 transition-colors">
              <Bot className="h-6 w-6 md:h-8 md:w-8 text-green-400 mx-auto mb-2" />
              <h3 className="font-semibold text-sm md:text-base">Smart</h3>
            </div>
            <div className="text-center p-3 md:p-4 bg-card/30 rounded-xl hover:bg-card/50 transition-colors">
              <Users className="h-6 w-6 md:h-8 md:w-8 text-purple-400 mx-auto mb-2" />
              <h3 className="font-semibold text-sm md:text-base">Community</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
