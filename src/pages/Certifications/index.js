import React, { useState } from 'react';
import SubMenu from '../../components/SubMenu';
import ArtCertifications from '../ArtCertifications';
import TechCertifications from '../TechCertifications';

const Certifications = () => {
    const [activeId, setActiveId] = useState(1);

    const MenuItems = [
        // {
        //     name: 'Soft Skills',
        //     code: 0
        // },
        {
            name: 'Programming',
            code: 1
        },
        {
            name: 'Art & Design',
            code: 2
        }
    ];

    const SelectItem = (id) => {
        setActiveId(id);
     }

    return (
        <div>
           <SubMenu action={SelectItem} activeItem={activeId} items={MenuItems} />
           {Boolean(activeId === 1) && <TechCertifications />}
           {Boolean(activeId === 2) && <ArtCertifications />}
        </div>
    )
}

export default Certifications;