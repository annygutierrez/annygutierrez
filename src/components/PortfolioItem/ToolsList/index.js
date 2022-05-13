import React from 'react';

const ToolsList = ({ items }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flex: 5, justifyContent: 'space-around' }}>
            {
                items.map(item => (
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ width: '83px', height: 'auto' }} src={item.icon} alt={item.name} />
                        <p style={{ color: '#37645A', fontFamily: 'Anton', fontSize: '20px', marginTop: '0.4em' }}>{item.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ToolsList;