import { Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import './ExperienceSection.css';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>
        <Card className="experience-card">
          <CardHeader>
            <CardTitle className="experience-card-title">
              <div className="icon-box">
                <Code className="icon" />
              </div>
              IT Specialist @ Jumbo Star Solutions
            </CardTitle>
            <CardDescription className="experience-date">
              11th May – 11th August 2023
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="experience-list">
              <li className="experience-item">
                <div className="bullet"></div>
                Completed a 3-month attachment at Jumbo Star Solutions Limited in Nakuru, Kenya,
                supporting development and maintenance of financial and web-based applications.
              </li>
              <li className="experience-item">
                <div className="bullet"></div>
                Assisted in improving and testing features in the company's Core-Banking System tailored for Saccos and Microfinance Institutions (MFIs).
              </li>
              <li className="experience-item">
                <div className="bullet"></div>
                Worked with the team on web development projects and integrated solutions like Agency Banking and ATM Bridging.
              </li>
              <li className="experience-item">
                <div className="bullet"></div>
                Contributed to the setup and deployment of Bulk SMS Notification services used for real-time customer communication.
              </li>
              <li className="experience-item">
                <div className="bullet"></div>
                Gained hands-on experience collaborating in a fast-paced fintech environment with real clients and mission-critical systems.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
