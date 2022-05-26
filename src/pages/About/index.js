import React from 'react';
import Anny from '../../assets/anny.png';
import './styles.css';

const About = () => {
    return (
        <div className="AboutContainer">
           <div className="AboutDescriptionContainer">
               <span style={{ fontFamily: 'Anton', fontSize: '26px' }}>Anny Gutierrez-López</span>
               <p style={{ fontFamily: 'Poppins', fontSize: '15px' }}>Programmer (Mainly front-end)</p>
               <div style={{ paddingTop: '1em' }}>
                   <p style={{ fontFamily: 'Roboto', fontSize: '14px' }}>Hi! My name is Anny Gutierrez, and I’ve been inmerse in this technology thing since 2017, when I was 19 years old. </p>
                   <p style={{ fontFamily: 'Roboto', fontSize: '14px' }}>In my still short time alive, I handled several and very different positions, such as housekeeper, luthier, waitress, cart attendant, front-end developer, back-end developer, designer (every now and then). These jobs made me, and helped me realize that I should stick with my interests instead of let the world fade them away, specially when they are friking enjoyable.</p>
                   <p style={{ fontFamily: 'Roboto', fontSize: '14px' }}> 😀  My biggest hope as someone who loves technology and art is to become a maker, someone who can make some wild ideas reality.</p>
               </div>
           </div>
           <div className="AboutImgContainer">
               <img className="AboutImg" src={Anny} alt={'anny'} />
           </div>
        </div>
    )
}

export default About;