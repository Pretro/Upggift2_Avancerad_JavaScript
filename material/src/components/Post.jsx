import { makeStyles, Card, CardActionArea, Typography, CardActions, Button, CardMedia, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
 
    card: {
        marginBottom: theme.spacing(5),
      },
   media: {
        height: 250,
        [theme.breakpoints.down("sm")]: {
            height: 150,
        },
    },
}));

const Post = () => {
   const classes = useStyles();
   return (
        <Card className={classes.card}>
       <CardActionArea>
           <CardMedia className={classes.media}
           image="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
           title="My post"/>
       <CardContent>
           <Typography variant="h5">My First Post</Typography>
           <Typography variant="body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Libero excepturi adipisci dolor non sequi optio reiciendis 
            ad accusamus odit ipsum vel itaque necessitatibus at provident 
            eligendi beatae soluta, quibusdam eius!
           </Typography>
       </CardContent>
       </CardActionArea>
       <CardActions>
           <Button size="small" color="primary">Dela</Button>
           <Button size="small" color="primary">Läs mer</Button>
       </CardActions>
    </Card>
    );
};

export default Post;