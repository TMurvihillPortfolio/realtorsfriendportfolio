import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from '../styles/ManageHomeStyles.js';
//#region home images
import homeImage from '../img/hometwocarflat.jpg';
import livingImage from '../img/livingroom.jpg';
import kitchenImage from '../img/kitchen.jpg';
import masterImage from '../img/masterbedroom.jpg';
//#endregion
import SelectRoom from './SelectRoom';
import RoomComments from './RoomComments';
import Improvements from './Improvements';
import NavBar from './NavBar';
import Footer from './Footer';

const initialComments = {   
                realtorComments: {
                    living:'',
                    kitchen:'',
                    master:''
                },
                buyerComments:{
                    living:'',
                    kitchen:'',
                    master:''
                },
                sellerComments:{
                    living:'',
                    kitchen:'',
                    master:''
                },
            };
function ManageHome(props) {
    const { classes } = props;
    const [ room, setRoom ] = useState('living');
    const [ roomImage, setRoomImage ] = useState(livingImage);
    const [ comments, setComments ] = useState(initialComments);
    
    const fullRoomName = {
        living: 'Living Room',
        kitchen: 'Kitchen',
        master: 'Master Bedroom'
    }
    function changeRoom(newRoom) {
        setRoom(newRoom);
        if (newRoom==='living') setRoomImage(livingImage);
        if (newRoom==='kitchen') setRoomImage(kitchenImage);
        if (newRoom==='master') setRoomImage(masterImage);
    }
    function updateComments(commenter, room, comment) {
        //     setExampleState({...exampleState,  masterField2: {
        //         fieldOne: "c",
        //         fieldTwo: {
        //            fieldTwoOne: "d",
        //            fieldTwoTwo: "e"
        //            }
        //         },
        //    }})
        const commenterObj = {...comments[commenter], [room]: comment};
        setComments({...comments, [commenter]: commenterObj});
    }
    //used for debugging state
    //useEffect(() => console.log(comments));
    return (
        <div className={classes.root}>
            <NavBar />
            <div className={classes.pageHeading}>
                <Typography variant='h3' gutterBottom>Realtor's Friend</Typography>
                <Typography variant='h4' gutterBottom>Recommedations for Home</Typography>
            </div>
            <div className={classes.imageGallery}>
                <figure>
                    <img src={homeImage} className={classes.homeImage} alt='front of house two car garage flat roof'/>
                    <figcaption><Typography className={classes.caption}>1005 BLUE COAST WAY NE</Typography></figcaption>
                </figure>
                <figure>
                    <img src={roomImage} className={classes.roomImage} alt={room}/>
                    <figcaption><Typography className={classes.caption}>{fullRoomName[room].toUpperCase()}</Typography></figcaption>
                </figure>                
            </div>
            <Typography variant='h4' className={classes.pageHeading}>{fullRoomName[room].toUpperCase()}</Typography>
            <SelectRoom className={classes.select} changeRoom={changeRoom}/>
            <RoomComments 
                room={room}
                realtorComments={comments.realtorComments[room]}
                buyerComments={comments.buyerComments[room]}
                sellerComments={comments.sellerComments[room]}
                updateComments={updateComments}
            />
            <Improvements 
                room={fullRoomName[room]} 
            />
            <Footer /> 
        </div>        
    );
}
export default withStyles(styles)(ManageHome);