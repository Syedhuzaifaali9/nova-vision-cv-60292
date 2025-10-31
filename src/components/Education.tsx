import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { Card } from './ui/card';

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const education = [
    {
      degree: 'BS in Digital Forensics & Cyber Security',
      institution: 'Hamdard University',
      period: 'Nov 2023 – Present',
      description: 'Comprehensive study of cybersecurity, digital forensics, network security, and ethical hacking',
    },
    {
      degree: 'Intermediate (Pre-Engineering)',
      institution: 'Govt. Degree College Bufferzone',
      period: '2021 – 2023',
      description: 'Foundation in mathematics, physics, and chemistry with focus on analytical thinking',
    },
    {
      degree: 'Matriculation (Science)',
      institution: 'The Eeman Academy',
      period: '2020 – 2021',
      description: 'Strong foundation in science subjects and academic excellence',
    },
  ];

  return (
    <section id="education" ref={ref} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 glow-text">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground">
            Academic foundation and continuous learning
          </p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-effect p-8 hover:glow-border transition-all group">
                <div className="flex items-start gap-6">
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-10 h-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-primary">{edu.degree}</h3>
                    <h4 className="text-xl font-medium mb-3">{edu.institution}</h4>
                    <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </p>
                    <p className="text-foreground/80 leading-relaxed">{edu.description}</p>
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
