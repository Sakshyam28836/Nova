
import { Bot, ExternalLink, Shield, Star } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="invite" className="py-16 md:py-20 section-bg-secondary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <div className="inline-flex items-center justify-center p-4 glass-effect hero-glow mb-8">
            <Bot className="h-12 w-12 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 gradient-text">
            Experience <span className="text-accent">Nova</span> Today
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Professional Discord bot management with advanced features and reliable performance. 
            Join the Nova ecosystem with our streamlined setup process.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="https://discord.com/oauth2/authorize?client_id=1295630240852344842&permissions=8&integration_type=0&scope=bot+applications.commands"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2 text-lg group"
            >
              <Bot className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Add to Discord
              <ExternalLink className="h-4 w-4" />
            </a>
            
            <a 
              href="https://discord.gg/vdHy6VPR8f"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center gap-2 text-lg"
            >
              <Shield className="h-5 w-5" />
              Join Support Server
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="glass-effect p-6 hover:bg-card/40 transition-all duration-300 border border-yellow-400/20">
              <Star className="h-6 w-6 text-yellow-400 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Professional Setup</h3>
              <p className="text-sm text-muted-foreground">Enterprise-grade deployment</p>
            </div>
            
            <div className="glass-effect p-6 hover:bg-card/40 transition-all duration-300 border border-green-400/20">
              <Shield className="h-6 w-6 text-green-400 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-sm text-muted-foreground">Minimal permissions, maximum security</p>
            </div>
            
            <div className="glass-effect p-6 hover:bg-card/40 transition-all duration-300 border border-blue-400/20">
              <Bot className="h-6 w-6 text-blue-400 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">24/7 Operations</h3>
              <p className="text-sm text-muted-foreground">Continuous support & monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
