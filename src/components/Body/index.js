import React, { useState, useEffect } from 'react';
import BodyMenu from '../BodyMenu';
import About from '../../pages/About';
import Warning from '../Warning';
import Portfolio from '../../pages/Portfolio';
import PersonalWork from '../../pages/PersonalWork';
import Certifications from '../../pages/Certifications';

const Body = () => {
    const [activeId, setActiveId] = useState(0);

    const MenuItems = [
        {
            name: 'About me',
            code: 0
        },
        {
            name: 'Portfolio',
            code: 1
        },
        {
            name: 'Projects',
            code: 2
        },
        {
            name: 'Certifications',
            code: 3
        }
        // {
        //     name: 'Experience',
        //     code: 4
        // }
    ];

    const SelectItem = (id) => {
       setActiveId(id);
    }

    return (
        <div>
            <BodyMenu activeItem={activeId} action={SelectItem} items={MenuItems} />
            <Warning />
            {Boolean(activeId === 0) && <About />}
            {Boolean(activeId === 1) && <Portfolio />}
            {Boolean(activeId === 2) && <PersonalWork />}
            {Boolean(activeId === 3) && <Certifications />}
        </div>
    )
}

export default Body;