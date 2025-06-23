
import { Code, Database } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import './EducationSection.css';

export const EducationSection = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        <div className="education-list">
          <Card className="education-card">
            <CardHeader>
              <CardTitle className="education-title-entry">
                <div className="education-icon-box green-blue">
                  <Code className="education-icon" />
                </div>
                Moringa School - Nairobi, Ngong LN
              </CardTitle>
              <CardDescription className="education-description">
                Full Stack Web Development, Python with Flask and JavaScript program
              </CardDescription>
              <Badge variant="secondary" className="education-badge green">
                FEB 2024 - JULY 2024
              </Badge>
            </CardHeader>
          </Card>

          <Card className="education-card">
            <CardHeader>
              <CardTitle className="education-title-entry">
                <div className="education-icon-box purple-pink">
                  <Database className="education-icon" />
                </div>
                KCA University - Nairobi, Ruaraka
              </CardTitle>
              <CardDescription className="education-description">
                Diploma in IT
              </CardDescription>
              <Badge variant="secondary" className="education-badge purple">
                SEP 2021 - JULY 2024
              </Badge>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};
