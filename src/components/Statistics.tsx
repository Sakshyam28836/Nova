
import { Users, Server, MessageSquare, Clock, Activity, Zap, Shield, Heart, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const Statistics = () => {
  const [counts, setCounts] = useState({
    commands: 0,
    uptime: 0
  });

  const stats = [
    { label: "Commands Used", value: "2M+", target: 2000000, icon: MessageSquare, color: "text-purple-400" },
    { label: "Uptime", value: "99.9%", target: 99.9, icon: Clock, color: "text-yellow-400" }
  ];

  const additionalStats = [
    { label: "Response Time", value: "< 50ms", icon: Zap, color: "text-cyan-400" },
    { label: "Moderation Actions", value: "500K+", icon: Shield, color: "text-red-400" },
    { label: "User Satisfaction", value: "98%", icon: Heart, color: "text-pink-400" },
    { label: "Monthly Growth", value: "+15%", icon: TrendingUp, color: "text-orange-400" }
  ];

  // Animate counters on mount
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat) => {
      let currentCount = 0;
      const increment = stat.target / steps;
      
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.target) {
          currentCount = stat.target;
          clearInterval(timer);
        }
        
        setCounts(prev => ({
          ...prev,
          [stat.label.toLowerCase().replace(' ', '').replace('used', '')]: currentCount
        }));
      }, stepDuration);

      return () => clearInterval(timer);
    });
  }, []);

  const formatNumber = (num: number, original: string) => {
    if (original.includes('%')) return `${num.toFixed(1)}%`;
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M+`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K+`;
    return num.toString();
  };

  return (
    <section id="stats" className="py-16 md:py-20 section-bg-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12 md:mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text">
            Performance Excellence
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8">
            Built for reliability, speed, and seamless Discord integration with enterprise-grade performance
          </p>
          <a 
            href="https://zstatus.indmc.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
          >
            <Activity className="h-5 w-5" />
            Live Status
          </a>
        </div>

        {/* Core Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div key={stat.label} className="stats-card text-center group">
              <div className="inline-flex items-center justify-center p-4 md:p-6 bg-secondary/30 rounded-2xl mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <stat.icon className={`h-8 w-8 md:h-10 md:w-10 ${stat.color} group-hover:text-primary transition-colors duration-300`} />
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 gradient-text transition-all duration-300">
                {stat.label === 'Commands Used' && formatNumber(counts.commands, stat.value)}
                {stat.label === 'Uptime' && formatNumber(counts.uptime, stat.value)}
              </div>
              <div className="text-base md:text-lg text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="glass-effect p-6 md:p-8 mb-12 hover:bg-card/30 transition-all duration-300">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 gradient-text">
            Advanced Performance Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {additionalStats.map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="inline-flex items-center justify-center p-3 bg-secondary/50 rounded-xl mb-3 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <stat.icon className={`h-5 w-5 md:h-6 md:w-6 ${stat.color} group-hover:text-primary transition-colors duration-300`} />
                </div>
                <div className="text-lg md:text-xl font-bold mb-1 text-primary">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* System Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="glass-effect p-4 md:p-6 text-center border-green-500/20 hover:border-green-500/40 transition-all duration-300">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h4 className="font-semibold text-green-400">Bot Online</h4>
            </div>
            <p className="text-sm text-muted-foreground">All systems operational</p>
          </div>

          <div className="glass-effect p-4 md:p-6 text-center border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <h4 className="font-semibold text-blue-400">API Status</h4>
            </div>
            <p className="text-sm text-muted-foreground">Fast response times</p>
          </div>

          <div className="glass-effect p-4 md:p-6 text-center border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <h4 className="font-semibold text-purple-400">Database</h4>
            </div>
            <p className="text-sm text-muted-foreground">Stable & secure</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
