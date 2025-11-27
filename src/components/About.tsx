import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Rocket, Sparkles } from 'lucide-react';

export const About = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Network security, threat analysis, and vulnerability assessment',
      gradient: 'from-primary to-secondary',
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Digital Forensics',
      description: 'Data recovery, incident response, and evidence handling',
      gradient: 'from-secondary to-accent',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Ethical Hacking',
      description: 'Penetration testing and security vulnerability scanning',
      gradient: 'from-accent to-primary',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Business Acumen',
      description: 'Sales, client relations, and strategic communication',
      gradient: 'from-primary to-accent',
    },
  ];

  return (
    <section id="about" ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      {/* Parallax floating elements */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{
              textShadow: [
                '0 0 10px hsl(var(--cyber-glow))',
                '0 0 30px hsl(var(--cyber-glow))',
                '0 0 10px hsl(var(--cyber-glow))',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <h2 className="text-5xl md:text-7xl font-bold font-orbitron mb-6 glow-text">
              ABOUT ME
            </h2>
          </motion.div>
          <div className="flex justify-center gap-2 mb-8">
            <div className="h-1 w-16 bg-primary animate-pulse-border" />
            <div className="h-1 w-16 bg-secondary animate-pulse-border" style={{ animationDelay: '0.2s' }} />
            <div className="h-1 w-16 bg-accent animate-pulse-border" style={{ animationDelay: '0.4s' }} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group mb-16"
        >
          {/* Neon border effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-30 group-hover:opacity-50 blur transition-opacity" />
          
          <div className="relative glass-effect-strong rounded-3xl p-8 md:p-12 scan-lines">
            <div className="space-y-6 font-rajdhani text-lg leading-relaxed">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-foreground/90"
              >
                <span className="text-primary font-bold terminal-text">&gt;_</span> I'm a passionate technology learner specializing in 
                <span className="text-primary font-semibold"> digital forensics</span> and 
                <span className="text-secondary font-semibold"> cybersecurity</span>. I thrive on solving complex 
                security challenges, strengthening network systems, and creating innovative digital experiences.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-foreground/90"
              >
                Currently pursuing a <span className="text-accent font-semibold">BS in Digital Forensics & Cyber Security</span> at 
                Hamdard University, I combine academic knowledge with practical experience across various industries. My journey has equipped 
                me with a unique blend of technical expertise and business acumen.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-foreground/90"
              >
                From network fundamentals to ethical hacking, from digital forensics to creative design, I'm committed to 
                <span className="text-primary font-semibold"> continuous learning</span> and 
                <span className="text-secondary font-semibold"> innovation</span>. My goal is to contribute to building a more secure 
                digital future while bridging technology with real-world business solutions.
              </motion.p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="group relative"
            >
              {/* Gradient border */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-xl opacity-0 group-hover:opacity-75 blur transition-opacity`} />
              
              <div className="relative glass-effect-strong rounded-xl p-6 h-full border border-primary/20 hover:border-primary/50 transition-all">
                <motion.div 
                  className="text-primary mb-4"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold font-orbitron mb-2 group-hover:glow-text transition-all">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-rajdhani">{feature.description}</p>
                
                {/* Corner accents */}
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-secondary/30 group-hover:border-secondary transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
