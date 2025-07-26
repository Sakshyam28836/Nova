
import { Bot, ExternalLink, Settings, Shield, Users, BarChart3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-4 bg-primary/20 rounded-2xl mb-6">
              <Settings className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nova Bot <span className="gradient-text">Dashboard</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Manage your Discord server with Nova's powerful web dashboard
            </p>
          </div>

          {/* Dashboard Setup Section */}
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-8 mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                <span className="gradient-text">Nova Dashboard Setup</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Access the complete Nova Bot dashboard to configure settings, view analytics, and manage your server from anywhere.
              </p>
              
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 mb-8 max-w-md mx-auto">
                <h3 className="text-lg font-semibold mb-3">Dashboard URL</h3>
                <div className="bg-secondary/50 rounded-lg p-3 font-mono text-sm break-all">
                  http://meta.wisp.uno:11895
                </div>
              </div>

              <a 
                href="http://meta.wisp.uno:11895"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                <Settings className="h-5 w-5" />
                Access Dashboard
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Dashboard Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Settings className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold">Server Configuration</h3>
              </div>
              <p className="text-muted-foreground">
                Configure bot settings, permissions, and customize features for your Discord server.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold">Analytics & Stats</h3>
              </div>
              <p className="text-muted-foreground">
                View detailed analytics, member activity, and server statistics in real-time.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold">Member Management</h3>
              </div>
              <p className="text-muted-foreground">
                Manage members, roles, and moderation actions directly from the web interface.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <Shield className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold">Moderation Tools</h3>
              </div>
              <p className="text-muted-foreground">
                Access advanced moderation features, automod settings, and security controls.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                  <Bot className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold">Bot Controls</h3>
              </div>
              <p className="text-muted-foreground">
                Control bot behavior, enable/disable features, and customize responses.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <ExternalLink className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold">Quick Actions</h3>
              </div>
              <p className="text-muted-foreground">
                Perform common tasks quickly with one-click actions and shortcuts.
              </p>
            </div>
          </div>

          {/* Getting Started */}
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Getting Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold mb-2">Invite Nova Bot</h3>
                <p className="text-muted-foreground text-sm">Add Nova to your Discord server with the required permissions.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold mb-2">Access Dashboard</h3>
                <p className="text-muted-foreground text-sm">Login to the web dashboard using your Discord account.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold mb-2">Configure Settings</h3>
                <p className="text-muted-foreground text-sm">Customize Nova's features to match your server's needs.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
