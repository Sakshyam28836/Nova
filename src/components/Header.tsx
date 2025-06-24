
import { Bot, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Bot className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Zero Bot</h1>
              <p className="text-xs text-muted-foreground">Discord Management</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#stats" className="text-foreground hover:text-primary transition-colors">
              Statistics
            </a>
            <a href="#invite" className="text-foreground hover:text-primary transition-colors">
              Invite
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Invite Zero
            </button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#stats" className="text-foreground hover:text-primary transition-colors">
                Statistics
              </a>
              <a href="#invite" className="text-foreground hover:text-primary transition-colors">
                Invite
              </a>
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-left">
                Invite Zero
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
