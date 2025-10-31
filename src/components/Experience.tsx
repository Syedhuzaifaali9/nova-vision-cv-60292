import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { Card } from './ui/card';

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 glow-text">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground">
            A journey through diverse roles and industries
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-effect p-6 hover:glow-border transition-all group md:ml-20">
                  <div className="flex items-start gap-4">
                    <div className="text-primary mt-1 group-hover:scale-110 transition-transform">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2 text-primary">{exp.position}</h3>
                      <h4 className="text-xl font-medium mb-1">{exp.company}</h4>
                      <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period} • {exp.location}
                      </p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-foreground/80 flex items-start gap-2">
                            <span className="text-primary mt-1">▹</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
