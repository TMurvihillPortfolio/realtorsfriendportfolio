import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/ManageHomeStyles.js';
import homeImage from '../img/hometwocarflat.jpg';
import livingImage from '../img/livingroom.jpg';
import SelectRoom from '../components/SelectRoom';

function manageHome(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <div className={classes.pageHeading}>
                <h1>Manage Home</h1>
            </div>
            <div className={classes.imageGallery}>
                <img src={homeImage} className={classes.homeImage} alt='front of house two car garage flat roof'/>
                <img src={homeImage} className={classes.homeImage} alt='front of house two car garage flat roof'/>
            
            </div>
            <SelectRoom />
        </div>       
    )
}

export default withStyles(styles)(manageHome);