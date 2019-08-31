import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import logo from '../img/logo.jpg';
import { flexbox } from '@material-ui/system';

const styles = {
    footer: {
        marginTop: '50px',
        display: 'block',
        padding: '20px'
    },
    line1: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    logo: {
        height: '30px',
        borderRadius: '3px'
    },
    menuContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 'fit-content',       
        '& a': {
            color: 'whitesmoke',
            marginLeft: '20px',
            textDecoration: 'none',
            borderBottom: '1px solid transparent',
            transition: 'all .5s',
            padding: '5px'
        },
        "& a:hover": {
            borderBottom: '1px solid whitesmoke'
        }       
    },
    social: {
        "& p": {
            color: 'whitesmoke'
        },
        "& a": {
            color: 'whitesmoke',
            textDecoration: 'none',
            borderBottom: '1px solid transparent',
            transition: 'all .5s',
            padding: '5px',
            "&:hover": {
                borderBottom: '1px solid whitesmoke'
            }
        }           
    },
    copyRight: {
        color: 'whitesmoke',
        marginBottom: '30px',
        "& p": {
            color: 'whitesmoke'
        } 
    }
}
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { classes } = this.props;
        return ( 
            <div className={classes.footer} id="footer">
                <div className={classes.line1}>
                    <img src={logo} alt='logo' className={classes.logo}/>
                    <div className={classes.menuContainer}>             
                        <a href="#" class="footer__menuContainer--menu-item">Home</a>
                        <a href="#" class="footer__menuContainer--menu-item">About</a>
                        <a href="https://take2tech.ca/contact" class="footer__menuContainer--menu-item">Contact</a> 
                    </div>
                    
                </div>
                <div className={classes.social}>
                    <a href="https://www.linkedin.com/in/tisha-murvihill-tech" target="_blank" class="footer__menuContainer--social-item">
                        {/* <img src="img/linkedin.jpg" class="footer__menuContainer--social-item-img"/> */}

                    </a>
                    {/* <i class="ion-social-linkedin footer__menuContainer--social-item-icon"></i> */}
                    <p>Website by: <a href="mailto:tech@take2tech.ca" class="footer__menuContainer--social-item footer__menuContainer--social-item-web" target="_blank">tech@take2tech.ca</a></p>
                </div>
                <div class={classes.copyRight}>
                    <p>&copy; 2019 by take2tech.ca. All rights reserved. ver 8.08-m</p>
                </div>
            </div>
         );
    }
}
 
export default withStyles(styles)(Footer);