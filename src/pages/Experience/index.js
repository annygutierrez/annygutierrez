import React, { useState } from 'react';
import SubMenu from '../../components/SubMenu';
// import ArtCertifications from '../ArtCertifications';
import TechExperience from '../TechExperience';
import OtherExperience from '../OtherExperience';

const Experience = () => {
    const [activeId, setActiveId] = useState(1);

    const MenuItems = [
        // {
        //     name: 'Soft Skills',
        //     code: 0
        // },
        {
            name: 'Technology',
            code: 1
        },
        {
            name: 'Nonrelated',
            code: 2
        }
    ];

    const SelectItem = (id) => {
        setActiveId(id);
     }

    return (
        <div>
           <SubMenu action={SelectItem} activeItem={activeId} items={MenuItems} />
           {Boolean(activeId === 1) && <TechExperience />}
           {Boolean(activeId === 2) && <OtherExperience />}
        </div>
    )
}

export default Experience;