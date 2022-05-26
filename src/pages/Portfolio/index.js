import React from 'react';
import PortfolioItem from '../../components/PortfolioItem';
import { PortfolioList } from './portfolioList';

const Portfolio = () => {
    return (
        <div>
          {
              PortfolioList.map(item => (
                <PortfolioItem
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  image={item.cover}
                  tools={item.tools}
                  projectLink={item.link}
                />
              ))
          }
        </div>
    )
}

export default Portfolio;