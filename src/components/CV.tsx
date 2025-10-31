import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Download, Eye, FileText, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

export const CV = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState<'professional' | 'academic'>('professional');

  const experiences = [
    {
      title: 'Sales Executive',
      company: 'Unibis Ltd. UK – Karachi, Pakistan',
      period: 'Dec 2024 - Present',
      description: 'Managed B2B sales and relationships, increasing market reach by 70%. Used CRM tools for tracking and performance optimization.',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      title: 'Sales Executive',
      company: 'Tread Stone Technologies – Karachi, Pakistan',
      period: 'Apr 2024 - Jul 2024',
      description: 'Built strong client relationships and resolved customer issues',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      title: 'Visual & Communication Designer',
      company: 'Advertising Spot – Karachi, Pakistan',
      period: 'Jul 2023 - Nov 2023',
      description: 'Designed impactful digital and social media graphics',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      title: 'Key Punch Operator & Junior Accounts Handler',
      company: 'H.M Distribution – Karachi, Pakistan',
      period: 'Mar 2022 - Mar 2023',
      description: 'Managed reporting, billing, and team coordination',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      title: 'Customer Service Representative',
      company: 'Global Expert Solutions – Karachi, Pakistan',
      period: 'Dec 2021 - Feb 2022',
      description: 'Provided customer support and technical guidance',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      title: 'Key Punch Operator',
      company: 'Eastern Products Pvt. Ltd. – Karachi, Pakistan',
      period: 'Aug 2020 - Dec 2021',
      description: 'Maintained sales records and monitored performance',
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ];

  const education = [
    {
      degree: 'BS in Digital Forensics & Cyber Security',
      institution: 'Hamdard University',
      period: 'Nov 2023 - Present',
      description: 'Comprehensive study of cybersecurity, digital forensics, network security, and ethical hacking',
    },
    {
      degree: 'Intermediate (Pre-Engineering)',
      institution: 'Govt. Degree College Bufferzone',
      period: '2021 - 2023',
      description: 'Foundation in mathematics, physics, and chemistry',
    },
    {
      degree: 'Matriculation (Science)',
      institution: 'The Eeman Academy',
      period: '2020 - 2021',
      description: 'Strong foundation in science subjects',
    },
  ];

  const skills = [
    'Network Fundamentals (CCNA)', 'Ethical Hacking', 'Digital Forensics', 'Cisco Packet Tracer', 
    'Wireshark', 'VirtualBox', 'Penetration Testing', 'Vulnerability Scanning', 'Data Recovery',
    'Incident Response', 'Adobe Illustrator', 'Canva', 'Microsoft Office', 'CRM Systems',
    'Communication', 'Adaptability', 'Time Management', 'Team Collaboration'
  ];

  const handleDownload = () => {
    // In a real implementation, this would download an actual PDF
    console.log('Downloading CV...');
  };

  return (
    <section id="cv" ref={ref} className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 glow-text">Curriculum Vitae</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground">
            Explore my professional journey and qualifications
          </p>
        </motion.div>

        {/* CV Type Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          <Button
            onClick={() => setActiveTab('professional')}
            variant={activeTab === 'professional' ? 'default' : 'outline'}
            className="glow-border"
          >
            <Briefcase className="w-4 h-4 mr-2" />
            Professional CV
          </Button>
          <Button
            onClick={() => setActiveTab('academic')}
            variant={activeTab === 'academic' ? 'default' : 'outline'}
            className="glow-border"
          >
            <GraduationCap className="w-4 h-4 mr-2" />
            Academic CV
          </Button>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button onClick={handleDownload} size="lg" className="glow-border">
            <Download className="w-5 h-5 mr-2" />
            Download CV (PDF)
          </Button>
          <Button variant="outline" size="lg" className="glow-border">
            <Eye className="w-5 h-5 mr-2" />
            View Full CV
          </Button>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Briefcase className="text-primary" />
            Experience
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="glass-effect p-6 hover:glow-border transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1">{exp.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                    <p className="text-primary mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                    <p className="text-foreground/80">{exp.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="text-primary" />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="glass-effect p-6 hover:glow-border transition-all">
                <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                <p className="text-primary mb-2">{edu.institution}</p>
                <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                <p className="text-foreground/80">{edu.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Award className="text-primary" />
            Skills & Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 glass-effect rounded-full text-sm hover:glow-border transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
