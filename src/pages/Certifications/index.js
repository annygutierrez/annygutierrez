import React, { useState } from 'react';
import SubMenu from '../../components/SubMenu';
import ArtCertifications from '../ArtCertifications';
import TechCertifications from '../TechCertifications';

const Certifications = () => {
    const [activeId, setActiveId] = useState(2);

    const MenuItems = [
        // {
        //     name: 'Soft Skills',
        //     code: 0
        // },
        {
            name: 'Art & Design',
            code: 1
        },
        {
            name: 'Programming',
            code: 2
        }
    ];

    const SelectItem = (id) => {
        setActiveId(id);
     }

    return (
        <div>
           <SubMenu action={SelectItem} activeItem={activeId} items={MenuItems} />
           {Boolean(activeId === 2) && <TechCertifications />}
           {Boolean(activeId === 1) && <ArtCertifications />}
        </div>
    )
}

export default Certifications;