import { _MEDIA_QUERIES } from '../assets/constants';
export default {
    root: {
        width: '100%'
    },
    NavBar: {
        backgroundColor: '#237CB1',
        display: 'block',
        [_MEDIA_QUERIES.down('md')]: {
            display: 'none'
        }
    },
    logo: {
        '& img': {
            borderRadius: '0 5px 5px 0',
            width: '50px',
            height: '100%'
        }       
    },
    linksContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    links: {
        display: 'flex',
        justifyContent: 'flex-end',
        listStyle: 'none',
        "& a": {
            textDecoration: 'none',
            fontSize: '20px',
            padding: '5px 12px 10px 0',
            color: '#FCFCFD',
            marginLeft: '50px',
            marginRight: '15px',
            borderBottom: '1px solid transparent',
            transition: 'border 1s ease-in-out'           
        },
        '& a:hover': {
            borderBottom: '1px solid whitesmoke',
            [_MEDIA_QUERIES.down('md')]: {
                borderBottom: 'none'
            }
        }      
    },
    showMobileMenu: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        position: 'absolute',
        width: 'fit-content',
        right: '0',
        textAlign: 'right',      
        top: '0',
        backgroundColor: '#D0C9DD'
    },
    mobileMenu: {
        display: 'none',
        [_MEDIA_QUERIES.down('md')]: {
            display: 'flex',
            backgroundColor: '#237CB1'
        },
        alignItems: 'center',
        justifyContent: 'flex-end',
        color: '#FCFCFD'
    }
}
