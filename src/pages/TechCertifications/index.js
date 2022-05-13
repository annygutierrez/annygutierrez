import React  from 'react';
import CertificationsItem from '../../components/CertificationsItem';
import { CertificationsList } from './certificationsList';

const TechCertifications = () => {
    return (
        <div style={{ display: 'flex', paddingTop: '5em', flexDirection: 'column', alignItems: 'center' }}>
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

export default TechCertifications;