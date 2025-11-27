import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X } from 'lucide-react';

interface TerminalProps {
  onClose: () => void;
}

export const Terminal = ({ onClose }: TerminalProps) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([
    { command: 'system', output: 'Cyber Security Portfolio Terminal v1.0.0\nType "help" for available commands.' }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  const commands: Record<string, string> = {
    help: `Available commands:
- about: Display information about me
- skills: Show my technical skills
- experience: View work experience
- education: Display education background
- contact: Get contact information
- certifications: List certifications
- clear: Clear terminal
- exit: Close terminal`,
    
    about: `Name: Syed Huzaifa Ali
Role: Digital Forensics & Cyber Security Enthusiast
Focus: Building secure, intelligent, and future-ready digital systems
Mission: Protecting digital infrastructure and investigating cyber threats`,

    skills: `Technical Skills:
• Digital Forensics & Incident Response
• Network Security & Penetration Testing
• Malware Analysis & Reverse Engineering
• Threat Intelligence & Analysis
• Security Operations Center (SOC)
• Programming: Python, JavaScript, SQL
• Tools: Wireshark, Metasploit, Burp Suite, Splunk`,

    experience: `Professional Experience:
[View the Experience section for detailed information]
Multiple roles in cybersecurity, digital forensics, and threat analysis.`,

    education: `Education Background:
[View the Education section for detailed information]
Specialized in Cybersecurity and Digital Forensics.`,

    contact: `Contact Information:
• LinkedIn: [Available in Contact section]
• Email: [Available in Contact section]
• WhatsApp: [Available in Contact section]
Use the contact form on the website for direct messages.`,

    certifications: `Professional Certifications:
[View the Certifications section for the complete list]
Multiple industry-recognized security certifications.`,

    clear: 'CLEAR_TERMINAL',
    exit: 'EXIT_TERMINAL',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const cmd = input.toLowerCase().trim();
    
    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (cmd === 'exit') {
      onClose();
      return;
    }

    const output = commands[cmd] || `Command not found: ${cmd}\nType "help" for available commands.`;
    
    setHistory([...history, { command: input, output }]);
    setInput('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-4 md:inset-auto md:bottom-4 md:right-4 md:w-[600px] md:h-[500px] z-50"
    >
      <div className="glass-effect-strong rounded-lg h-full flex flex-col overflow-hidden border-2 border-primary/50 shadow-cyber-strong">
        {/* Terminal Header */}
        <div className="flex items-center justify-between p-3 border-b border-primary/30 bg-muted/30">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-5 h-5 text-primary" />
            <span className="font-fira text-sm text-primary">cyber-terminal</span>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Terminal Content */}
        <div
          ref={historyRef}
          className="flex-1 p-4 overflow-y-auto font-fira text-sm space-y-3 scan-lines"
        >
          <AnimatePresence>
            {history.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="text-primary">$</span>
                  <span className="text-foreground">{entry.command}</span>
                </div>
                <pre className="text-muted-foreground whitespace-pre-wrap pl-4">
                  {entry.output}
                </pre>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Terminal Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-primary/30 bg-muted/30">
          <div className="flex items-center gap-2 font-fira text-sm">
            <span className="text-primary">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-foreground"
              placeholder="Type a command..."
              autoFocus
            />
          </div>
        </form>
      </div>
    </motion.div>
  );
};
