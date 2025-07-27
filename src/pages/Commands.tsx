import { 
  Bot, Settings, Music, Users, Shield, Gamepad2, Crown, Gift, ExternalLink,
  Mic, UserPlus, Zap, MessageSquare, Lock, AlertTriangle, Gavel, Heart,
  Volume2, LogIn, Activity, Eye, Trash2, FileText, Target, Timer, Headphones
} from "lucide-react";
import { useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Commands = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
    scrollElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const commandCategories = [
    {
      name: "Voice Commands",
      icon: Mic,
      color: "text-cyan-400",
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
      color: "text-purple-400",
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
      name: "Welcomer",
      icon: Heart,
      color: "text-pink-400",
      emoji: "👋",
      commands: [
        { name: "*greet setup", description: "Setup welcome messages" },
        { name: "*greet reset", description: "Reset welcome configuration" },
        { name: "*greet channel", description: "Set welcome channel" },
        { name: "*greet edit", description: "Edit welcome message" },
        { name: "*greet test", description: "Test welcome message" },
        { name: "*greet config", description: "Configure welcome settings" },
        { name: "*greet autodelete", description: "Auto-delete welcome messages" },
        { name: "*greet", description: "Main welcome command" }
      ]
    },
    {
      name: "Autoreact & Autoresponder",
      icon: Zap,
      color: "text-yellow-400",
      emoji: "⚡",
      commands: [
        { name: "*react", description: "Manage auto reactions" },
        { name: "*react add", description: "Add auto reaction" },
        { name: "*react remove", description: "Remove auto reaction" },
        { name: "*react list", description: "List auto reactions" },
        { name: "*react reset", description: "Reset auto reactions" },
        { name: "*autoresponder", description: "Main autoresponder command" },
        { name: "*autoresponder create", description: "Create autoresponder" },
        { name: "*autoresponder delete", description: "Delete autoresponder" },
        { name: "*autoresponder edit", description: "Edit autoresponder" },
        { name: "*autoresponder config", description: "Configure autoresponder" }
      ]
    },
    {
      name: "Autorole & VC Autorole",
      icon: Users,
      color: "text-blue-400",
      emoji: "👥",
      commands: [
        { name: "*autorole bots add", description: "Add bot autorole" },
        { name: "*autorole bots remove", description: "Remove bot autorole" },
        { name: "*autorole bots", description: "Manage bot autoroles" },
        { name: "*autorole config", description: "Configure autoroles" },
        { name: "*autorole humans add", description: "Add human autorole" },
        { name: "*autorole humans remove", description: "Remove human autorole" },
        { name: "*autorole humans", description: "Manage human autoroles" },
        { name: "*autorole reset all", description: "Reset all autoroles" },
        { name: "*autorole reset bots", description: "Reset bot autoroles" },
        { name: "*autorole reset humans", description: "Reset human autoroles" },
        { name: "*autorole", description: "Main autorole command" },
        { name: "*vcrole add", description: "Add voice channel role" },
        { name: "*vcrole remove", description: "Remove voice channel role" },
        { name: "*vcrole config", description: "Configure voice channel roles" }
      ]
    },
    {
      name: "Fun & AI Image Gen",
      icon: Gift,
      color: "text-green-400",
      emoji: "🎨",
      commands: [
        { name: "*/imagine", description: "Generate AI images" },
        { name: "*ship", description: "Ship two users" },
        { name: "*mydog", description: "Random dog image" },
        { name: "*chat", description: "Chat with AI" },
        { name: "*translate", description: "Translate text" },
        { name: "*howgay", description: "Check gay percentage" },
        { name: "*lesbian", description: "Check lesbian percentage" },
        { name: "*cute", description: "Check cute percentage" },
        { name: "*intelligence", description: "Check intelligence" },
        { name: "*chutiya", description: "Fun command" },
        { name: "*horny", description: "Check horny level" },
        { name: "*tharki", description: "Fun command" },
        { name: "*gif", description: "Send random GIF" },
        { name: "*iplookup", description: "Lookup IP address" },
        { name: "*weather", description: "Check weather" },
        { name: "*hug", description: "Hug someone" },
        { name: "*kiss", description: "Kiss someone" },
        { name: "*pat", description: "Pat someone" },
        { name: "*cuddle", description: "Cuddle someone" },
        { name: "*slap", description: "Slap someone" },
        { name: "*tickle", description: "Tickle someone" },
        { name: "*spank", description: "Spank someone" },
        { name: "*8ball", description: "Magic 8-ball" },
        { name: "*truth", description: "Truth or dare truth" },
        { name: "*dare", description: "Truth or dare dare" }
      ]
    },
    {
      name: "Ignore System",
      icon: Eye,
      color: "text-gray-400",
      emoji: "👁️",
      commands: [
        { name: "*ignore", description: "Main ignore command" },
        { name: "*ignore command add", description: "Ignore specific command" },
        { name: "*ignore command remove", description: "Unignore specific command" },
        { name: "*ignore command show", description: "Show ignored commands" },
        { name: "*ignore channel add", description: "Ignore channel" },
        { name: "*ignore channel remove", description: "Unignore channel" },
        { name: "*ignore channel show", description: "Show ignored channels" },
        { name: "*ignore user add", description: "Ignore user" },
        { name: "*ignore user remove", description: "Unignore user" },
        { name: "*ignore user show", description: "Show ignored users" },
        { name: "*ignore bypass add", description: "Add ignore bypass" },
        { name: "*ignore bypass show", description: "Show ignore bypasses" },
        { name: "*ignore bypass remove", description: "Remove ignore bypass" }
      ]
    },
    {
      name: "Advanced Logging",
      icon: FileText,
      color: "text-orange-400",
      emoji: "📝",
      commands: [
        { name: "*loggingsetup", description: "Setup advanced logging" },
        { name: "*removelogs", description: "Remove logging configuration" }
      ]
    },
    {
      name: "Invite Tracker",
      icon: UserPlus,
      color: "text-indigo-400",
      emoji: "📊",
      commands: [
        { name: "*invite enable", description: "Enable invite tracking" },
        { name: "*invite disable", description: "Disable invite tracking" },
        { name: "*invites", description: "Check invite count" },
        { name: "*resetinvites", description: "Reset user invites" },
        { name: "*addinvites", description: "Add invites to user" },
        { name: "*removeinvites", description: "Remove invites from user" },
        { name: "*resetserverinvites", description: "Reset all server invites" }
      ]
    },
    {
      name: "Security - Antinuke",
      icon: Shield,
      color: "text-red-400",
      emoji: "🛡️",
      commands: [
        { name: "*antinuke", description: "Main antinuke command" },
        { name: "*antinuke enable", description: "Enable antinuke protection" },
        { name: "*antinuke disable", description: "Disable antinuke protection" },
        { name: "*whitelist", description: "Manage whitelist" },
        { name: "*whitelist @user", description: "Whitelist user" },
        { name: "*unwhitelist", description: "Remove from whitelist" },
        { name: "*whitelisted", description: "Show whitelisted users" },
        { name: "*whitelist reset", description: "Reset whitelist" },
        { name: "*extraowner", description: "Manage extra owners" },
        { name: "*extraowner set", description: "Set extra owner" },
        { name: "*extraowner view", description: "View extra owners" },
        { name: "*extraowner reset", description: "Reset extra owners" },
        { name: "*nightmode", description: "Manage night mode" },
        { name: "*nightmode enable", description: "Enable night mode" },
        { name: "*nightmode disable", description: "Disable night mode" }
      ]
    },
    {
      name: "Emergency Situation",
      icon: AlertTriangle,
      color: "text-red-500",
      emoji: "🚨",
      commands: [
        { name: "*emergency", description: "Main emergency command" },
        { name: "*emergency enable", description: "Enable emergency mode" },
        { name: "*emergency disable", description: "Disable emergency mode" },
        { name: "*emergency role", description: "Manage emergency roles" },
        { name: "*emergency role add", description: "Add emergency role" },
        { name: "*emergency role remove", description: "Remove emergency role" },
        { name: "*emergency role list", description: "List emergency roles" },
        { name: "*emergency authorise", description: "Manage emergency auth" },
        { name: "*emergency authorise add", description: "Add emergency auth" },
        { name: "*emergency authorise remove", description: "Remove emergency auth" },
        { name: "*emergency authorise list", description: "List emergency auth" },
        { name: "*emergency-situation", description: "Trigger emergency situation" },
        { name: "*emgs", description: "Emergency shortcut" }
      ]
    },
    {
      name: "Automoderation",
      icon: Settings,
      color: "text-teal-400",
      emoji: "⚙️",
      commands: [
        { name: "*automod", description: "Main automod command" },
        { name: "*automod enable", description: "Enable automoderation" },
        { name: "*automod disable", description: "Disable automoderation" },
        { name: "*automod punishment", description: "Set automod punishment" },
        { name: "*automod config", description: "Configure automoderation" },
        { name: "*automod logging", description: "Set automod logging" },
        { name: "*automod ignore", description: "Manage automod ignores" },
        { name: "*automod ignore channel", description: "Ignore channel from automod" },
        { name: "*automod ignore role", description: "Ignore role from automod" },
        { name: "*automod ignore show", description: "Show automod ignores" },
        { name: "*automod ignore reset", description: "Reset automod ignores" },
        { name: "*automod unignore", description: "Remove automod ignore" },
        { name: "*automod unignore channel", description: "Unignore channel" },
        { name: "*automod unignore role", description: "Unignore role" }
      ]
    },
    {
      name: "Blacklistword",
      icon: Lock,
      color: "text-red-400",
      emoji: "🚫",
      commands: [
        { name: "*blacklistword", description: "Main blacklist command" },
        { name: "*blacklistword add <word>", description: "Add word to blacklist" },
        { name: "*blacklistword remove <word>", description: "Remove word from blacklist" },
        { name: "*blacklistword reset", description: "Reset blacklist" },
        { name: "*blacklistword config", description: "Configure blacklist" },
        { name: "*blacklistword bypass add <user/role>", description: "Add blacklist bypass" },
        { name: "*blacklistword bypass remove <user/role>", description: "Remove blacklist bypass" },
        { name: "*blacklistword bypass show", description: "Show blacklist bypasses" }
      ]
    },
    {
      name: "Moderation",
      icon: Gavel,
      color: "text-amber-400",
      emoji: "🔨",
      commands: [
        { name: "*audit", description: "View audit logs" },
        { name: "*warn", description: "Warn a user" },
        { name: "*clearwarns", description: "Clear user warnings" },
        { name: "*ban", description: "Ban a user" },
        { name: "*clone", description: "Clone channel" },
        { name: "*snipe", description: "Show deleted messages" },
        { name: "*hide", description: "Hide channel" },
        { name: "*hideall", description: "Hide all channels" },
        { name: "*kick", description: "Kick a user" },
        { name: "*lock", description: "Lock channel" },
        { name: "*mute", description: "Mute a user" },
        { name: "*nick", description: "Change nickname" },
        { name: "*nuke", description: "Nuke channel" },
        { name: "*role", description: "Manage roles" },
        { name: "*roleicon", description: "Set role icon" },
        { name: "*role all", description: "Give role to all" },
        { name: "*role bots", description: "Give role to bots" },
        { name: "*role create", description: "Create role" },
        { name: "*role delete", description: "Delete role" },
        { name: "*role humans", description: "Give role to humans" },
        { name: "*role rename", description: "Rename role" },
        { name: "*role temp", description: "Temporary role" },
        { name: "*role unverified", description: "Role for unverified" },
        { name: "*slowmode", description: "Set slowmode" },
        { name: "*lockall", description: "Lock all channels" },
        { name: "*unlockall", description: "Unlock all channels" },
        { name: "*steal", description: "Steal emoji/sticker" },
        { name: "*unban", description: "Unban user" },
        { name: "*unhide", description: "Unhide channel" },
        { name: "*unhideall", description: "Unhide all channels" },
        { name: "*unlock", description: "Unlock channel" },
        { name: "*unslowmode", description: "Remove slowmode" },
        { name: "*removerole all", description: "Remove role from all" },
        { name: "*removerole bots", description: "Remove role from bots" },
        { name: "*removerole humans", description: "Remove role from humans" },
        { name: "*removerole unverified", description: "Remove role from unverified" },
        { name: "*clear", description: "Clear messages" },
        { name: "*clear all", description: "Clear all messages" },
        { name: "*clear bots", description: "Clear bot messages" },
        { name: "*clear contains", description: "Clear messages containing text" },
        { name: "*clear embeds", description: "Clear embed messages" },
        { name: "*clear files", description: "Clear file messages" },
        { name: "*clear images", description: "Clear image messages" },
        { name: "*clear mentions", description: "Clear mention messages" },
        { name: "*clear reactions", description: "Clear reactions" },
        { name: "*clear user", description: "Clear user messages" },
        { name: "*deleteemoji", description: "Delete emoji" },
        { name: "*deletesticker", description: "Delete sticker" },
        { name: "*enlarge", description: "Enlarge emoji" },
        { name: "*topcheck", description: "Top check feature" },
        { name: "*topcheck enable", description: "Enable top check" },
        { name: "*topcheck disable", description: "Disable top check" }
      ]
    },
    {
      name: "Utility",
      icon: Activity,
      color: "text-blue-400",
      emoji: "🔧",
      commands: [
        { name: "*botinfo", description: "Bot information" },
        { name: "*stats", description: "Bot statistics" },
        { name: "*invite", description: "Bot invite link" },
        { name: "*serverinfo", description: "Server information" },
        { name: "*userinfo", description: "User information" },
        { name: "*roleinfo", description: "Role information" },
        { name: "*boostcount", description: "Server boost count" },
        { name: "*unbanall", description: "Unban all users" },
        { name: "*joined-at", description: "Check join date" },
        { name: "*ping", description: "Bot latency" },
        { name: "*github", description: "GitHub information" },
        { name: "*vcinfo", description: "Voice channel info" },
        { name: "*channelinfo", description: "Channel information" },
        { name: "*badges", description: "User badges" },
        { name: "*banner user", description: "User banner" },
        { name: "*banner server", description: "Server banner" },
        { name: "*reminder start", description: "Start reminder" },
        { name: "*reminder clear", description: "Clear reminders" },
        { name: "*permissions", description: "Check permissions" },
        { name: "*timer", description: "Set timer" }
      ]
    },
    {
      name: "Music",
      icon: Headphones,
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
    },
    {
      name: "Customrole / Setup",
      icon: Crown,
      color: "text-yellow-400",
      emoji: "👑",
      commands: [
        { name: "*setup", description: "Main setup command" },
        { name: "*setup create <name>", description: "Create custom setup" },
        { name: "*setup delete <name>", description: "Delete custom setup" },
        { name: "*setup list", description: "List all setups" },
        { name: "*setup staff", description: "Staff setup" },
        { name: "*setup girl", description: "Girl setup" },
        { name: "*setup friend", description: "Friend setup" },
        { name: "*setup vip", description: "VIP setup" },
        { name: "*setup guest", description: "Guest setup" },
        { name: "*setup config", description: "Configure setup" },
        { name: "*setup reset", description: "Reset setup" },
        { name: "*staff", description: "Staff role command" },
        { name: "*girl", description: "Girl role command" },
        { name: "*friend", description: "Friend role command" },
        { name: "*vip", description: "VIP role command" },
        { name: "*guest", description: "Guest role command" }
      ]
    },
    {
      name: "Giveaway",
      icon: Gift,
      color: "text-green-400",
      emoji: "🎁",
      commands: [
        { name: "*gstart", description: "Start giveaway" },
        { name: "*gend", description: "End giveaway" },
        { name: "*greroll", description: "Reroll giveaway" },
        { name: "*glist", description: "List giveaways" }
      ]
    },
    {
      name: "Ticket",
      icon: MessageSquare,
      color: "text-blue-400",
      emoji: "🎫",
      commands: [
        { name: "*/ticket-panel", description: "Create ticket panel" }
      ]
    },
    {
      name: "Vanityroles",
      icon: Crown,
      color: "text-pink-400",
      emoji: "✨",
      commands: [
        { name: "*vanityroles setup", description: "Setup vanity roles" },
        { name: "*vanityroles reset", description: "Reset vanity roles" },
        { name: "*vanityroles show", description: "Show vanity roles" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background discord-grid relative overflow-hidden">
      {/* Discord background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse" />
      
      <Header />
      
      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <div className="inline-flex items-center justify-center p-4 bg-primary/20 rounded-2xl mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl animate-pulse" />
              <Bot className="h-12 w-12 text-primary relative z-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nova Bot <span className="gradient-text">Commands</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Complete command reference for Nova Discord Bot with 300+ powerful features across 20+ categories
            </p>
          </div>

          <div className="max-w-6xl mx-auto scroll-reveal">
            <Accordion type="multiple" className="w-full space-y-4">
              {commandCategories.map((category, index) => (
                <AccordionItem 
                  key={index} 
                  value={`category-${index}`} 
                  className={`border border-border/50 rounded-xl bg-card/30 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-300 scroll-reveal ${index % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-card/40 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/20 relative overflow-hidden group-hover:bg-primary/30 transition-colors">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <category.icon className={`h-6 w-6 ${category.color} relative z-10`} />
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
                        <div 
                          key={cmdIndex} 
                          className="bg-secondary/30 rounded-lg p-4 hover:bg-secondary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 border border-transparent hover:border-primary/20 group"
                        >
                          <h4 className="font-mono text-sm font-semibold text-primary mb-2 group-hover:text-discord-primary transition-colors">
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

          <div className="max-w-4xl mx-auto mt-16 text-center scroll-reveal">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-8 relative overflow-hidden border border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
                <p className="text-muted-foreground mb-6">
                  Join our support server for assistance or invite Nova to your Discord server to get started!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://discord.gg/vdHy6VPR8f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                  >
                    Join Support Server
                  </a>
                  <a 
                    href="https://discord.com/oauth2/authorize?client_id=1295630240852344842&permissions=8&integration_type=0&scope=bot+applications.commands"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg hover:shadow-secondary/20"
                  >
                    Invite Nova Bot
                  </a>
                </div>
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