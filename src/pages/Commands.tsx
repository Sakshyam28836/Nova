
import { Bot, Hash, Slash, Info, Users, DollarSign, Music, Hammer, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Commands = () => {
  const commandCategories = [
    {
      name: "General",
      icon: Info,
      color: "text-blue-400",
      commands: [
        { name: "*help", description: "Shows all available commands" },
        { name: "/help", description: "Slash command version of help" },
        { name: "*ping", description: "Check bot latency" },
        { name: "*info", description: "Bot information" }
      ]
    },
    {
      name: "Moderation",
      icon: Hammer,
      color: "text-red-400",
      commands: [
        { name: "*ban <user>", description: "Ban a user from the server" },
        { name: "*kick <user>", description: "Kick a user from the server" },
        { name: "*mute <user>", description: "Mute a user" },
        { name: "*warn <user>", description: "Warn a user" }
      ]
    },
    {
      name: "Economy",
      icon: DollarSign,
      color: "text-green-400",
      commands: [
        { name: "*balance", description: "Check your balance" },
        { name: "*daily", description: "Claim daily rewards" },
        { name: "*work", description: "Work to earn coins" },
        { name: "*shop", description: "View the shop" }
      ]
    },
    {
      name: "Music",
      icon: Music,
      color: "text-purple-400",
      commands: [
        { name: "*play <song>", description: "Play a song" },
        { name: "*stop", description: "Stop the music" },
        { name: "*skip", description: "Skip current song" },
        { name: "*queue", description: "View the queue" }
      ]
    },
    {
      name: "Fun",
      icon: Sparkles,
      color: "text-yellow-400",
      commands: [
        { name: "*meme", description: "Get a random meme" },
        { name: "*joke", description: "Get a random joke" },
        { name: "*8ball <question>", description: "Ask the magic 8-ball" },
        { name: "*roll", description: "Roll a dice" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-4 bg-primary/20 rounded-2xl mb-6">
              <Bot className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Zero Bot <span className="gradient-text">Commands</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Complete command reference for Zero Discord Bot
            </p>
          </div>

          {/* Prefix Information */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Hash className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Prefix Commands</h3>
                  <p className="text-muted-foreground">Use <code className="bg-secondary px-2 py-1 rounded text-primary">*</code> before commands</p>
                  <p className="text-sm text-muted-foreground mt-1">Example: <code className="bg-secondary px-2 py-1 rounded">*help</code></p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <Slash className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Slash Commands</h3>
                  <p className="text-muted-foreground">Use <code className="bg-secondary px-2 py-1 rounded text-accent">/</code> for slash commands</p>
                  <p className="text-sm text-muted-foreground mt-1">Example: <code className="bg-secondary px-2 py-1 rounded">/help</code></p>
                </div>
              </div>
            </div>
          </div>

          {/* Command Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {commandCategories.map((category, index) => (
              <div key={category.name} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-secondary/50 rounded-lg">
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.commands.map((command, cmdIndex) => (
                    <div key={cmdIndex} className="bg-secondary/30 rounded-lg p-4">
                      <code className="text-primary font-mono text-sm">{command.name}</code>
                      <p className="text-muted-foreground text-sm mt-1">{command.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Help Section */}
          <div className="mt-16 text-center">
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Need More Help?</h3>
              <p className="text-muted-foreground mb-6">
                Type <code className="bg-secondary px-2 py-1 rounded text-primary">*help</code> or <code className="bg-secondary px-2 py-1 rounded text-accent">/help</code> in your Discord server to get the complete command list!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://discord.gg/5aMghbn2uW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Join Support Server
                </a>
                <a 
                  href="https://discord.com/oauth2/authorize?client_id=1380841482948448357&permissions=8&integration_type=0&scope=bot+applications.commands"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-medium"
                >
                  Invite Zero Bot
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Commands;
