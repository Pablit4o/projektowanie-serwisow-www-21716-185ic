import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
  
  export default function Gridien(props){  
    const classes = useStyles();
    return(
          <Grid item xs={props.xs}>
               <Paper className={classes.paper}>
                 {props.children}
               </Paper>
           </Grid>
      )
  }
  