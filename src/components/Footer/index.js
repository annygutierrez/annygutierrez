import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#E3E6FF', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1em' }}>
            <span style={{ color: 'black', fontSize: '12px', fontFamily: 'Antonio' }}>© 2022 Anny Gutierrez. All Rights Reserved.</span>
            <a href={'https://annygutierrez.github.io/forfun'} target='_blank' style={{ fontSize: '12px', fontFamily: 'Roboto', color: '#727AC2', margin: '0px' }}>Here my web for fun 😎.</a>
        </div>
    )
}

export default Footer;