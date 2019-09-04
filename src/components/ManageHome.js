import React, { useState, useEffect, useContext } from 'react';
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
import AddImprovement from './AddImprovement';
import { RoomContext } from '../contexts/RoomContext';
import { ImprovementsContext } from '../contexts/ImprovementsContext';
import { _INITIAL_COMMENTS, _INITIAL_IMPROVEMENTS } from '../assets/constants';

function ManageHome(props) {
    const { room, setRoom, roomImage, toggleTableRerender, setToggleTableRerender  } = useContext(RoomContext);
    //const { improvements, setImprovements } = useContext(ImprovementsContext);
    const { classes } = props;
    //const [ room, setRoom ] = useState('living');
    //const [ roomImage, setRoomImage ] = useState(livingImage);
    const [ comments, setComments ] = useState(_INITIAL_COMMENTS);
    const [ improvements, setImprovements ] = useState(_INITIAL_IMPROVEMENTS);
    //const [ toggleTableRerender, setToggleTableRerender ] = useState(true);
    
    const fullRoomName = {
        living: 'Living Room',
        kitchen: 'Kitchen',
        master: 'Master Bedroom'
    }
    // function changeRoom(newRoom) {
    //     setRoom(newRoom);
    //     if (newRoom==='living') setRoomImage(livingImage);
    //     if (newRoom==='kitchen') setRoomImage(kitchenImage);
    //     if (newRoom==='master') setRoomImage(masterImage);
    //     setToggleTableRerender(!toggleTableRerender);
    // }
    function updateComments(commenter, room, comment) {
        //create new commenter object
        const commenterObj = {...comments[commenter], [room]: comment};
        //replace commenter object in state
        setComments({...comments, [commenter]: commenterObj});
    }
    function updateImprovements(improvementId, attribute, text) {
        //copy state
        let improvementsCopy = {...improvements};
        //find improvement to be updated
        let newImprovementObj = improvementsCopy[room].find(improvement => improvement.id === improvementId);
        //replace improvement attribute value with new value
        newImprovementObj = {...newImprovementObj, [attribute]: text };
        //replace improvement in array of room improvements with updated improvement object
        const replaceIndex = improvementsCopy[room].findIndex(improvement => improvement.id === improvementId);
        improvementsCopy[room].splice(replaceIndex, 1, newImprovementObj);
        //update array of room improvements in state
        setImprovements({...improvements, [room]: improvementsCopy[room]});
    }
    function addImprovement(room, improvementObj) {
        const copyRoomArray = [...improvements[room]];
        copyRoomArray.push(improvementObj);
        setImprovements({...improvements, [room]: copyRoomArray});
        setToggleTableRerender();
    }
    //used for debugging state
    useEffect(() => console.log(room, toggleTableRerender));
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
                <SelectRoom className={classes.select} onChange={setRoom}/>
                <RoomComments 
                    room={room}
                    realtorComments={comments.realtorComments[room]}
                    buyerComments={comments.buyerComments[room]}
                    sellerComments={comments.sellerComments[room]}
                    updateComments={updateComments}
                />           
                <div style={{backgroundColor: 'wheat', padding: '30px 0'}}> {/* workaround -- for some reason changing the props inside Improvements tag room does not trigger a table change. A new table must be created, hence the outer if statements. */}    
                    <h1>Improvement Suggestions</h1>
                    {toggleTableRerender && <Improvements room={room} improvements= {improvements} updateImprovements={updateImprovements}/>}
                    {!toggleTableRerender && <Improvements room={room} improvements= {improvements} updateImprovements={updateImprovements}/>}    
                </div>
                <AddImprovement room={room} addimprovement={addImprovement}/>
                <Footer /> 
            </div>              
    );
}
export default withStyles(styles)(ManageHome);