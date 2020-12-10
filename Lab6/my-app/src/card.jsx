import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ListItemText from '@material-ui/core/ListItemText';

export default class ProfileCard extends React.Component {
  constructor(){
    super()

    this.state = {
      likes: 0
    }
  }

  changeLikes(){
    this.setState({
      likes: this.state.likes + 1
    })
  }
  render() {
    return (
        <Card>
          <CardActionArea>
              <CardMedia
              component="img"
              image={this.props.img}
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                  Kot Pilot
              </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={()=>this.changeLikes()}>
                  <FavoriteIcon />
                  <ListItemText primary={this.state.likes} />
                </IconButton>
              </CardActions>
          </CardActionArea>
        </Card>
    );
  }
}
