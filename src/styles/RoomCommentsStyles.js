const styles = {
    root: {
        display: 'flex',
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