import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

const PrivacyPolicy = () => {
  const history = useHistory();

    return (
        <div>
<div style={{ position: 'fixed', zIndex: '1000000000000', top: 0, alignSelf: 'center', width: '100%', height: '1em', display: 'flex', justifyContent: 'center' }}>
         <div onClick={() => history.push('/')} style={{ backgroundColor: '#FFA152', height: '3em', marginTop: '1em', alignItems: 'center', justifyContent: 'center', display: 'flex', padding: '0 10%', borderRadius: '2em' }}>
         <p style={{ color: 'white', display: 'flex', textAlign: 'center', marginTop: '1em', textDecoration: 'underline', cursor: 'pointer' }}>Go back to home</p>
         </div>
         </div>
          
        <div style={{ backgroundColor: '#07E1CA', padding: '4em' }}>
        <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '40px' }}>Potato Calendar</h1>
        <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>Privacy Policy</h2>
        </div>
        <div style={{ padding: '4em 5em' }}>
         <p>
                  Anny Gutierrez built the Potato Calendar app as
                  a Free app. This SERVICE is provided by
                  Anny Gutierrez at no cost and is intended for use as
                  is.
                </p> <p>
                  This page is used to inform visitors regarding my
                  policies with the collection, use, and disclosure of Personal
                  Information if anyone decided to use my Service.
                </p> <p><strong>Information Collection and Use</strong></p> <p>
                  This app does not collect any kind of information about the device or user in any kind of remote storage or remote database.
                </p>  <p><strong>Log Data</strong></p> <p>
                  This app do not collect any information about malfunctions.
                </p> <p><strong>Cookies</strong></p> <p>
                  This app do not use cookies.
                </p><p><strong>Children’s Privacy</strong></p> <p>
                  These Services do not address anyone under the age of 13.
                  I do not knowingly collect personally
                  identifiable information from children under 13 years of age. 
                </p> <p><strong>Changes to This Privacy Policy</strong></p> <p>
                  I may update our Privacy Policy from
                  time to time. Thus, you are advised to review this page
                  periodically for any changes. I will
                  notify you of any changes by posting the new Privacy Policy on
                  this page.
                </p> <p>This policy is effective as of 2021-11-15</p> <p><strong>Contact Us</strong></p> <p>
                  If you have any questions or suggestions about my
                  Privacy Policy, do not hesitate to contact me at potatocalendaraapp@gmail.com.
                </p> 
    </div>
    </div>)
}

export default PrivacyPolicy;