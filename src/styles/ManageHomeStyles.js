import { _MEDIA_QUERIES } from '../assets/constants';

const styles = {
    "[body]": {
        margin: 0
    },
    root: {
        minHeight: '100vh',
        minWidth: '100vw',
        textAlign: 'center',
        backgroundColor: '#241F4D',
        paddingBottom: '25px',
        ["& h4"]: {         
            [_MEDIA_QUERIES.down('sm')]: {
                fontSize: '30px',
                marginBottom: '0px'
            },       
            [_MEDIA_QUERIES.down('xs')]: {
                fontSize: '20px'
            }, 
        },
    },
    pageHeading: {
        marginTop: '50px',
        textAlign: 'center',
        marginBottom: '15px',
        color: '#FCFCFD',
        ["& h3"]: {
            [_MEDIA_QUERIES.down('sm')]: {
                fontSize: '36px',
            },       
            [_MEDIA_QUERIES.down('xs')]: {
                fontSize: '26px'
            }, 
          
        },
        ["& h4"]: {
            color: '#D0C9DD',
            [_MEDIA_QUERIES.down('sm')]: {
                fontSize: '30px',
            },       
            [_MEDIA_QUERIES.down('xs')]: {
                fontSize: '20px'
            }, 
        },          
    },
    imageGallery: {
        display: 'flex',
        width: '100%',
        height: '350px',
        margin: '50px 15px',
        [_MEDIA_QUERIES.down('sm')]: {
            height: '200px',
            margin: 'auto'
        },       
        [_MEDIA_QUERIES.down('xs')]: {
            height: '150px',
            margin: 'auto'
        },       
        "&>figure": {
            width: '48%',
            height: '100%',
            margin: 0,
            padding: 0,
            "&>img": {
                height: '100%',
                width: '100%'
            }           
        }
    },
    table: {
        backgroundColor: 'wheat', 
        padding: '30px 0',
        ['& h1']: {
            [_MEDIA_QUERIES.down('sm')]: {
                fontSize: '36px',
            },       
            [_MEDIA_QUERIES.down('xs')]: {
                fontSize: '26px'
            }
        }       
    },
    caption: {
        color: '#D0C9DD',
        [_MEDIA_QUERIES.down('sm')]: {
            fontSize: '14px',
        },       
        [_MEDIA_QUERIES.down('xs')]: {
            fontSize: '12px'
        }, 
    }
}
export default styles;