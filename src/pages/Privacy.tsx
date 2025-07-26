
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Database, Mail } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-4 bg-primary/20 rounded-2xl mb-6">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              Your privacy is important to us. Last updated: January 2025
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nova Bot collects minimal data necessary to provide Discord bot services:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Discord User IDs and usernames for command functionality</li>
                  <li>Server/Guild IDs where the bot is invited</li>
                  <li>Message content only when directly mentioned or using bot commands</li>
                  <li>Basic usage statistics for service improvement</li>
                </ul>
              </div>
            </section>

            <section className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>Your information is used solely for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Providing bot functionality and commands</li>
                  <li>Maintaining user preferences and settings</li>
                  <li>Improving service quality and performance</li>
                  <li>Preventing abuse and ensuring security</li>
                </ul>
              </div>
            </section>

            <section className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Data Protection</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>We implement security measures to protect your data:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encrypted data transmission and storage</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to authorized personnel only</li>
                  <li>No selling or sharing of personal data with third parties</li>
                </ul>
              </div>
            </section>

            <section className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Contact Us</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  For privacy-related questions or data requests, contact us through our{" "}
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

export default Privacy;
