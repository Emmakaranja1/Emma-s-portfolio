import { Github, Linkedin, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FractalTree } from '@/components/FractalTree';
import './HeroSection.css';

export const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="overlay"></div>

      {/* Fractal Tree */}
      <div className="fractal-tree-wrapper">
        <FractalTree />
      </div>

      <div className="hero-content">
        <div className="hero-text-block">
          <h1 className="hero-title">
            Emma Karanja
          </h1>
          <p className="hero-subtitle">
            Junior Software Engineer
          </p>
          <p className="hero-description">
            Experienced in Python with Flask and JavaScript based programming.
            Possess strong skills in team-building and project management that help
            fintech companies drive innovative solutions and positive impact.
          </p>
        </div>

        <div className="hero-buttons">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="btn-linkedin"
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
            className="btn-github"
          >
            <a href="https://github.com/Emmakaranja1" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="btn-blog"
          >
            <a href="https://medium.com/@karanjaemmak" target="_blank" rel="noopener noreferrer">
              <Globe className="mr-2 h-5 w-5" />
              Blog
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="btn-email"
          >
            <a href="mailto:karanjaemmak@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
