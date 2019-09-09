import React from 'react';
import classes from './Logo.css';

const logo = (props) => {
  const color = props.color || '#2476FA';
  const width = props.width || 111;
  const height = (width - 41);
  return(
  <div className={classes.Logo}>
    <svg width={width} height={height} viewBox="0 0 111 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="14.96" height="69.8136" fill="black" />
      <rect x="38.6467" width="14.96" height="69.8136" fill="black" />
      <rect x="61.7102" y="19.3234" width="14.96" height="50.4902" fill={color} />
      <rect x="95.3704" y="30.5434" width="14.96" height="39.2701" fill="black" />
      <rect x="19.3235" width="14.96" height="14.3367" fill="black" />
      <rect x="61.7102" width="48.6202" height="14.3367" fill="black" />
      <rect x="82.9036" y="30.5434" width="12.4667" height="14.3367" fill="black" />
      <rect x="82.9036" y="55.4768" width="12.4667" height="14.3367" fill="black" />
      <rect x="19.3987" y="19.3987" width="14.96" height="14.3367" fill="black" />
    </svg>

  </div>
)};

export default logo;