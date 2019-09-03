import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      color: '#333',
      backgroundColor: 'wheat',
      marginTop: '30px',
      marginBottom: '30px',
      paddingBottom: '30px'
    },
    formControl: {
      margin: theme.spacing(1),
      '& *': {
          color: '#333'
      }
    },
    buttonControl: {
        display: 'flex',
        margin: 'auto',
        marginTop: '10px',
        justifyContent: 'center',
        '& > :first-child': {
            marginRight: '20px'
        }
    }
  }));