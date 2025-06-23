import { Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import './SkillsSection.css';

export const SkillsSection = () => {
  const skills = [
    'Python', 'Flask', 'JavaScript', 'React', 'SQL', 'HTML/CSS', 'REST APIs'
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill} className="group">
              <Card className="skill-card">
                <CardContent className="skill-card-content">
                  <div className="skill-icon-wrapper">
                    <Code className="skill-icon" />
                  </div>
                  <h3 className="skill-text">{skill}</h3>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
