import React from 'react';
import CertDescription from './CertDescription';
import ItemIcon from './ItemIcon';

const CertificationsItem = ({ title, subtitle, description, type, image, link }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', width: '900px', padding: '2em 0' }}>
           <ItemIcon image={image} alt={title}/>
           <CertDescription
             title={title}
             certLink={link}
             subtitle={subtitle}
             description={description}
             type={type}
           />
        </div>
    )
}

export default CertificationsItem;