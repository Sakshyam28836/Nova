
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Bot, RefreshCw, MessageSquare, Home, AlertTriangle, Shield, Zap } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleReload = () => {
    console.log('User requested reload from 404 page');
    window.location.href = "https://zero.indmc.fun";
  };

  const handleGoHome = () => {
    console.log('User requested home navigation from 404 page');
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto px-6">
        <div className="glass-effect p-8 rounded-2xl animate-fade-in-scale">
          {/* Bot icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="p-6 bg-primary rounded-full">
                <Bot className="h-20 w-20 text-primary-foreground" />
              </div>
              <div className="absolute -top-2 -right-2 p-2 bg-yellow-500 rounded-full">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          {/* Error message */}
          <div className="mb-8">
            <h1 className="text-7xl font-bold mb-4 text-primary">404</h1>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Page Not Found</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-primary" />
              <p className="text-muted-foreground font-medium">
                This is completely normal! Zero Bot is working perfectly.
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Zap className="h-4 w-4 text-yellow-500" />
              <p className="text-sm text-muted-foreground">
                Simply reload the page to continue using Zero Bot
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-4 mb-8">
            <button
              onClick={handleReload}
              className="w-full btn-primary flex items-center justify-center gap-3 text-lg py-4 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <RefreshCw className="h-6 w-6" />
              Reload Zero Bot
            </button>

            <button
              onClick={handleGoHome}
              className="w-full btn-secondary flex items-center justify-center gap-3 text-lg py-4 hover:scale-105 transition-all duration-300"
            >
              <Home className="h-6 w-6" />
              Go to Homepage
            </button>
          </div>

          {/* Support section */}
          <div className="pt-6 border-t border-border mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MessageSquare className="h-5 w-5 text-primary" />
              <p className="font-semibold text-foreground">Need Help?</p>
            </div>
            <a
              href="https://discord.gg/vdHy6VPR8f"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#5865f2] hover:bg-[#4752c4] text-white rounded-lg transition-all duration-300 hover:scale-105 font-medium shadow-lg"
            >
              <MessageSquare className="h-5 w-5" />
              Join Zero Support Server
            </a>
            <p className="text-xs text-muted-foreground mt-3">
              Get instant support from our community & team!
            </p>
          </div>

          {/* Bot branding */}
          <div className="pt-6 border-t border-border">
            <div className="flex items-center justify-center gap-4">
              <img 
                src="/lovable-uploads/48d5ac17-7fc6-4a8e-bfea-36c8dc2cc75b.png" 
                alt="Zero Bot" 
                className="h-12 w-12 rounded-lg shadow-lg"
              />
              <div>
                <h3 className="font-bold text-primary text-xl">Zero Bot</h3>
                <p className="text-sm text-muted-foreground">Advanced Discord Management System</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-500">Online & Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
