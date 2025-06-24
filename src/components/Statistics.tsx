
import { Users, Server, MessageSquare, Clock } from "lucide-react";

const Statistics = () => {
  const stats = [
    { label: "Servers", value: "10,000+", icon: Server, color: "text-blue-400" },
    { label: "Users", value: "500K+", icon: Users, color: "text-green-400" },
    { label: "Commands Used", value: "2M+", icon: MessageSquare, color: "text-purple-400" },
    { label: "Uptime", value: "99.9%", icon: Clock, color: "text-yellow-400" }
  ];

  return (
    <section id="stats" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Trusted Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of Discord communities already using Zero
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center p-4 bg-card/30 rounded-2xl mb-4">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
