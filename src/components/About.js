import React from 'react';
import underConstruction from '../img/underconstuction.jpg';
import NavBar from './NavBar';

function About(props) {
    return(
        <div style={{backgroundColor: '#241F4D'}}>
            <NavBar />
            <div style={{width: '100%', marginTop: '50px'}}>
                <h1 style={{textAlign: 'center', color: '#D0C9DD'}}>About Page</h1>
                <img src={underConstruction} style={{marginLeft: '20%', width: '60%'}} alt='Under construction'/>
            </div>
            
        </div>
    );
}
export default About;