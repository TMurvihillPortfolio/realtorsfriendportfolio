import { _MEDIA_QUERIES } from '../assets/constants';

const styles = {
    footer: {
        marginTop: '30px',
        display: 'block',
        padding: '20px'
    },
    line1: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    logo: {
        height: '30px',
        borderRadius: '3px'
    },
    menuContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 'fit-content',       
        '& a': {
            color: 'whitesmoke',
            marginLeft: '20px',
            textDecoration: 'none',
            borderBottom: '1px solid transparent',
            transition: 'all .5s',
            padding: '5px',
            [_MEDIA_QUERIES.down('sm')]: {
                fontSize: '12px'
            }
        },
        "& a:hover": {
            borderBottom: '1px solid whitesmoke'
        }       
    },
    social: {
        "& p": {
            color: 'whitesmoke',
            [_MEDIA_QUERIES.down('sm')]: {
                fontSize: '12px'
            }
        },
        "& a": {
            color: 'whitesmoke',
            textDecoration: 'none',
            borderBottom: '1px solid transparent',
            transition: 'all .5s',
            padding: '5px',
            "&:hover": {
                borderBottom: '1px solid whitesmoke'
            }
        }           
    },
    copyRight: {
        color: 'whitesmoke',
        marginBottom: '12px',
        ["& p"]: {
            color: 'whitesmoke',
            [_MEDIA_QUERIES.down('sm')]: {
                fontSize: '10px'
            }
        }
    }
}
export default styles;