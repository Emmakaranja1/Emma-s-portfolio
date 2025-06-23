import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import './ContactSection.css';

export const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Let's Connect</h2>
        <p className="contact-subtitle">
          Ready to collaborate on your next project? Let's build something amazing together.
        </p>

        <div className="contact-buttons">
          <Button
            asChild
            size="lg"
            className="contact-button-primary"
          >
            <a href="mailto:karanjaemmak@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              karanjaemmak@gmail.com
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="contact-button-linkedin"
          >
            <a href="https://www.linkedin.com/in/emma-k-karanja/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="contact-button-github"
          >
            <a href="https://github.com/Emmakaranja1" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

