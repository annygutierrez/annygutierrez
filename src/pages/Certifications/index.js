import React, { useState } from 'react';
import SubMenu from '../../components/SubMenu';
import ArtCertifications from '../ArtCertifications';
import LanguageCert from '../LanguageCert';
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
            name: 'Language',
            code: 2
        },
        {
            name: 'Art & Design',
            code: 3
        }
    ];

    const SelectItem = (id) => {
        setActiveId(id);
     }

    return (
        <div>
           <SubMenu action={SelectItem} activeItem={activeId} items={MenuItems} />
           {Boolean(activeId === 1) && <TechCertifications />}
           {Boolean(activeId === 2) && <LanguageCert />}
           {Boolean(activeId === 3) && <ArtCertifications />}
        </div>
    )
}

export default Certifications;