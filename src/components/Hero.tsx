
import { Bot, Sparkles, Users, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center p-4 bg-primary/20 rounded-2xl mb-6 hero-glow">
            <Bot className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Meet <span className="gradient-text">Zero</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            The ultimate Discord bot with 15+ powerful features to manage, entertain, and grow your server
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2 hover:scale-105">
            <Zap className="h-5 w-5" />
            Invite Zero Now
          </button>
          <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-xl hover:bg-secondary/80 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2 hover:scale-105">
            <Users className="h-5 w-5" />
            View Features
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6">
            <Sparkles className="h-8 w-8 text-accent mb-3 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">15+ Features</h3>
            <p className="text-muted-foreground">From moderation to entertainment</p>
          </div>
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6">
            <Users className="h-8 w-8 text-primary mb-3 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">10,000+ Servers</h3>
            <p className="text-muted-foreground">Trusted by communities worldwide</p>
          </div>
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6">
            <Zap className="h-8 w-8 text-accent mb-3 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">99.9% Uptime</h3>
            <p className="text-muted-foreground">Reliable and always online</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
