
import { Bot, Shield, Zap, Users, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="pt-20 md:pt-24 lg:pt-32 pb-16 md:pb-20 lg:pb-24 section-bg-primary relative overflow-hidden">
      {/* Enhanced animated background with mouse interaction */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float transition-transform duration-1000 ease-out"
          style={{ 
            transform: `translateY(${scrollY * 0.1}px) translateX(${mousePosition.x * 0.01}px)` 
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-delayed transition-transform duration-1000 ease-out"
          style={{ 
            transform: `translateY(${scrollY * -0.1}px) translateX(${mousePosition.y * -0.01}px)` 
          }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent animate-pulse-slow"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.3)_1px,transparent_1px)] bg-[size:100px_100px] animate-grid-move"></div>
        </div>
        
        {/* Enhanced floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-particle-float"
              style={{
                left: `${15 + i * 7}%`,
                top: `${20 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="p-4 md:p-6 glass-effect hero-glow animate-scale-in relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse-glow group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500"></div>
              <img 
                src="/lovable-uploads/48d5ac17-7fc6-4a8e-bfea-36c8dc2cc75b.png" 
                alt="Nova Bot" 
                className="relative h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 animate-glow-pulse group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-spin-slow"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight animate-text-reveal">
            <span className="inline-block animate-slide-up-delayed gradient-text animate-text-shimmer">Nova</span>{" "}
            <span className="inline-block animate-slide-up-delayed gradient-text animate-text-shimmer-delayed">Discord</span>{" "}
            <span className="inline-block animate-slide-up-more-delayed gradient-text animate-text-shimmer-more-delayed">Bot</span>
          </h1>
          
          <div className="relative mb-8 md:mb-12">
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed animate-typing-reveal">
              The ultimate Discord bot with powerful features to manage and grow your server community.
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse-slow"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16 animate-buttons-entrance">
            <a 
              href="https://discord.com/oauth2/authorize?client_id=1295630240852344842&permissions=8&integration_type=0&scope=bot+applications.commands"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-magnetic flex items-center gap-2 w-full sm:w-auto text-base md:text-lg animate-btn-hover group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Bot className="h-5 w-5 animate-pulse group-hover:animate-none group-hover:rotate-12 transition-transform duration-300" />
              Add to Discord
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
            <a 
              href="https://discord.gg/vdHy6VPR8f"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn-magnetic flex items-center gap-2 w-full sm:w-auto text-base md:text-lg animate-btn-hover-delayed group"
            >
              <Shield className="h-5 w-5 group-hover:animate-pulse group-hover:scale-110 transition-transform duration-300" />
              Support Server
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-2xl mx-auto">
            {[
              { icon: Shield, text: "Secure", color: "text-blue-400", delay: "0s", bg: "from-blue-500/10 to-blue-600/5" },
              { icon: Zap, text: "Fast", color: "text-yellow-400", delay: "0.1s", bg: "from-yellow-500/10 to-yellow-600/5" },
              { icon: Bot, text: "Smart", color: "text-green-400", delay: "0.2s", bg: "from-green-500/10 to-green-600/5" },
              { icon: Users, text: "Reliable", color: "text-purple-400", delay: "0.3s", bg: "from-purple-500/10 to-purple-600/5" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="glass-effect p-3 md:p-4 hover:bg-card/50 transition-all duration-500 group animate-feature-card relative overflow-hidden cursor-pointer hover:scale-110 hover:-translate-y-2" 
                style={{ animationDelay: item.delay }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <item.icon className={`relative h-6 w-6 md:h-8 md:w-8 ${item.color} mx-auto mb-2 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 animate-icon-float`} />
                <h3 className="relative font-semibold text-sm md:text-base animate-text-glow group-hover:text-white transition-colors duration-300">{item.text}</h3>
                <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 rounded-xl transition-colors duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
