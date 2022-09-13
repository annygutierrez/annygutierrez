import React  from 'react';
import CertificationsItem from '../../components/CertificationsItem';
import { ExperienceList } from './experienceList';
import './styles.css';

const TechExperience = () => {
    return (
        <div className="TechCertContainer">
          {
              ExperienceList.map(item => (
                <CertificationsItem
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  type={item.type}
                  image={item.icon}
                  link={item.link}
                  clients={item.clients}
                  tools={item.tools}
                  tags={item.tags}
                />
              ))
          }
        </div>
    )
}

export default TechExperience;