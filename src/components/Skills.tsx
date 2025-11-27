import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Network, Search, Code2, Wrench, Users } from 'lucide-react';
import { Card } from './ui/card';

export const Skills = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const skillCategories = [
    {
      category: 'Cybersecurity & Networking',
      icon: <Shield className="w-8 h-8" />,
      gradient: 'from-primary via-secondary to-primary',
      skills: [
        'Network Fundamentals (CCNA-level: IP Configuration, Routing, LAN/WAN Setup)',
        'Ethical Hacking Fundamentals (Penetration Testing, Threat Identification)',
        'Vulnerability Scanning & Security Assessment',
      ],
    },
    {
      category: 'Digital Forensics',
      icon: <Search className="w-8 h-8" />,
      gradient: 'from-secondary via-accent to-secondary',
      skills: [
        'Data Recovery & Analysis',
        'Cyber Incident Response',
        'Evidence Handling & Chain of Custody',
        'Forensic Investigation Techniques',
      ],
    },
    {
      category: 'Software & Tools',
      icon: <Wrench className="w-8 h-8" />,
      gradient: 'from-accent via-primary to-accent',
      skills: [
        'Cisco Packet Tracer',
        'Wireshark',
        'VirtualBox',
        'Adobe Illustrator',
        'Canva',
        'Fourgen',
      ],
    },
    {
      category: 'IT & Productivity',
      icon: <Code2 className="w-8 h-8" />,
      gradient: 'from-primary via-accent to-primary',
      skills: [
        'Microsoft Office Suite (Word, Excel, PowerPoint)',
        'Google Workspace',
        'CRM Systems',
        'Data Entry & Management',
      ],
    },
    {
      category: 'Network Technologies',
      icon: <Network className="w-8 h-8" />,
      gradient: 'from-secondary via-primary to-secondary',
      skills: [
        'TCP/IP Protocol Suite',
        'Network Configuration & Troubleshooting',
        'Router & Switch Configuration',
        'Network Security Best Practices',
      ],
    },
    {
      category: 'Soft Skills',
      icon: <Users className="w-8 h-8" />,
      gradient: 'from-accent via-secondary to-accent',
      skills: [
        'Communication & Presentation',
        'Adaptability & Problem Solving',
        'Time Management & Organization',
        'Team Collaboration & Leadership',
      ],
    },
  ];

  return (
    <section id="skills" ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-border" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-border" />
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
            SKILLS & EXPERTISE
          </h2>
          <div className="flex justify-center gap-2 mb-8">
            <div className="h-1 w-16 bg-primary animate-pulse-border" />
            <div className="h-1 w-16 bg-secondary animate-pulse-border" style={{ animationDelay: '0.2s' }} />
            <div className="h-1 w-16 bg-accent animate-pulse-border" style={{ animationDelay: '0.4s' }} />
          </div>
          <p className="text-lg text-muted-foreground font-rajdhani">
            Technical proficiency and professional capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Animated gradient border */}
              <motion.div 
                className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-50 blur transition-opacity`}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: '200% 200%' }}
              />
              
              <Card className="relative glass-effect-strong p-8 h-full border-2 border-primary/20 group-hover:border-primary/50 transition-all scan-lines">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="p-3 rounded-lg bg-primary/10 border border-primary/30"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-primary">
                      {category.icon}
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold font-orbitron group-hover:glow-text transition-all">
                    {category.category}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="flex items-start gap-3 text-foreground/80 font-rajdhani group/item"
                    >
                      <span className="text-primary mt-1 flex-shrink-0 group-hover/item:glow-text transition-all">▹</span>
                      <span className="group-hover/item:text-foreground transition-colors">{skill}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Corner decorations */}
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary/20 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-secondary/20 group-hover:border-secondary transition-colors" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
