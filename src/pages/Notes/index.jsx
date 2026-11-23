import React from 'react';

const Notes = () => {
    return (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', height: '100vh' }}>
            <div style={{ backgroundColor: '#e91e62', display: 'flex', width: '100vw', padding: '1em', justifyContent: 'center' }}>
                <p style={{ fontSize: 20, margin: 0, color: 'white', fontWeight: '400' }}>Temporal Template: This website is under construction</p>
            </div>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <p style={{ fontSize: 60 }}>“Nous voulons aller en France”</p>
            <a target={'_blank'} style={{ fontSize: 20 }} href='https://docs.google.com/presentation/d/1lhsBn7o1OwAK4E5MhyUjyfpq1DtFcgvgWCX2yPKr_Vs/edit?usp=sharing'>Click here : )</a>
            </div>
        </div>
    )
}

export default Notes;