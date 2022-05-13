import React from 'react';
import './style.css';

const ImageCover = ({ image, alt }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img className="ImageCoverImg" src={image} alt={alt} />
            </div>
    )
}

export default ImageCover;