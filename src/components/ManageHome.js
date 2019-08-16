import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from '../styles/ManageHomeStyles.js';
//#region home images
import homeImage from '../img/hometwocarflat.jpg';
import livingImage from '../img/livingroom.jpg';
import kitchenImage from '../img/kitchen.jpg';
import masterImage from '../img/masterbedroom.jpg';
//#endregion
import SelectRoom from '../components/SelectRoom';
import RoomComments from '../components/RoomComments';
import Improvements from '../components/Improvements';

function ManageHome(props) {
    const { classes } = props;
    const [ room, setRoom ] = useState('living');
    const [ roomImage, setRoomImage ] = useState(livingImage);
    const [ realtorComments, setRealtorComments ] = useState('');
    const [ buyerComments, setBuyerComments ] = useState('');
    const [ sellerComments, setSellerComments ] = useState('');
    
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
    function updateComments(commenter, comment) {
        console.log('inupdatecommnet');
        console.log(commenter);
        console.log(comment);
        if (commenter === 'realtorComments') setRealtorComments(comment);
        if (commenter === 'buyerComments') setBuyerComments(comment);
        if (commenter === 'sellerComments') setSellerComments(comment);
    }
    return (
        <div className={classes.root}>
            <div>
                <Typography variant='h3' color='secondary' gutterBottom>Manage Home</Typography>
            </div>
            <div className={classes.imageGallery}>
                <figure>
                    <img src={homeImage} className={classes.homeImage} alt='front of house two car garage flat roof'/>
                    <figcaption><Typography color='secondary'>1005 BLUE COAST WAY NE</Typography></figcaption>
                </figure>
                <figure>
                    <img src={roomImage} className={classes.roomImage} alt={room}/>
                    <figcaption><Typography color='secondary'>{fullRoomName[room].toUpperCase()}</Typography></figcaption>
                </figure>                
            </div>
            <Typography variant='h4' color='secondary'>{fullRoomName[room].toUpperCase()}</Typography>
            <SelectRoom changeRoom={changeRoom}/>
            <RoomComments 
                realtorComments={realtorComments}
                buyerComments={buyerComments}
                sellerComments={sellerComments}
                updateComments={updateComments}
            />
            <Improvements 
                room={fullRoomName[room]} 
            />
        </div>       
    )
}
export default withStyles(styles)(ManageHome);