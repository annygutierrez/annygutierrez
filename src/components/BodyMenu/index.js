import React from 'react';
import BodyMenuItem from '../BodyMenuItem';

const BodyMenu = ({ items, action, activeItem }) => {
    return (
        <div style={{ justifyContent: 'center', textAlign: 'center', paddingTop: '1em' }}>
          {
              items.map(item => <BodyMenuItem activeItem={activeItem} key={item.code} id={item.code} action={action} title={item.name} />)
          }
        </div>
    )
}

export default BodyMenu;