
import { ExternalLink, Github, Twitter, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 bg-card/20 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <img 
                  src="/lovable-uploads/48d5ac17-7fc6-4a8e-bfea-36c8dc2cc75b.png" 
                  alt="Nova Bot" 
                  className="h-6 w-6"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold gradient-text">Nova Bot</h3>
                <p className="text-sm text-muted-foreground">Discord Management</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md text-sm md:text-base">
              The ultimate Discord bot with 20+ powerful features to manage, entertain, and grow your server community.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <a href="#" className="p-2 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors">
                <Twitter className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="p-2 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors">
                <Github className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="https://discord.gg/vdHy6VPR8f" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors">
                <MessageSquare className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm md:text-base">Features</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Moderation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Economy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Music</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fun Commands</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm md:text-base">Links</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><Link to="/commands" className="hover:text-primary transition-colors">Commands</Link></li>
              <li><a href="https://discord.gg/vdHy6VPR8f" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                Support Server <ExternalLink className="h-3 w-3" />
              </a></li>
              <li><a href="https://discord.com/oauth2/authorize?client_id=1295630240852344842&permissions=8&integration_type=0&scope=bot+applications.commands" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                Invite Bot <ExternalLink className="h-3 w-3" />
              </a></li>
              <li><Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
              
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © 2025 Nova Bot. All rights reserved with Hexa Development. Developed By Sakshyam paudel and Aadesh Kharel🇳🇵.
            </p>
            <div className="flex items-center space-x-4 md:space-x-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
