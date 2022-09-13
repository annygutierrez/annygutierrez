import React from 'react';
import CertTitle from '../CertTitle';
import ClientSection from '../ClientSection';
import TagsSection from '../TagsSection';
import ToolsSection from '../ToolsSection';
import './styles.css';

const CertDescription = ({ title, certLink, subtitle, description, type, clients, tools, tags }) => {
    return (
        <div className="CertDescriptionContainer">
            <CertTitle title={title} certLink={certLink} />
            <p style={{ fontFamily: 'Poppins', fontSize: '15px' }}>{subtitle}</p>
            <TagsSection tags={tags} />
            <div>
                <p style={{ fontFamily: 'Roboto', fontSize: '14px' }}>{description}</p>
            </div>
            <ToolsSection tools={tools} />
            <ClientSection clients={clients} />
            <p style={{ fontFamily: 'Roboto', fontSize: '15px', color: '#07AC7B', fontWeight: 'bold' }}>{type}</p>
        </div>
    )
}

export default CertDescription;