import { User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import './AboutSection.css';

export const AboutSection = () => {
  const aboutTechnologies = [
    'Python with Flask',
    'React.js',
    'Javascript',
    'SQL'
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-heading">About Me</h2>
        <div className="about-card-wrapper">
          <Card className="about-card">
            <CardHeader>
              <CardTitle className="about-title">
                <div className="about-icon">
                  <User className="h-5 w-5 text-white" />
                </div>
                Who I Am
              </CardTitle>
            </CardHeader>
            <CardContent className="about-content">
              <p className="about-text">
                I'm a passionate Software Engineer and a current student at Moringa School, where I'm honing my skills in full-stack development and modern web technologies. I enjoy solving real-world problems through code and have hands-on experience building responsive, high-impact applications. I'm eager to contribute to innovative teams, grow continuously, and make a meaningful impact in the tech industry.
              </p>

              <div>
                <h3 className="about-subheading">Technologies I Work With</h3>
                <div className="about-badges">
                  {aboutTechnologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="about-badge"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <p className="about-text">
                Outside of my studies, I'm interested in following the developments of science. I also play a lot of video games and enjoy blogging about web development and technology topics that inspire me.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
