import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';
import accounting from 'accounting';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action:{
    marginTop:"1rem",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function Producto() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action = {
          <Typography
          className={classes.action}
          variant = 'h5'
          color = 'textSecondary'
          >
          {accounting.formatMoney(50,"$")}
        
          </Typography>
        }
        title="Ramos"
        subheader="En existencia"
      />
      <CardMedia
        className={classes.media}
        image="https://scontent.fgdl5-4.fna.fbcdn.net/v/t1.6435-9/189449537_485988072854184_2509554958469571620_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeGDVrE9mGQBxZylzxsvG3VpJtJl5af6UjAm0mXlp_pSMMc6mtnsvCA6TvkOvfXHoYcPcEiccEM7ENvBl1Qf513z&_nc_ohc=-NJr_YykvTQAX85gEe1&_nc_ht=scontent.fgdl5-4.fna&oh=7ae1738fef845a599636d514f2a78eff&oe=615E5738" 
        title="aniversario"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Arreglo Floral
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart" >
        <AddShoppingCart fontSize ='large'/>
        </IconButton>
        {Array(4)
        .fill()
        .map((_,i)=>(
          <p>&#11088;</p>
        ))}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Un Bonito Arreglo Floral</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
