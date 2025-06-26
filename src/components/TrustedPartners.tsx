
import { useEffect, useState } from "react";

const TrustedPartners = () => {
  const partners = [
    {
      name: "IND MC",
      logo: "/lovable-uploads/be52cd98-f000-4cff-8a45-e3b8bba511ea.png",
      text: "TRUSTED BY IND MC"
    },
    {
      name: "Free Hub",
      logo: "/lovable-uploads/d30c2cd7-4f76-4708-bede-69955860274c.png", 
      text: "TRUSTED BY FREE HUB"
    },
    {
      name: "Hexa Development",
      logo: "/lovable-uploads/d7430f8f-70b7-487c-a620-9c2a07c4c5af.png",
      text: "TRUSTED BY HEXA DEVELOPMENT"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <section className="py-16 md:py-24 section-bg-secondary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 animate-fade-in-up">
            Trusted by Leading Communities
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-delayed">
            Join thousands who trust Zero Bot for their Discord servers
          </p>
        </div>

        <div className="glass-effect p-8 md:p-16 rounded-3xl backdrop-blur-xl border border-primary/10">
          <div className="h-32 md:h-40 flex items-center justify-center relative">
            <div className="relative w-full max-w-2xl">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 transform ${
                    index === currentIndex 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-95'
                  }`}
                >
                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl animate-pulse-glow"></div>
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="relative h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-2xl shadow-2xl animate-logo-float"
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold gradient-text text-center animate-text-shine">
                      {partner.text}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-3">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-primary to-accent w-12 shadow-lg shadow-primary/50' 
                    : 'bg-primary/20 w-3 hover:bg-primary/40 hover:w-6'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="glass-effect p-6 rounded-2xl hover:bg-card/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-feature-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-4">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-12 w-12 rounded-xl"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{partner.name}</h4>
                  <p className="text-sm text-muted-foreground">Trusted Partner</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
