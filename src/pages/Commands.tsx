
import { Bot, Hash, Slash, Info, Users, DollarSign, Music, Hammer, Sparkles, Shield, Crown, Bell, Gift, Heart, BarChart3, MessageSquare, Ticket, UserPlus, Search, Image } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Commands = () => {
  const commandCategories = [
    {
      name: "Moderation",
      icon: Hammer,
      color: "text-red-400",
      emoji: "🔨",
      commands: [
        { name: "*ban", description: "Bans the specified member" },
        { name: "*kick", description: "Kicks the specified member" },
        { name: "*deafen", description: "Deafen member in VC" },
        { name: "*undeafen", description: "Undeafen member in VC" },
        { name: "*disconnect", description: "Disconnect member from VC" },
        { name: "*move", description: "Move member to another VC" },
        { name: "*vmute", description: "Mute member's voice" },
        { name: "*vunmute", description: "Unmute member's voice" },
        { name: "*nick", description: "Nickname commands" },
        { name: "*purge", description: "Delete messages" },
        { name: "*purgeattach", description: "Delete messages with attachments" },
        { name: "*purgebots", description: "Delete bot messages" },
        { name: "*purgelinks", description: "Delete messages with links" },
        { name: "*purgetoken", description: "Delete messages with token" },
        { name: "*purgeuser", description: "Delete messages from a user" },
        { name: "*maxwarn", description: "Set max warnings" },
        { name: "*modlog", description: "Enable/disable mod logs" }
      ]
    },
    {
      name: "AutoMod",
      icon: Shield,
      color: "text-orange-400",
      emoji: "🔨",
      commands: [
        { name: "*anti", description: "Manage automod settings" },
        { name: "*automod", description: "Configure automod" },
        { name: "*autodelete", description: "Manage autodelete settings" }
      ]
    },
    {
      name: "Admin",
      icon: Crown,
      color: "text-yellow-400",
      emoji: "⚡",
      commands: [
        { name: "*autorole", description: "Set autorole on join" },
        { name: "*counter", description: "Setup counter channel" },
        { name: "*farewell", description: "Farewell message setup" },
        { name: "*welcome", description: "Welcome message setup" },
        { name: "*setprefix", description: "Change server prefix" },
        { name: "*flagtranslation", description: "Flag reaction translation" },
        { name: "*addrr", description: "Add reaction role" },
        { name: "*removerr", description: "Remove reaction role" },
        { name: "*leaveserver", description: "Bot leaves a server" },
        { name: "*listservers", description: "List servers bot is in" },
        { name: "*eval", description: "Evaluate code" }
      ]
    },
    {
      name: "Giveaway",
      icon: Gift,
      color: "text-pink-400",
      emoji: "🔔",
      commands: [
        { name: "*giveaway", description: "Manage giveaways" }
      ]
    },
    {
      name: "Economy",
      icon: DollarSign,
      color: "text-green-400",
      emoji: "💰",
      commands: [
        { name: "*bank", description: "Bank operations" },
        { name: "*beg", description: "Beg for money" },
        { name: "*daily", description: "Daily bonus" },
        { name: "*gamble", description: "Gamble" }
      ]
    },
    {
      name: "Anime",
      icon: Heart,
      color: "text-purple-400",
      emoji: "👥",
      commands: [
        { name: "*react", description: "Anime reaction commands" }
      ]
    },
    {
      name: "Fun",
      icon: Sparkles,
      color: "text-yellow-400",
      emoji: "🎉",
      commands: [
        { name: "*animal", description: "Random animal image" },
        { name: "*facts", description: "Animal facts" },
        { name: "*flip", description: "Flip coin/text" },
        { name: "*meme", description: "Random meme" },
        { name: "*snake", description: "Play snake game" },
        { name: "*together", description: "Discord together" }
      ]
    },
    {
      name: "Statistics",
      icon: BarChart3,
      color: "text-blue-400",
      emoji: "📊",
      commands: [
        { name: "*leaderboard", description: "XP/invite/rep leaderboard" },
        { name: "*rank", description: "Show rank" },
        { name: "*stats", description: "Member stats" },
        { name: "*statstracking", description: "Toggle stat tracking" },
        { name: "*levelup", description: "Level config" }
      ]
    },
    {
      name: "Suggestions",
      icon: MessageSquare,
      color: "text-indigo-400",
      emoji: "💡",
      commands: [
        { name: "*suggest", description: "Submit suggestion" },
        { name: "*suggestion", description: "Suggestion system config" }
      ]
    },
    {
      name: "Ticket",
      icon: Ticket,
      color: "text-cyan-400",
      emoji: "🎫",
      commands: [
        { name: "*ticket", description: "Ticket commands" },
        { name: "*ticketcat", description: "Ticket category management" }
      ]
    },
    {
      name: "Invite",
      icon: UserPlus,
      color: "text-emerald-400",
      emoji: "🔗",
      commands: [
        { name: "*addinvites", description: "Add invites to member" },
        { name: "*invitecodes", description: "List invite codes" },
        { name: "*inviter", description: "Show inviter info" },
        { name: "*inviterank", description: "Configure invite ranks" },
        { name: "*inviteranks", description: "List invite ranks" },
        { name: "*invites", description: "Member's invite count" },
        { name: "*invitesimport", description: "Import existing invites" },
        { name: "*invitetracker", description: "Enable invite tracking" },
        { name: "*resetinvites", description: "Clear user's invites" }
      ]
    },
    {
      name: "Music",
      icon: Music,
      color: "text-purple-400",
      emoji: "🎵",
      commands: [
        { name: "*play", description: "Play YouTube song" },
        { name: "*pause", description: "Pause player" },
        { name: "*resume", description: "Resume player" },
        { name: "*stop", description: "Stop player" },
        { name: "*skip", description: "Skip song" },
        { name: "*np", description: "Now playing" },
        { name: "*queue", description: "Show queue" },
        { name: "*shuffle", description: "Shuffle songs" },
        { name: "*loop", description: "Loop song/queue" },
        { name: "*volume", description: "Set volume" },
        { name: "*bassboost", description: "Set bass level" },
        { name: "*seek", description: "Seek position in song" },
        { name: "*search", description: "Search for song" },
        { name: "*lyric", description: "Get lyrics" }
      ]
    },
    {
      name: "Utility",
      icon: Search,
      color: "text-slate-400",
      emoji: "🔍",
      commands: [
        { name: "*embed", description: "Send embed message" },
        { name: "*avatar", description: "User avatar" },
        { name: "*userinfo", description: "User info" },
        { name: "*channelinfo", description: "Channel info" },
        { name: "*emojiinfo", description: "Emoji info" },
        { name: "*guildinfo", description: "Server info" },
        { name: "*botstats", description: "Bot stats" },
        { name: "*botinvite", description: "Bot invite" },
        { name: "*uptime", description: "Bot uptime" },
        { name: "*ping", description: "Bot ping" },
        { name: "*translate", description: "Translate text" },
        { name: "*paste", description: "Pastebin tool" },
        { name: "*urban", description: "Urban Dictionary" },
        { name: "*covid", description: "COVID stats" },
        { name: "*pokedex", description: "Pokémon info" },
        { name: "*github", description: "GitHub user info" },
        { name: "*weather", description: "Get weather" }
      ]
    },
    {
      name: "Image Effects",
      icon: Image,
      color: "text-rose-400",
      emoji: "🤖",
      commands: [
        { name: "Usage Formats:", description: "*cmd – uses your avatar | *cmd <@mention> – uses mentioned avatar | *cmd <url> – from image URL | *cmd [attachment] – from uploaded image" },
        { name: "Basic Effects:", description: "blur, brighten, burn, darken, distort, greyscale, invert, pixelate, sepia, sharpen, threshold" },
        { name: "Meme Effects:", description: "ad, affect, beautiful, bobross, challenger, confusedstonk, delete, dexter, facepalm, hitler, jail, jokeoverhead, karaba, kyon-gun, mms, notstonk, poutine, rip, shit, stonk, tattoo, thomas, trash, wanted, worthless" },
        { name: "Overlay Effects:", description: "approved, brazzers, gay, halloween, rejected, thuglife, to-be-continued, wasted" }
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
              Complete command reference for Zero Discord Bot with 15+ powerful features
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

          {/* Command Categories with Accordion */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
            <Accordion type="single" collapsible className="w-full">
              {commandCategories.map((category, index) => (
                <AccordionItem key={category.name} value={`item-${index}`}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-secondary/50 rounded-lg">
                        <category.icon className={`h-6 w-6 ${category.color}`} />
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">{category.emoji}</span>
                        <h3 className="text-xl font-semibold">{category.name}</h3>
                        <span className="text-sm text-muted-foreground">({category.commands.length} commands)</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-4">
                      {category.commands.map((command, cmdIndex) => (
                        <div key={cmdIndex} className="bg-secondary/30 rounded-lg p-4">
                          <code className="text-primary font-mono text-sm font-semibold">{command.name}</code>
                          <p className="text-muted-foreground text-sm mt-1">{command.description}</p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
