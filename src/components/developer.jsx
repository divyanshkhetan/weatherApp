import { Box, makeStyles, Typography } from "@material-ui/core"
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    dev:{
        marginBottom: 10,
        display:'flex',
        width: '100vw',
        justifyContent: 'center',
        fontSize: '20px',
        color: 'grey'
    }
});

const Developer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.dev}>developed by - <Link href="https://github.com/divyanshkhetan" target="_blank">
             divyanshkhetan
      </Link> </Box>
    )
}

export default Developer