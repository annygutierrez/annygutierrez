import React, { useState } from 'react';
import SubMenu from '../../components/SubMenu';
import CareerPath from '../CareerPath';
// import ArtCertifications from '../ArtCertifications';
// import TechExperience from '../TechExperience';
// import OtherExperience from '../OtherExperience';

const Education = () => {
    const [activeId, setActiveId] = useState(1);

    const MenuItems = [
        // {
        //     name: 'Soft Skills',
        //     code: 0
        // },
        {
            name: 'Career Path',
            code: 1
        },
        {
            name: 'Languages',
            code: 2
        }
    ];

    const SelectItem = (id) => {
        setActiveId(id);
     }

    return (
        <div>
            <CareerPath />
           {/* <SubMenu action={SelectItem} activeItem={activeId} items={MenuItems} /> */}
           {/* {Boolean(activeId === 1) && <TechExperience />}
           {Boolean(activeId === 2) && <OtherExperience />} */}
        </div>
    )
}

export default Education;