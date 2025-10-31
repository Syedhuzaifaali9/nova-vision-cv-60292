import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/30">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Made with <Heart className="w-4 h-4 text-accent fill-accent animate-glow-pulse" /> using cutting-edge technology
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © {new Date().getFullYear()} Syed Huzaifa Ali. All rights reserved
        </p>
      </div>
    </footer>
  );
};
