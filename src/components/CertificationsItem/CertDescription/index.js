import React from 'react';
import CertTitle from '../CertTitle';

const CertDescription = ({ title, certLink, subtitle, description, type }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 2, paddingLeft: '5em' }}>
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