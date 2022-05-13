import React from 'react';
import ImageCover from './ImageCover';
import ItemDescription from './ItemDescription';
import ToolsList from './ToolsList';

const PortfolioItem = ({ title, subtitle, description, image, tools, projectLink }) => {
    return (
        <div style={{ display: 'flex', padding: '4em 0', alignItems: 'center', flexDirection: 'column' }}>
            <ImageCover image={image} alt={title} />
           <div style={{ display: 'flex', flexDirection: 'row', width: '1000px', paddingTop: '2em' }}>
                <ItemDescription title={title} subtitle={subtitle} description={description} projectLink={projectLink} />
                <ToolsList items={tools} />
           </div>
        </div>
    )
}

export default PortfolioItem;