import React, { useState } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import styles from '../styles/RoomCommentsStyles'

function RoomComments({ classes }) {
    const [ realtorComments, setRealtorComments ] = useState('');
    const [ buyerComments, setBuyerComments ] = useState('');
    const [ sellerComments, setSellerComments ] = useState('');
    return (
        <div className={classes.root}>
            <div className={classes.comments}>
                <label htmlFor='realtorComments'><Typography color='primary'>Realtor Comments</Typography></label>
                <textarea rows='7' id='realtorComments' value={realtorComments} placeholder={(realtorComments==='')&&'comments'}/>
            </div>
            <div className={classes.comments}>
                <label htmlFor='buyerComments'><Typography color='primary'>Buyer Comments</Typography></label>
                <textarea rows='7' id='buyerComments' value={buyerComments} placeholder={(buyerComments==='')&&'comments'}/>
            </div>
            <div className={classes.comments}>
                <label htmlFor='sellerComments'><Typography color='primary'>Seller Comments</Typography></label>
                <textarea rows='7' id='sellerComments' value={sellerComments} placeholder={(sellerComments==='')&&'comments'}/>
            </div>    
        </div>
    )
}

export default withStyles(styles)(RoomComments);