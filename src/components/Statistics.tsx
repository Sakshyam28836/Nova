
import { MessageSquare, Clock, Activity, Zap, Shield, Heart } from "lucide-react";

const Statistics = () => {
  const stats = [
    { label: "Commands", value: "1M+", icon: MessageSquare, color: "text-purple-400" },
    { label: "Uptime", value: "99.9%", icon: Clock, color: "text-green-400" },
    { label: "Response Time", value: "< 50ms", icon: Zap, color: "text-yellow-400" },
    { label: "Satisfaction", value: "98%", icon: Heart, color: "text-pink-400" }
  ];

  return (
    <section id="stats" className="py-16 md:py-20 section-bg-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12 md:mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text">
            Proven Performance
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8">
            Built for reliability and speed with enterprise-grade performance
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={stat.label} className="stats-card text-center group">
              <div className="inline-flex items-center justify-center p-4 bg-secondary/30 rounded-2xl mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <stat.icon className={`h-6 w-6 md:h-8 md:w-8 ${stat.color} group-hover:text-primary transition-colors duration-300`} />
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-2 gradient-text">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 max-w-3xl mx-auto">
          <div className="glass-effect p-4 md:p-6 text-center border-green-500/20 hover:border-green-500/40 transition-all duration-300">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h4 className="font-semibold text-green-400">Online</h4>
            </div>
            <p className="text-sm text-muted-foreground">All systems operational</p>
          </div>

          <div className="glass-effect p-4 md:p-6 text-center border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <h4 className="font-semibold text-blue-400">API</h4>
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
