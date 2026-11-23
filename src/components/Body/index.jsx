import React, { useState, useEffect } from 'react';
import BodyMenu from '../BodyMenu';
import About from '../../pages/About';
import Warning from '../Warning';
import Portfolio from '../../pages/Portfolio';
import PersonalWork from '../../pages/PersonalWork';
import Certifications from '../../pages/Certifications';
import Experience from '../../pages/Experience';
import Education from '../../pages/Education';

const Body = ({ menuItems, activePage, onNavigate }) => {

    return (
        <div>
            <BodyMenu activeItem={activePage} action={onNavigate} items={menuItems} />
            {/* <Warning /> */}
            {Boolean(activePage === 0) && <About />}
            {Boolean(activePage === 1) && <Portfolio />}
            {Boolean(activePage === 2) && <PersonalWork />}
            {Boolean(activePage === 3) && <Certifications />}
            {Boolean(activePage === 4) && <Experience />}
            {Boolean(activePage === 5) && <Education />}
        </div>
    )

}

export default Body;