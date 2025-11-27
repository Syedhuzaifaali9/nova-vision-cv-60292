import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero3D } from '@/components/Hero3D';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Skills } from '@/components/Skills';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload fonts
    document.fonts.ready.then(() => {
      console.log('Fonts loaded');
    });
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden" id="home">
      <Navigation />
      <Hero3D />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
