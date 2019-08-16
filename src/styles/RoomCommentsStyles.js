const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    comments: {
        width: '100%',
        "&>label, &>input": {
            display: 'block'
        },
        "&>textarea": {
            width: '90%'
        }      
    }
};

export default styles;