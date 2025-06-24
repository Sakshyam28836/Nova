
import { Bot, ExternalLink, Shield, Star } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="invite" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-4 bg-primary/20 rounded-2xl mb-8 hero-glow">
            <Bot className="h-12 w-12 text-primary" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform</span> Your Server?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of Discord servers using Zero to create amazing communities. 
            Get started in seconds with our easy setup process.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="https://discord.com/oauth2/authorize?client_id=1380841482948448357&permissions=8&integration_type=0&scope=bot+applications.commands"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2 hover:scale-105 group"
            >
              <Bot className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              Add to Discord
              <ExternalLink className="h-4 w-4" />
            </a>
            
            <a 
              href="https://discord.gg/5aMghbn2uW"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-xl hover:bg-secondary/80 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2 hover:scale-105"
            >
              <Shield className="h-5 w-5" />
              Join Support Server
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <Star className="h-6 w-6 text-yellow-400 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Easy Setup</h3>
              <p className="text-sm text-muted-foreground">Get started in under 2 minutes</p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <Shield className="h-6 w-6 text-green-400 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Secure & Safe</h3>
              <p className="text-sm text-muted-foreground">Minimal permissions required</p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <Bot className="h-6 w-6 text-blue-400 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Always here to help</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
