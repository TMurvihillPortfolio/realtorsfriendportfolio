const styles = {
    "[body]": {
        margin: 0
    },
    root: {
        minHeight: '100vh',
        minWidth: '100vw',
        textAlign: 'center',
        backgroundColor: '#333',
        paddingBottom: '25px'
    },
    pageHeading: {
        backgroundColor: 'lightsalmon',
        width: 'fit-content',
        margin: 'auto',
        marginBottom: '15px',
        padding: '7px 10px',
        borderRadius: '7px'

    },
    imageGallery: {
        display: 'flex',
        width: '100%',
        height: '200px',
        margin: '50px 15px',
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
    homeImage: {

    },
    roomImage: {
        
    },
    caption: {
        
    }
}
export default styles;