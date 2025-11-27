import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING');

  useEffect(() => {
    const texts = ['INITIALIZING', 'LOADING SYSTEMS', 'ESTABLISHING CONNECTION', 'READY'];
    let textIndex = 0;
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % texts.length;
      setLoadingText(texts[textIndex]);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      >
        {/* Grid background */}
        <div className="absolute inset-0 cyber-grid opacity-30" />
        
        {/* Scanning line */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent"
          animate={{
            y: ['-100%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center space-y-8 px-6">
          {/* Logo/Title */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold font-orbitron glow-text mb-4">
              SHA
            </h1>
            <p className="text-xl md:text-2xl text-primary terminal-text">
              CYBER SECURITY PORTFOLIO
            </p>
          </motion.div>

          {/* Loading bar */}
          <div className="w-full max-w-md mx-auto space-y-4">
            <div className="relative h-2 bg-muted rounded-full overflow-hidden glow-border">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-secondary to-accent"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span className="terminal-text font-fira">{loadingText}...</span>
              <span className="text-primary font-fira">{progress}%</span>
            </div>
          </div>

          {/* Glitch effect text */}
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-muted-foreground text-sm font-fira"
          >
            &gt; ESTABLISHING SECURE CONNECTION_
          </motion.div>

          {/* Animated dots */}
          <div className="flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary/50" />
        <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-secondary/50" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-accent/50" />
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary/50" />
      </motion.div>
    </AnimatePresence>
  );
};
