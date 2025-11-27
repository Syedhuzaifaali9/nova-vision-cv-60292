import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card } from './ui/card';

export const Experience = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const experiences = [
    {
      company: 'Unibis Ltd. UK',
      location: 'Karachi, Pakistan',
      position: 'Sales Executive',
      period: 'Dec 2024 – Present',
      responsibilities: [
        'Managed B2B sales and relationships, increasing market reach by 70%',
        'Used CRM tools for tracking and performance optimization',
      ],
      color: 'primary',
    },
    {
      company: 'Tread Stone Technologies',
      location: 'Karachi, Pakistan',
      position: 'Sales Executive',
      period: 'Apr 2024 – Jul 2024',
      responsibilities: [
        'Built strong client relationships and resolved customer issues',
        'Contributed to sales growth through strategic client engagement',
      ],
      color: 'secondary',
    },
    {
      company: 'Advertising Spot',
      location: 'Karachi, Pakistan',
      position: 'Visual & Communication Designer',
      period: 'Jul 2023 – Nov 2023',
      responsibilities: [
        'Designed impactful digital and social media graphics',
        'Created visual content for marketing campaigns',
      ],
      color: 'accent',
    },
    {
      company: 'H.M Distribution',
      location: 'Karachi, Pakistan',
      position: 'Key Punch Operator & Junior Accounts Handler',
      period: 'Mar 2022 – Mar 2023',
      responsibilities: [
        'Managed reporting, billing, and team coordination',
        'Maintained accurate financial records',
      ],
      color: 'primary',
    },
    {
      company: 'Global Expert Solutions',
      location: 'Karachi, Pakistan',
      position: 'Customer Service Representative',
      period: 'Dec 2021 – Feb 2022',
      responsibilities: [
        'Provided customer support and technical guidance',
        'Resolved customer inquiries efficiently',
      ],
      color: 'secondary',
    },
    {
      company: 'Eastern Products Pvt. Ltd.',
      location: 'Karachi, Pakistan',
      position: 'Key Punch Operator',
      period: 'Aug 2020 – Dec 2021',
      responsibilities: [
        'Maintained sales records and monitored performance',
        'Ensured data accuracy and timely reporting',
      ],
      color: 'accent',
    },
  ];

  return (
    <section id="experience" ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
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
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="flex justify-center gap-2 mb-8">
            <div className="h-1 w-16 bg-primary animate-pulse-border" />
            <div className="h-1 w-16 bg-secondary animate-pulse-border" style={{ animationDelay: '0.2s' }} />
            <div className="h-1 w-16 bg-accent animate-pulse-border" style={{ animationDelay: '0.4s' }} />
          </div>
          <p className="text-lg text-muted-foreground font-rajdhani">
            A journey through diverse roles and industries
          </p>
        </motion.div>

        <div className="relative">
          {/* Enhanced timeline line with gradient */}
          <div className="absolute left-8 top-0 bottom-0 w-1 hidden md:block">
            <div className="h-full bg-gradient-to-b from-primary via-secondary to-accent animate-glow-pulse" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div 
                  className={`absolute left-6 top-8 w-5 h-5 rounded-full border-4 border-${exp.color} bg-background hidden md:block z-10`}
                  animate={{
                    boxShadow: [
                      `0 0 0 0 hsl(var(--${exp.color}) / 0.5)`,
                      `0 0 0 10px hsl(var(--${exp.color}) / 0)`,
                      `0 0 0 0 hsl(var(--${exp.color}) / 0)`,
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />

                <div className="md:ml-20">
                  <motion.div 
                    className="group relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Gradient border effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r from-${exp.color} to-${exp.color === 'primary' ? 'secondary' : exp.color === 'secondary' ? 'accent' : 'primary'} rounded-2xl opacity-0 group-hover:opacity-50 blur transition-opacity`} />
                    
                    <Card className="relative glass-effect-strong p-8 border-2 border-primary/20 group-hover:border-primary/50 transition-all scan-lines">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="p-3 rounded-lg bg-primary/10 border border-primary/30"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Briefcase className={`w-6 h-6 text-${exp.color}`} />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h3 className={`text-2xl md:text-3xl font-bold font-orbitron mb-2 text-${exp.color} group-hover:glow-text transition-all`}>
                            {exp.position}
                          </h3>
                          <h4 className="text-xl font-semibold mb-3 text-foreground/90 font-rajdhani">
                            {exp.company}
                          </h4>
                          
                          <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground font-fira">
                            <div className="flex items-center gap-2 glass-effect px-3 py-1 rounded-full">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-2 glass-effect px-3 py-1 rounded-full">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                          
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, idx) => (
                              <motion.li 
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: index * 0.1 + idx * 0.05 }}
                                className="text-foreground/80 flex items-start gap-3 font-rajdhani group/item"
                              >
                                <span className={`text-${exp.color} mt-1 group-hover/item:glow-text transition-all`}>▹</span>
                                <span className="group-hover/item:text-foreground transition-colors">{resp}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Corner accents */}
                      <div className={`absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-${exp.color}/30 group-hover:border-${exp.color} transition-colors`} />
                      <div className={`absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-${exp.color}/30 group-hover:border-${exp.color} transition-colors`} />
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
