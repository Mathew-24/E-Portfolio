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
          <a href="#" className="social-icon" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="#" className="social-icon" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="#" className="social-icon" aria-label="Facebook">
            <Facebook size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
