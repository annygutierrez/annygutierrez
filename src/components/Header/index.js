import React from 'react';
import HeaderTitle from '../HeaderTitle';
import Socials from '../Socials';

const Header = () => {
    return (
        <div style={{ display: 'flex', padding: '1.4em 4em', justifyContent: 'space-between' }}>
            <HeaderTitle />
            <Socials />
        </div>
    )
}

export default Header;