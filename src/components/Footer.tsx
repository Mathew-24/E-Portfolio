import { Linkedin, Github, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Created By: Venzon, Mathew Jeremy M.</p>
          <p>Web Developer | UI Designer</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://www.linkedin.com/in/mathew-venzon-720703327" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/Mathew-24" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <Github size={18} />
          </a>
          <a href="https://www.facebook.com/share/1DrvJqqydh/" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <Facebook size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
