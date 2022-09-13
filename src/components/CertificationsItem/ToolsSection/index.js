import React from 'react';

const ToolsSection = ({tools}) => {
    if (!tools) return <></>;

    return (
        <div><p style={{ fontFamily: 'Roboto', fontSize: '14px' }}><span style={{ fontWeight: 'bold'}}>Technologies used on the projects: </span>{tools}</p></div>
    )
}

export default ToolsSection;