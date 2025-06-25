
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 md:space-x-3">
            <div className="p-1.5 md:p-2 bg-primary/20 rounded-lg">
              <img 
                src="/lovable-uploads/112a0c03-f028-4202-8084-9b6481cdccc9.png" 
                alt="Zero Bot" 
                className="h-6 w-6 md:h-8 md:w-8"
              />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold gradient-text">Zero Bot</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Discord Management</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors text-sm lg:text-base">
              Features
            </a>
            <Link to="/commands" className="text-foreground hover:text-primary transition-colors text-sm lg:text-base">
              Commands
            </Link>
            <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors text-sm lg:text-base">
              Dashboard
            </Link>
            <a href="#stats" className="text-foreground hover:text-primary transition-colors text-sm lg:text-base">
              Statistics
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://discord.com/oauth2/authorize?client_id=1380841482948448357&permissions=8&integration_type=0&scope=bot+applications.commands"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 lg:px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm lg:text-base"
            >
              Invite Zero
            </a>
          </div>

          <button 
            className="md:hidden p-2 hover:bg-secondary/50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/50 animate-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#features" 
                className="text-foreground hover:text-primary transition-colors py-2 px-2 rounded-lg hover:bg-secondary/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <Link 
                to="/commands" 
                className="text-foreground hover:text-primary transition-colors py-2 px-2 rounded-lg hover:bg-secondary/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Commands
              </Link>
              <Link 
                to="/dashboard" 
                className="text-foreground hover:text-primary transition-colors py-2 px-2 rounded-lg hover:bg-secondary/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <a 
                href="#stats" 
                className="text-foreground hover:text-primary transition-colors py-2 px-2 rounded-lg hover:bg-secondary/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Statistics
              </a>
              <div className="pt-2 border-t border-border/50">
                <a 
                  href="https://discord.com/oauth2/authorize?client_id=1380841482948448357&permissions=8&integration_type=0&scope=bot+applications.commands"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Invite Zero
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
