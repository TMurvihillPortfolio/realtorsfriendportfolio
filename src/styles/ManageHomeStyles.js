const styles = {
    "[body]": {
        margin: 0
    },
    root: {
        minHeight: '100vh',
        minWidth: '100vw',
        textAlign: 'center',
        backgroundColor: '#241F4D',
        paddingBottom: '25px'
    },
    pageHeading: {
        marginTop: '50px',
        textAlign: 'center',
        marginBottom: '15px',
        color: '#FCFCFD',
        ["& h4"]: {
            color: '#D0C9DD'
        }
    },
    imageGallery: {
        display: 'flex',
        width: '100%',
        height: '350px',
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
        color: '#D0C9DD'
    },
    select: {
    }
}
export default styles;