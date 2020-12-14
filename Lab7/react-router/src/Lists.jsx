import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { List,  ListItem, Divider, ListItemText } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));

export default function Lists(props){
    const list = useSelector(state => state.list);
    const classes = useStyles();
    return(
    <List className={classes.root}>
        <>
        <ListItem alignItems="flex-start" key={props.id}>
            <ListItemText 
                primary={props.name}
                secondary={
                    <React.Fragment>
                        {"Opis produktu"}
                    </React.Fragment>
                }
            />
        </ListItem>
        <Divider component="li" />
        </>
        {
            list.map(lists=>(
                <>
                <ListItem alignItems="flex-start" key={lists.id}>
                    <ListItemText 
                        primary={lists.name}
                        secondary={
                            <React.Fragment>
                                {lists.description}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider component="li" />
                </>
            ))
        }
    </List>
    );
}
