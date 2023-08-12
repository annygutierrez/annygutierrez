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
                   <p style={{ fontFamily: 'Roboto', fontSize: '14px' }}>Hi! My name is Anny Gutierrez, and I’ve been working in the IT industry since 2018, when I was 19 years old. </p>
                   <p style={{ fontFamily: 'Roboto', fontSize: '14px' }}>In my still short working experience, I handled several and very different positions, such as housekeeper, luthier, waitress, cart attendant, front-end developer, mobile developer, back-end developer, designer (every now and then).</p>
                   <p style={{ fontFamily: 'Roboto', fontSize: '14px' }}>These jobs were very important for me to develop the skills I'm currently making use of as a team member, as a leader and as a technology consultant.</p>
               </div>
           </div>
           <div className="AboutImgContainer">
               <img className="AboutImg" src={Anny} alt={'anny'} />
           </div>
        </div>
    )
}

export default About;