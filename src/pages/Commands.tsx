import { 
  Bot, Settings, Music, Users, Shield, Gamepad2, Crown, Gift, ExternalLink,
  Mic, UserPlus, Zap, MessageSquare, Lock, AlertTriangle, Gavel
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Commands = () => {
  const commandCategories = [
    {
      name: "Voice Commands",
      icon: Mic,
      color: "text-purple-400",
      emoji: "🎤",
      commands: [
        { name: "*voice", description: "Main voice management command" },
        { name: "*voice kick", description: "Kick user from voice channel" },
        { name: "*voice kickall", description: "Kick all users from voice channel" },
        { name: "*voice mute", description: "Mute user in voice channel" },
        { name: "*voice muteall", description: "Mute all users in voice channel" },
        { name: "*voice unmute", description: "Unmute user in voice channel" },
        { name: "*voice unmuteall", description: "Unmute all users in voice channel" },
        { name: "*voice deafen", description: "Deafen user in voice channel" },
        { name: "*voice deafenall", description: "Deafen all users in voice channel" },
        { name: "*voice undeafen", description: "Undeafen user in voice channel" },
        { name: "*voice undeafenall", description: "Undeafen all users in voice channel" },
        { name: "*voice move", description: "Move user to another voice channel" },
        { name: "*voice moveall", description: "Move all users to another voice channel" },
        { name: "*voice pull", description: "Pull user to your voice channel" },
        { name: "*voice pullall", description: "Pull all users to your voice channel" },
        { name: "*voice lock", description: "Lock voice channel" },
        { name: "*voice unlock", description: "Unlock voice channel" },
        { name: "*voice private", description: "Make voice channel private" },
        { name: "*voice unprivate", description: "Make voice channel public" }
      ]
    },
    {
      name: "Games",
      icon: Gamepad2,
      color: "text-green-400",
      emoji: "🎮",
      commands: [
        { name: "*blackjack", description: "Play blackjack card game" },
        { name: "*chess", description: "Play chess game" },
        { name: "*tic-tac-toe", description: "Play tic-tac-toe game" },
        { name: "*country-guesser", description: "Guess the country game" },
        { name: "*rps", description: "Rock paper scissors game" },
        { name: "*lights-out", description: "Lights out puzzle game" },
        { name: "*wordle", description: "Word guessing game" },
        { name: "*2048", description: "Number sliding puzzle game" },
        { name: "*memory-game", description: "Memory matching game" },
        { name: "*number-slider", description: "Number sliding puzzle" },
        { name: "*battleship", description: "Battleship strategy game" },
        { name: "*connect-four", description: "Connect four strategy game" },
        { name: "*slots", description: "Slot machine game" }
      ]
    },
    {
      name: "Music",
      icon: Music,
      color: "text-purple-400",
      emoji: "🎵",
      commands: [
        { name: "*play", description: "Play music" },
        { name: "*search", description: "Search for music" },
        { name: "*loop", description: "Loop current song" },
        { name: "*autoplay", description: "Enable autoplay" },
        { name: "*nowplaying", description: "Show current song" },
        { name: "*shuffle", description: "Shuffle queue" },
        { name: "*stop", description: "Stop music" },
        { name: "*skip", description: "Skip current song" },
        { name: "*seek", description: "Seek to position" },
        { name: "*join", description: "Join voice channel" },
        { name: "*disconnect", description: "Disconnect from voice" },
        { name: "*replay", description: "Replay current song" },
        { name: "*queue", description: "View music queue" },
        { name: "*clearqueue", description: "Clear music queue" },
        { name: "*pause", description: "Pause music" },
        { name: "*resume", description: "Resume music" },
        { name: "*volume", description: "Set volume" },
        { name: "*filter", description: "Music filter" },
        { name: "*filter enable", description: "Enable music filter" },
        { name: "*filter disable", description: "Disable music filter" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-4 bg-primary/20 rounded-2xl mb-6">
              <Bot className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nova Bot <span className="gradient-text">Commands</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Complete command reference for Nova Discord Bot with 15+ powerful features
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Accordion type="multiple" className="w-full space-y-4">
              {commandCategories.map((category, index) => (
                <AccordionItem key={index} value={`category-${index}`} className="border border-border/50 rounded-xl bg-card/30 backdrop-blur-sm overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-card/40 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg bg-primary/20`}>
                        <category.icon className={`h-6 w-6 ${category.color}`} />
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          {category.emoji} {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {category.commands.length} commands available
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.commands.map((command, cmdIndex) => (
                        <div key={cmdIndex} className="bg-secondary/30 rounded-lg p-4 hover:bg-secondary/40 transition-colors">
                          <h4 className="font-mono text-sm font-semibold text-primary mb-2">
                            {command.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {command.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="max-w-4xl mx-auto mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
              <p className="text-muted-foreground mb-6">
                Join our support server for assistance or invite Nova to your Discord server to get started!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://discord.gg/vdHy6VPR8f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Join Support Server
                </a>
                <a 
                  href="https://discord.com/oauth2/authorize?client_id=1295630240852344842&permissions=8&integration_type=0&scope=bot+applications.commands"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-medium"
                >
                  Invite Nova Bot
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