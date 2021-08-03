import '@fontsource/roboto'
// import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
// import Paper from '@material-ui/core/Paper'
import { Typography, Grid, Button } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#042A2B',
    alignItems: 'center'
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#66CED6',
    margin: ' 15px 10px'
  },
  text: {
    color: '#FCF7F8',
  },
  textArea: {
    margin: '5% auto',
    textAlign: 'left',
    padding: '120px',
  },
  imageArea: {
    position: 'relative'
  },
  mainImage: {
    borderRadius: '10px',
    position: 'absolute',
    top: '20%',
    left: '60%'
  }
}));

const About = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <Grid className={classes.grid} spacing={3}>
          <Grid item xs={12} md={6} className={classes.textArea}>
            <Typography
              variant='h2'
              marginBottom='20px'
              className={classes.text}
            >
              Hi, I'm Jacob. I'm a...
            </Typography>
            <Typography variant='h4' className={classes.text}>
              Fullstack developer in training with a background in SaaS sales. I'm building out my portfolio as I finish up UCI's coding bootcamp so hang tight for more updates.            
            </Typography>
            <Button className={classes.button}>
              Check out my projects
            </Button>
            <Button className={classes.button}>
              Check out my github
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src='https://i.postimg.cc/Njfzsfyv/00100lr-PORTRAIT-00100-BURST20200828161547179-COVER.jpg' alt='Jacob Zavita' className={classes.mainImage} />
          </Grid>
          
          {/* <Paper elevation={3} style={{ padding: '15px', display: 'flex' }}> */}
          {/* </Paper> */}
        </Grid>
      </div>
    </>
  )
}

export default About
