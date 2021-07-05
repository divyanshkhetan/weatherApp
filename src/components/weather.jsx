import {Box, makeStyles} from '@material-ui/core'
import logo from '../img/bg.jpg'
import Form from './form'

const useStyles = makeStyles({
    component: {
        height: '95vh',
        display: 'flex',
        alignItems: 'center',
        width: '65%',
        margin: '0 auto',
    },
    leftContainer: {
        height: '80%',
        width: '30%',
        backgroundImage: `url(${logo})`,
        backgroundSize: 'cover',
        borderRadius: '20px 0 0 20px'
    },
    rightContainer: {
        background: 'linear-gradient(to right, #e74c3c, #e67e22)',
        height: '80%',
        width: '70%'
    }
})


const Weather = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Box className={classes.leftContainer}></Box>
            <Box className={classes.rightContainer}>
                <Form />
            </Box>
        </Box>     
    )
}


export default Weather;