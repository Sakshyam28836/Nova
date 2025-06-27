
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Bot, RefreshCw, MessageSquare, Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleReload = () => {
    window.location.href = "https://zero.indmc.fun";
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        <div className="glass-effect p-8 rounded-2xl">
          {/* Bot icon with Discord colors */}
          <div className="flex justify-center mb-6">
            <div className="p-4 discord-primary rounded-full animate-pulse-glow relative">
              <Bot className="h-16 w-16 text-white" />
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow"></div>
            </div>
          </div>

          {/* Error message */}
          <div className="mb-6">
            <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
            <h2 className="text-2xl font-bold mb-3 text-foreground">Page Not Found</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              <p className="text-muted-foreground">
                Don't worry, this is normal! Just reload the page.
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-4">
            <button
              onClick={handleReload}
              className="w-full btn-primary flex items-center justify-center gap-3 text-lg py-4 hover:scale-105 transition-transform duration-300"
            >
              <RefreshCw className="h-5 w-5" />
              Reload Page
            </button>

            <button
              onClick={handleGoHome}
              className="w-full btn-secondary flex items-center justify-center gap-3 text-lg py-4 hover:scale-105 transition-transform duration-300"
            >
              <Home className="h-5 w-5" />
              Go Home
            </button>

            {/* Support section */}
            <div className="pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-3">Need help?</p>
              <a
                href="https://discord.gg/vdHy6VPR8f"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#5865f2] hover:bg-[#4752c4] text-white rounded-lg transition-all duration-300 hover:scale-105 font-medium"
              >
                <MessageSquare className="h-4 w-4" />
                Join Support Server
              </a>
            </div>
          </div>

          {/* Bot branding */}
          <div className="mt-8 pt-6 border-t border-border/50">
            <div className="flex items-center justify-center gap-3">
              <img 
                src="/lovable-uploads/48d5ac17-7fc6-4a8e-bfea-36c8dc2cc75b.png" 
                alt="Zero Bot" 
                className="h-8 w-8"
              />
              <div>
                <h3 className="font-bold gradient-text">Zero Bot</h3>
                <p className="text-xs text-muted-foreground">Discord Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
