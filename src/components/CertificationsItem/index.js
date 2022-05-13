import React from 'react';
import CertDescription from './CertDescription';
import ItemIcon from './ItemIcon';
import './styles.css';

const CertificationsItem = ({ title, subtitle, description, type, image, link }) => {
    return (
        <div className="CertItemContainer">
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