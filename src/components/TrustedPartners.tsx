
import { useEffect, useState } from "react";

const TrustedPartners = () => {
  const partners = [
    "TRUSTED BY HEXRA DEVELOPMENT",
    "TRUSTED BY FREE HUB", 
    "TRUSTED BY IND MC"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <section className="py-12 md:py-16 section-bg-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center">
          <div className="glass-effect p-8 md:p-12 rounded-2xl">
            <div className="h-16 md:h-20 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                      index === currentIndex 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <h3 className="text-lg md:text-xl font-bold gradient-text text-center">
                      {partner}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {partners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
