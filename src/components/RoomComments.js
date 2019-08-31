import React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import styles from '../styles/RoomCommentsStyles'

function RoomComments(props) {
    const { classes, realtorComments, buyerComments, sellerComments, updateComments } = props
    function handleUpdateComments(e) {
       let commenter = '';
        // if (e.target.id='realtorComments') commenter = 'realtor';
        // if (e.target.id='buyerComments') commenter = 'buyer';
        // if (e.target.id='sellerComments') commenter = 'seller';
        updateComments(e.target.id, props.room, e.target.value);
    }
    return (
        <div className={classes.root}>
            <div className={classes.comments}>
                <label htmlFor='realtorComments'><Typography>Realtor Comments</Typography></label>
                <textarea rows='7' id='realtorComments' onChange={handleUpdateComments} value={realtorComments} placeholder={(realtorComments==='')?'comments':undefined}/>
            </div>
            <div className={classes.comments}>
                <label htmlFor='buyerComments'><Typography>Buyer Comments</Typography></label>
                <textarea rows='7' id='buyerComments' onChange={handleUpdateComments} value={buyerComments} placeholder={(buyerComments==='')?'comments':undefined}/>
            </div>
            <div className={classes.comments}>
                <label htmlFor='sellerComments'><Typography>Seller Comments</Typography></label>
                <textarea rows='7' id='sellerComments' onChange={handleUpdateComments} value={sellerComments} placeholder={(sellerComments==='')?'comments':undefined}/>
            </div>    
        </div>
    )
}

export default withStyles(styles)(RoomComments);