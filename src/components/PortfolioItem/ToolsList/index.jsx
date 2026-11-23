import React from 'react';
import './styles.css';

const ToolsList = ({ items }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flex: 5, justifyContent: 'space-around' }}>
            {
                items.map(item => (
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img className="ToolsImg" src={item.icon} alt={item.name} />
                        <p className="ToolsName">{item.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ToolsList;