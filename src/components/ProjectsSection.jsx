import { Github, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import './ProjectsSection.css';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Health E Simplified",
      description: "A comprehensive CLI application designed to simplify health management with user-friendly interfaces and data tracking capabilities.",
      github: "https://github.com/Emmakaranja1/Health-Simplified-CLI-Application/pull/2",
      demo: null,
      features: [
        "Implemented user authentication system with secure data handling",
        "Developed intuitive command-line interface for health data management",
        "Created data visualization features for health tracking insights",
        "Integrated error handling and input validation for robust user experience"
      ]
    },
    {
      title: "MovieMix",
      description: "An interactive movie discovery platform that helps users find and explore movies with personalized recommendations.",
      github: "https://github.com/Emmakaranja1/movie-mix-project-/pull/11",
      demo: null,
      features: [
        "Built responsive web interface using JavaScript and modern CSS frameworks",
        "Integrated external movie APIs for real-time data fetching",
        "Implemented search and filtering functionality for enhanced user experience",
        "Created dynamic content rendering with smooth animations and transitions"
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Technical Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <Card key={project.title} className="project-card group">
              <CardHeader>
                <CardTitle className="project-card-title">
                  <div className="project-icon-wrapper">
                    <Smartphone className="project-icon" />
                  </div>
                  {project.title}
                </CardTitle>
                <CardDescription className="project-description">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="project-features">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="project-feature">
                      <div className="feature-dot"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="project-links">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="project-button"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
