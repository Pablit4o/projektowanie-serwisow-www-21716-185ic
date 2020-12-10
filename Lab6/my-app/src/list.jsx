import {ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gridien from './grid';
import { useSelector } from 'react-redux';
import App from './App';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

export default function List(props){
    const list = useSelector(state=>state.list);
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Gridien xs={4}>
                    <ListGroup as="ul">
                            <ListGroup.Item as="li" active>
                                {props.name}
                            </ListGroup.Item>
                            {
                                list.map(lists=>(
                                    <ListGroup.Item key={lists.id} as="li">
                                        {lists.name}
                                    </ListGroup.Item>
                                ))
                            }
                    </ListGroup>
                </Gridien>
                <Gridien xs={2}>
                    <App />
                </Gridien>
            </Grid>
      </div> 
    )
}
