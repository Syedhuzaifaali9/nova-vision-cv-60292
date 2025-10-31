import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { Card } from './ui/card';

export const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const certifications = [
    {
      title: 'Ethical Hacker Fundamentals',
      description: 'Comprehensive training in ethical hacking, penetration testing, and security vulnerability assessment',
      color: 'from-primary to-secondary',
    },
    {
      title: 'Amazon FBA Wholesaler',
      description: 'Professional certification in Amazon FBA wholesale business model and e-commerce strategies',
      color: 'from-secondary to-accent',
    },
    {
      title: 'Graphic Designing',
      description: 'Expertise in visual design, digital graphics, and creative communication',
      color: 'from-accent to-primary',
    },
    {
      title: 'Meta Front-End Development',
      description: 'Meta / Coursera certification in modern front-end web development technologies',
      color: 'from-primary to-accent',
    },
  ];

  return (
    <section id="certifications" ref={ref} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 glow-text">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground">
            Professional credentials and specialized training
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-effect p-8 h-full hover:glow-border transition-all group relative overflow-hidden">
                {/* Gradient background effect */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color}`} />
                
                <div className="flex items-start gap-4">
                  <div className="text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                    <Award className="w-10 h-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      {cert.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>Certified</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
