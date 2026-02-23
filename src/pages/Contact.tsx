import { useState } from "react";
import { Linkedin, Github, Facebook, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Demo)");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h1 className="font-display text-4xl font-bold text-foreground italic mb-6">Get in Touch</h1>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              I'm open to internship opportunities, collaborations, and project-based work. If you'd like to connect, discuss ideas, or work together, feel free to send me a message. I'd be happy to hear from you.
            </p>

            <div className="flex items-center gap-3 mb-6">
              <Mail size={18} className="text-foreground" />
              <a href="mailto:mathewmvenzon@gmail.com" className="text-sm text-foreground underline">
                mathewmvenzon@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/mathew-venzon-720703327" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
              <a href="https://github.com/Mathew-24" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
              <a href="https://www.facebook.com/share/1DrvJqqydh/" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-foreground mb-1 block">First Name</label>
                <input name="firstName" value={form.firstName} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="text-xs font-medium text-foreground mb-1 block">Last Name</label>
                <input name="lastName" value={form.lastName} onChange={handleChange} className="form-input" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-foreground mb-1 block">Email*</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} className="form-input" required />
            </div>
            <div>
              <label className="text-xs font-medium text-foreground mb-1 block">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={6} className="form-input resize-none" />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="send-btn">Send</button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
