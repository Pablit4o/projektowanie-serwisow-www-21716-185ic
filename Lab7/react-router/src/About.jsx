import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ListItemText from '@material-ui/core/ListItemText';
import picture from './img/kot_pilot.png'

const useStyles = makeStyles({
  card: {
    maxWidth: 275,
  },
});

export default function ProfileCard(){
  const [likes, setLikes] = useState(0);
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
          <CardMedia component="img" image={ picture} />
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              Kot Pilot
          </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={()=>setLikes(likes + 1)}>
              <FavoriteIcon />
              <ListItemText primary={likes} />
            </IconButton>
          </CardActions>
      </CardActionArea>
    </Card>
  );

}