import React from 'react';
import SubMenuItem from '../SubMenuItem';

const MenuTab = ({ items = [], activeItem, action }) => {
    return (
        <div style={{ backgroundColor: '#EFEFEF', width: '1000px', borderRadius: '6px', justifyContent: 'center', textAlign: 'center', padding: '0.4em 0' }}>
            {
              items.map(item => <SubMenuItem action={action} activeItem={activeItem} key={item.code} id={item.code} action={action} title={item.name} />)
            }
        </div>
    )
}

export default MenuTab;