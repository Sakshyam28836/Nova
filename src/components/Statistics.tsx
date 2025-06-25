
import { Users, Server, MessageSquare, Clock, Activity } from "lucide-react";

const Statistics = () => {
  const stats = [
    { label: "Servers", value: "10,000+", icon: Server, color: "text-blue-400" },
    { label: "Users", value: "500K+", icon: Users, color: "text-green-400" },
    { label: "Commands Used", value: "2M+", icon: MessageSquare, color: "text-purple-400" },
    { label: "Uptime", value: "99.9%", icon: Clock, color: "text-yellow-400" }
  ];

  return (
    <section id="stats" className="py-16 md:py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text">
            Trusted Worldwide
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8">
            Join thousands of Discord communities already using Zero
          </p>
          <a 
            href="https://zstatus.indmc.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
          >
            <Activity className="h-5 w-5" />
            Live Status
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center p-3 md:p-4 bg-card/30 rounded-2xl mb-3 md:mb-4">
                <stat.icon className={`h-6 w-6 md:h-8 md:w-8 ${stat.color}`} />
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
