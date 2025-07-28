
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Bot, ExternalLink } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId: string) => {
    if (location.pathname === '/') {
      // If already on home page, just scroll to section
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If on different page, navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 animate-slide-down">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 md:space-x-3 hover:scale-105 transition-transform duration-300">
            <div className="p-1.5 md:p-2 bg-primary/20 rounded-lg animate-pulse-glow">
              <img 
                src="/lovable-uploads/48d5ac17-7fc6-4a8e-bfea-36c8dc2cc75b.png" 
                alt="Nova Bot" 
                className="h-6 w-6 md:h-8 md:w-8"
              />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold gradient-text">Nova Bot</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Discord Management</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => handleNavigation('#features')} 
              className="nav-link cursor-pointer"
            >
              Features
            </button>
            <Link to="/commands" className="nav-link">
              Commands
            </Link>
            <button 
              onClick={() => handleNavigation('#stats')} 
              className="nav-link cursor-pointer"
            >
              Statistics
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://discord.com/oauth2/authorize?client_id=1295630240852344842&permissions=8&integration_type=0&scope=bot+applications.commands"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary animate-bounce-subtle"
            >
              Invite Nova
            </a>
          </div>

          <button 
            className="md:hidden p-2 hover:bg-secondary/50 rounded-lg transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/50 animate-slide-in-down">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => handleNavigation('#features')} 
                className="mobile-nav-link text-left cursor-pointer"
              >
                Features
              </button>
              <Link 
                to="/commands" 
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Commands
              </Link>
              <button 
                onClick={() => handleNavigation('#stats')} 
                className="mobile-nav-link text-left cursor-pointer"
              >
                Statistics
              </button>
              <div className="pt-2 border-t border-border/50">
                <a 
                  href="https://discord.com/oauth2/authorize?client_id=1295630240852344842&permissions=8&integration_type=0&scope=bot+applications.commands"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium text-center hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Invite Nova
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
