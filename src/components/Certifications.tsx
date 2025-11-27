import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, CheckCircle, Download, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export const Certifications = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const certifications = [
    {
      title: 'Ethical Hacker Fundamentals',
      issuer: 'LearnKartS',
      description: 'Comprehensive training in ethical hacking, penetration testing, and security vulnerability assessment',
      color: 'from-primary via-secondary to-primary',
      icon: '🔐',
    },
    {
      title: 'Foundations of Cybersecurity',
      issuer: 'Google',
      description: 'Core cybersecurity concepts, threats, and best practices from Google\'s professional certificate program',
      color: 'from-secondary via-accent to-secondary',
      icon: '🛡️',
    },
    {
      title: 'Amazon FBA Wholesaler',
      issuer: 'Amazon',
      description: 'Professional certification in Amazon FBA wholesale business model and e-commerce strategies',
      color: 'from-accent via-primary to-accent',
      icon: '📦',
    },
    {
      title: 'Graphic Designing',
      issuer: 'Professional Certification',
      description: 'Expertise in visual design, digital graphics, and creative communication',
      color: 'from-primary via-accent to-primary',
      icon: '🎨',
    },
    {
      title: 'Meta Front-End Development',
      issuer: 'Meta / Coursera',
      description: 'Modern front-end web development technologies and best practices',
      color: 'from-secondary via-primary to-secondary',
      icon: '💻',
    },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-syed-huzaifa-ali.pdf';
    link.download = 'cv-syed-huzaifa-ali.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="certifications" ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-orbitron mb-6 glow-text">
            CERTIFICATIONS
          </h2>
          <div className="flex justify-center gap-2 mb-8">
            <div className="h-1 w-16 bg-primary animate-pulse-border" />
            <div className="h-1 w-16 bg-secondary animate-pulse-border" style={{ animationDelay: '0.2s' }} />
            <div className="h-1 w-16 bg-accent animate-pulse-border" style={{ animationDelay: '0.4s' }} />
          </div>
          <p className="text-lg text-muted-foreground font-rajdhani mb-8">
            Professional credentials and specialized training
          </p>

          {/* Premium Download CV Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="inline-block"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition-opacity animate-glow-pulse" />
              <Button
                onClick={handleDownloadCV}
                size="lg"
                className="relative glass-effect-strong border-2 border-primary/50 hover:border-primary px-8 py-6 text-lg font-orbitron font-bold group-hover:scale-105 transition-all"
              >
                <Download className="mr-3 h-6 w-6 animate-float" />
                DOWNLOAD FULL CV & CERTIFICATES
                <ExternalLink className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
              style={{ perspective: '1000px' }}
            >
              {/* Animated gradient border */}
              <motion.div 
                className={`absolute -inset-1 bg-gradient-to-r ${cert.color} rounded-2xl opacity-0 group-hover:opacity-75 blur transition-opacity`}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: '200% 200%' }}
              />
              
              <Card className="relative glass-effect-strong p-8 h-full border-2 border-primary/30 group-hover:border-primary/60 transition-all scan-lines overflow-hidden">
                {/* Top gradient bar */}
                <motion.div 
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: '200% 200%' }}
                />
                
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="p-4 rounded-xl bg-primary/10 border-2 border-primary/30 text-4xl"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {cert.icon}
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-orbitron mb-2 group-hover:glow-text transition-all">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-primary/80 mb-4 font-rajdhani font-semibold flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      by {cert.issuer}
                    </p>
                    <p className="text-foreground/80 leading-relaxed mb-6 font-rajdhani">
                      {cert.description}
                    </p>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 glass-effect px-3 py-1.5 rounded-full border border-primary/30">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-primary text-sm font-fira font-semibold">VERIFIED</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/20 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-secondary/20 group-hover:border-secondary transition-colors" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
