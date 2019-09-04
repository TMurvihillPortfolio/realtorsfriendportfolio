import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/NavBarStyles';
import logo from '../img/logo.jpg';
import {withStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { _MEDIA_QUERIES } from '../assets/constants';

function NavBar(props) {
    const { classes } = props;
    // constructor(props) {
    //     super(props);
    //     this.handleDropDownClick=this.handleDropDownClick.bind(this);
    //     this.closeMenu=this.closeMenu.bind(this);
    //     this.handleOpenMobile=this.handleOpenMobile.bind(this);
    //     this.state = { 
    //         open: false
    //      }
    // }
    
    function closeMenu(e) {
        e.stopPropagation();
        document.querySelector('#selectItems').style.display = 'none';
    }
    function handleOpenMobile(e) {
        const links = document.querySelector('#links');
        const navBar = document.querySelector('#navBar');
        const a_links = [...document.querySelectorAll('#links a')];
        const selectMenu = document.querySelector('#selectMenu');
        const mobileMenu = document.querySelector('#mobileMenu');
        //hide on outside click
        // document.onclick = function(e){
        //     if(e.target.id !== 'links' && e.target.id !== 'selectMenu'){
        //         links.style.display = 'none';
        //         mobileMenu.style.display = 'flex';
        //         //window.location.reload(); //NOT YET IMPLEMENTED -- this is a hack to fix mobile menu not working on second click
        //     }
        // };
        navBar.style.display= 'flex';
        links.style.flexDirection= 'column';
        links.style.alignItems= 'flex-end';
        links.style.position= 'absolute';
        links.style.right= '0';
        links.style.textAlign= 'right';      
        links.style.top= '0';
        links.style.width= '90px';
        links.style.backgroundColor= '#f5deb3';
        links.style.borderRadius = '7px';
        a_links.map(link => {
            link.style.color = '#333';
            link.style.marginRight = '0px';
        });
        // selectMenu.style.fontSize='14px';
        // selectMenu.style.marginLeft = '0';
        // selectMenu.style.marginRight = '13px';
        // selectMenu.style.marginTop = '0';
        // selectMenu.style.transform = 'none';
        mobileMenu.style.display = 'none';
    }
    return (
        <div className={classes.root}>
            <nav className={classes.NavBar} id='navBar'>               
                <div className={classes.linksContainer}>
                    <Link to='/' className={classes.logo}>
                        <img src={logo} alt='logo Fun Facts Train Game'/>
                    </Link>
                    <ul className={classes.links} id='links'>
                        <li><Link to='/realtorsfriend/home'>Home</Link></li>
                        <li><Link to='/realtorsfriend/about'>About</Link></li>
                        <li><Link to='/realtorsfriend/contact'>Contact</Link></li>        
                    </ul> 
                </div>              
            </nav>
            <div className={classes.mobileMenu} id='mobileMenu'>
                <MenuIcon onClick={handleOpenMobile} id='mobileIcon'/>   
            </div>
        </div> 
    );
}
 
export default withStyles(styles)(NavBar);
