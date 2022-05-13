import React from 'react';
import PortfolioItem from '../../components/PortfolioItem';
import { PersonalWorkList } from './personalWorkList';

const PersonalWork = () => {
    return (
        <div>
          {
              PersonalWorkList.map(item => (
                <PortfolioItem
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  image={item.cover}
                  tools={item.tools}
                  projectLink={item.projectLink}
                />
              ))
          }
        </div>
    )
}

export default PersonalWork;