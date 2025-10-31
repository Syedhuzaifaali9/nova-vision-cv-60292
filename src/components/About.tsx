import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Rocket, Sparkles } from 'lucide-react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Network security, threat analysis, and vulnerability assessment',
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Digital Forensics',
      description: 'Data recovery, incident response, and evidence handling',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Ethical Hacking',
      description: 'Penetration testing and security vulnerability scanning',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Business Acumen',
      description: 'Sales, client relations, and strategic communication',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 glow-text">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-effect rounded-2xl p-8 md:p-12 mb-12"
        >
          <p className="text-lg leading-relaxed text-foreground/90 mb-6">
            I'm a passionate technology learner specializing in digital forensics and cybersecurity. I thrive on solving complex 
            security challenges, strengthening network systems, and creating innovative digital experiences.
          </p>
          <p className="text-lg leading-relaxed text-foreground/90 mb-6">
            Currently pursuing a BS in Digital Forensics & Cyber Security at Hamdard University, I combine academic knowledge 
            with practical experience across various industries. My journey has equipped me with a unique blend of technical 
            expertise and business acumen.
          </p>
          <p className="text-lg leading-relaxed text-foreground/90">
            From network fundamentals to ethical hacking, from digital forensics to creative design, I'm committed to continuous 
            learning and innovation. My goal is to contribute to building a more secure digital future while bridging technology 
            with real-world business solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="glass-effect rounded-xl p-6 hover:glow-border transition-all group"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
