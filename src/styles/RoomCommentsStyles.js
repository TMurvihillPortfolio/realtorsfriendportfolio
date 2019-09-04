import { _MEDIA_QUERIES } from '../assets/constants';

const styles = {
    root: {
        display: 'flex',
        [_MEDIA_QUERIES.down('xs')]: {
            display: 'block'
        }, 
        justifyContent: 'space-between',
        marginBottom: '35px'
    },
    comments: {
        width: '100%',
        color: '#D0C9DD',
        
        "&>label, &>input": {
            display: 'block'
        },
        "&>textarea": {
            marginTop: '5px',
            width: '90%'
        }      
    }
};

export default styles;