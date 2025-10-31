import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Network, Search, Code2, Wrench, Users } from 'lucide-react';
import { Card } from './ui/card';

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      category: 'Cybersecurity & Networking',
      icon: <Shield className="w-8 h-8" />,
      skills: [
        'Network Fundamentals (CCNA-level: IP Configuration, Routing, LAN/WAN Setup)',
        'Ethical Hacking Fundamentals (Penetration Testing, Threat Identification)',
        'Vulnerability Scanning & Security Assessment',
      ],
    },
    {
      category: 'Digital Forensics',
      icon: <Search className="w-8 h-8" />,
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
      skills: [
        'Communication & Presentation',
        'Adaptability & Problem Solving',
        'Time Management & Organization',
        'Team Collaboration & Leadership',
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 glow-text">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground">
            Technical proficiency and professional capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-effect p-6 h-full hover:glow-border transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground/80">
                      <span className="text-primary mt-1 flex-shrink-0">▹</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
