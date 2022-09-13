import React from 'react';

const TagsSection = ({ tags = [] }) => {

    if (!tags || !tags.length) return <></>;

    return (
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '8px', flexWrap: 'wrap'  }}>
           {
               tags.map(item => (
                   <div style={{ backgroundColor: '#E9DBFF', borderRadius: '12px', display: 'flex', padding: '0.2em 0.9em', margin: '0.3em',  }}>
                       <p style={{ color: '#794AFF', fontFamily: 'Roboto', fontSize: '14', fontWeight: 'bold', margin: '0px', whiteSpace: 'nowrap' }}>{item}</p>
                   </div>
               ))
           }
        </div>
    )
}

export default TagsSection;