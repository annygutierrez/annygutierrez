import React from 'react';

const ClientSection = ({ clients }) => {

    if (!clients) return <></>;

    return (
        <div>
           <p style={{ fontFamily: 'Roboto', fontSize: '14px' }}><span style={{ fontWeight: 'bold'}}>Clients: </span>{clients}</p>
        </div>
    )
}

export default ClientSection;