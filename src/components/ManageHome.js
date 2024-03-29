import React, { useState, useEffect, useContext } from 'react';
import styles from '../styles/ManageHomeStyles.js';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
//#region components
import SelectRoom from './SelectRoom';
import RoomComments from './RoomComments';
import Improvements from './Improvements';
import NavBar from './NavBar';
import Footer from './Footer';
import AddImprovement from './AddImprovement';
//#endregion
import homeImage from '../img/hometwocarflat.jpg';
import { RoomContext } from '../contexts/RoomContext';
import { CommentsContext } from '../contexts/CommentsContext';
import { _INITIAL_COMMENTS, _INITIAL_IMPROVEMENTS, _FULL_ROOM_NAME } from '../assets/constants';

function ManageHome(props) {
    const { classes } = props;
    const [ improvements, setImprovements ] = useState(_INITIAL_IMPROVEMENTS);
    const { comments  } = useContext(CommentsContext);
    const { 
        room,  
        roomImage, 
        changeRoom,
        toggleTableRerender, 
        changeToggleTableRerender
    } = useContext(RoomContext);

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
        //copy state
        const copyRoomArray = [...improvements[room]];
        //add improvement
        copyRoomArray.push(improvementObj);
        //update state
        setImprovements({...improvements, [room]: copyRoomArray});
        //trigger table rerender
        changeToggleTableRerender();
    }
    useEffect(() => {
        //warn user that changes are not saved on this sample site
        window.addEventListener('beforeunload', (event) => {
            // Cancel the event as stated by the standard.
            event.preventDefault();
            event.returnValue = '';
          });       
    });
    return (       
        <div className={classes.root}>
            <NavBar />
            <div className={classes.pageHeading}>
                <Typography variant='h3' gutterBottom>Realtor's Friend</Typography>
                <Typography variant='h4' gutterBottom>Recommedations for Home</Typography>
            </div>
            <div className={classes.imageGallery}>
                <figure>
                    <img src={homeImage} className={classes.roomImage} alt='front of house two car garage flat roof'/>
                    <figcaption><Typography className={classes.caption}>1005 BLUE COAST WAY NE</Typography></figcaption>
                </figure>
                <figure>
                    <img src={roomImage}  className={classes.roomImage} alt={room}/>
                    <figcaption><Typography className={classes.caption}>{_FULL_ROOM_NAME[room].toUpperCase()}</Typography></figcaption>
                </figure>                
            </div>
            <Typography variant='h4' className={classes.pageHeading}>{_FULL_ROOM_NAME[room].toUpperCase()}</Typography>
            <SelectRoom onChange={changeRoom}/>
            <RoomComments 
                room={room}
                realtorComments={comments.realtorComments[room]}
                buyerComments={comments.buyerComments[room]}
                sellerComments={comments.sellerComments[room]}
            />           
            <div className={classes.table}> {/* workaround -- for some reason changing the props inside Improvements tag does not trigger a table change. A new table must be created, hence the outer if statements. */}    
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