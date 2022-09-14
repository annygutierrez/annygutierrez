import React  from 'react';
import CertificationsItem from '../../components/CertificationsItem';
import { CertificationsList } from './certificationsList';
import './styles.css';

const LanguageCert = () => {
    return (
        <div className="TechCertContainer">
          {
              CertificationsList.map(item => (
                <CertificationsItem
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  type={item.type}
                  image={item.icon}
                  link={item.link}
                />
              ))
          }
        </div>
    )
}

export default LanguageCert;