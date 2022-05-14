import React from 'react';
import CertTitle from '../CertTitle';
import './styles.css';

const CertDescription = ({ title, certLink, subtitle, description, type }) => {
    return (
        <div className="CertDescriptionContainer">
            <CertTitle title={title} certLink={certLink} />
            <p style={{ fontFamily: 'Poppins', fontSize: '15px' }}>{subtitle}</p>
            <div>
                <p style={{ fontFamily: 'Roboto', fontSize: '14px' }}>{description}</p>
            </div>
            <p style={{ fontFamily: 'Roboto', fontSize: '15px', color: '#07AC7B', fontWeight: 'bold' }}>{type}</p>
        </div>
    )
}

export default CertDescription;