
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, AlertTriangle, UserCheck, Ban } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-4 bg-primary/20 rounded-2xl mb-6">
              <FileText className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully. Last updated: January 2025
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  By inviting Nova Bot to your Discord server or using our services, you agree to these terms. 
                  If you do not agree, please do not use our services.
                </p>
              </div>
            </section>

            <section className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Service Description</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>Nova Bot provides Discord server management and entertainment features including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Moderation tools and automated systems</li>
                  <li>Music and entertainment commands</li>
                  <li>Economy and gaming features</li>
                  <li>Utility and information commands</li>
                </ul>
              </div>
            </section>

            <section className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Ban className="h-6 w-6 text-destructive" />
                <h2 className="text-2xl font-bold">Prohibited Activities</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Attempt to exploit, hack, or abuse the bot's systems</li>
                  <li>Use the bot for illegal activities or harassment</li>
                  <li>Spam commands or attempt to overload the service</li>
                  <li>Reverse engineer or attempt to access unauthorized features</li>
                  <li>Share or distribute harmful content through bot commands</li>
                </ul>
              </div>
            </section>

            <section className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-yellow-500" />
                <h2 className="text-2xl font-bold">Service Availability</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We strive for 99.9% uptime but cannot guarantee uninterrupted service. 
                  We reserve the right to modify or discontinue features with notice.
                </p>
              </div>
            </section>

            <section className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Limitation of Liability</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nova Bot is provided "as is" without warranties. We are not liable for any damages 
                  arising from use of our service, including but not limited to data loss or service interruptions.
                </p>
              </div>
            </section>

            <section className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Enforcement</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Violation of these terms may result in temporary or permanent suspension of service access. 
                  We reserve the right to take appropriate action against misuse.
                </p>
              </div>
            </section>

            <section className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Contact Information</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  For questions about these terms, please contact us through our{" "}
                  <a 
                    href="https://discord.gg/5aMghbn2uW" 
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord Support Server
                  </a>.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
