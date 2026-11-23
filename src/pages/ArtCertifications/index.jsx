import React  from 'react';
import CertificationsItem from '../../components/CertificationsItem';
import { ArtCertificationsList } from './artCertifications';

const ArtCertifications = () => {
    return (
        <div style={{ display: 'flex', paddingTop: '5em', flexDirection: 'column', alignItems: 'center' }}>
          {
              ArtCertificationsList.map(item => (
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

export default ArtCertifications;