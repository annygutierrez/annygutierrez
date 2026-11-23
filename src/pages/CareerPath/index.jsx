import React  from 'react';
import CertificationsItem from '../../components/CertificationsItem';
import { EducationList } from './educationList';
import './styles.css';

const CareerPath = () => {
    return (
        <div className="TechCertContainer">
          {
              EducationList.map(item => (
                <CertificationsItem
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  type={item.type}
                  image={item.icon}
                  link={item.link}
                  clients={item.clients}
                  tags={item.tags}
                />
              ))
          }
        </div>
    )
}

export default CareerPath;