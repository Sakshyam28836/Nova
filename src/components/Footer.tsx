
import { Bot, ExternalLink, Github, Twitter, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-card/20 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold gradient-text">Zero Bot</h3>
                <p className="text-sm text-muted-foreground">Discord Management</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              The ultimate Discord bot with 15+ powerful features to manage, entertain, and grow your server community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Moderation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Economy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Music</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fun Commands</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Discord Server</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Status Page</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Zero Bot. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors flex items-center gap-1">
                Invite Bot <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
