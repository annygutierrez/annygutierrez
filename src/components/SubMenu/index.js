import React from 'react';
import BodyMenuItem from '../BodyMenuItem';
import MenuTab from './MenuTab';

const SubMenu = ({ items, action, activeItem }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', paddingTop: '2.5em', alignItems: 'center' }}>
            <div style={{ backgroundColor: '#EFEFEF', width: '400px', height: '6px' }}></div>
            <MenuTab action={action} items={items} activeItem={activeItem} />
            <div style={{ backgroundColor: '#EFEFEF', width: '400px', height: '6px' }}></div>
        </div>
    )
}

export default SubMenu;