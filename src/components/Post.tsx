import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, makeStyles, Typography } from '@material-ui/core'



const useStyle = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(5)
    }, 
    media: {
        height: "150px",
        [theme.breakpoints.down("sm")]: {
            height: "100px",
        }
    }
}))
const Post =()=>{
    const classes = useStyle();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media}
                image=""
                title="post"
                />

            <CardContent>
                <Typography gutterBottom variant="h4">Post</Typography>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum deleniti nostrum beatae explicabo facere rerum suscipit sed dignissimos nesciunt rem, libero sequi minus fugit exercitationem possimus distinctio expedita quae obcaecati magnam tempore reiciendis officiis voluptas laudantium. Nemo sapiente, asperiores repellat natus dolor quas! Odit dolor rem modi veritatis nemo deserunt.
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="secondary">Like</Button>
            </CardActions>
        </Card>
    )
}

export default Post
