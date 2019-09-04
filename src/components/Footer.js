import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/FooterStyles';
import logo from '../img/logo.jpg';

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
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="https://take2tech.ca/contact">Contact</a> 
                    </div>                    
                </div>
                <div className={classes.social}>
                    <p>Website by: <a href="mailto:tech@take2tech.ca" target="_blank">tech@take2tech.ca</a></p>
                </div>
                <div className={classes.copyRight}>
                    <p>&copy; 2019 by take2tech.ca. All rights reserved. ver 8.08-m</p>
                </div>
            </div>
        );
    }
}
 
export default withStyles(styles)(Footer);