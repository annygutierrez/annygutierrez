import React from 'react';

const ImageCover = ({ image, alt }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img style={{ width: '1000px' }} src={image} alt={alt} />
            </div>
    )
}

export default ImageCover;