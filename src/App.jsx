import React from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, ButtonGroup } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import useStyles from './styles';


const cards = [1,2,3,4,5,6,7,8,9]

const App = () => {
    const classes = useStyles();
    return (
    <>
    <CssBaseline />
    <AppBar position="relative">
        <Toolbar>
            <PhotoCamera className={classes.icon}/>
            <Typography variant="h6">
                Photo Album
            </Typography>
        </Toolbar>


    </AppBar>
    <main>
        <div className={classes.container}>
            <Container maxWidth="sm" style={{marginTop: '100px'}}>
                <Typography variant='h2' align="center" color="textPrimary" gutterBottom>
                    Photo Album
                </Typography>
                <Typography variant='h5' align='center' color='textSecondary' paragraph>
                    Hello everyone this is a photo
                </Typography>
                <div className={classes.button}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <Button variant='contained' color='primary'>
                                See my photos
                            </Button>
                            <Button variant='outlined' color='primary'>
                                Secondary action
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
            <Grid container spacing={4}>
                {cards.map((card)=>(
                <Grid item key={card} xs={10} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random "/>
                        <CardContent className={classes.CardContent}>
                            <Typography>
                               Heading 
                            </Typography>
                            <Typography>
                                This is a media card. You can use this section to describe this content
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">View</Button>
                            <Button size="small" color="primary">Edit</Button>
                        </CardActions>
                    </Card>
                </Grid>

                ))}
            </Grid>
        </Container>
        


    </main>
    <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
            Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
            Ith I Don't know
        </Typography>
    </footer>


    </>



  );
}

export default App