import React from 'react';
import CertDescription from './CertDescription';
import ItemIcon from './ItemIcon';
import './styles.css';

const CertificationsItem = ({
  title,
  subtitle,
  description,
  type,
  image,
  link,
  imgHover = false,
  clients,
  tools,
  tags
}) => {
    return (
        <div className="CertItemContainer">
           <ItemIcon image={image} alt={title} hover={imgHover}/>
           <CertDescription
             title={title}
             certLink={link}
             subtitle={subtitle}
             description={description}
             type={type}
             clients={clients}
             tools={tools}
             tags={tags}
           />
        </div>
    )
}

export default CertificationsItem;