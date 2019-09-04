import React, { useContext } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import styles from '../styles/RoomCommentsStyles';
import { CommentsContext } from '../contexts/CommentsContext';
import { RoomContext } from '../contexts/RoomContext';

function RoomComments(props) {  
    const { classes } = props
    const { comments, updateComments } = useContext(CommentsContext);
    const { room } = useContext(RoomContext);
    function handleUpdateComments(e) {
        updateComments(e.target.id, room, e.target.value);
    }
    return (
        <div className={classes.root}>
            <div className={classes.comments}>
                <label htmlFor='realtorComments'><Typography>Realtor Comments</Typography></label>
                <textarea rows='7' id='realtorComments' onChange={handleUpdateComments} value={comments.realtorComments[room]} placeholder={(comments.realtorComments[room]==='')?'comments':undefined}/>
            </div>
            <div className={classes.comments}>
                <label htmlFor='buyerComments'><Typography>Buyer Comments</Typography></label>
                <textarea rows='7' id='buyerComments' onChange={handleUpdateComments} value={comments.buyerComments[room]} placeholder={(comments.buyerComments[room]==='')?'comments':undefined}/>
            </div>
            <div className={classes.comments}>
                <label htmlFor='sellerComments'><Typography>Seller Comments</Typography></label>
                <textarea rows='7' id='sellerComments' onChange={handleUpdateComments} value={comments.sellerComments[room]} placeholder={(comments.sellerComments[room]==='')?'comments':undefined}/>
            </div>    
        </div>
    )
}

export default withStyles(styles)(RoomComments);