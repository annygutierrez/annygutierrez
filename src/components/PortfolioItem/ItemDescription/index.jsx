import React from 'react';
import ItemTitle from '../ItemTitle';

const ItemDescription = ({ title, subtitle, description, projectLink }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 2 }}>
            <ItemTitle title={title} projectLink={projectLink} />
            <p style={{ fontFamily: 'Poppins', fontSize: '15px' }}>{subtitle}</p>
            <div>
                <p style={{ fontFamily: 'Roboto', fontSize: '14px' }}>{description}</p>
            </div>
        </div>
    )
}

export default ItemDescription;