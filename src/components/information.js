import { Box, Typography } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import OpacityIcon from '@material-ui/icons/Opacity';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import MenuIcon from '@material-ui/icons/Menu';
import CloudIcon from '@material-ui/icons/Cloud';
import styles from './information.module.css';


const Information = ({ data }) => {
    return (
        data ?
            <Box className={styles.component}>
                <Typography className={styles.row}><LocationOnIcon className={styles.icon} />Location: <Box className={styles.spanValue} component='span'>{data.name}, {data.sys.country}</Box></Typography>
                <Typography className={styles.row}><Brightness6Icon className={styles.icon} />Temperature: <Box className={styles.spanValue} component='span'>{data.main.temp}&deg;C (feels like {data.main.feels_like}&deg;C)</Box></Typography>
                <Typography className={styles.row}><OpacityIcon className={styles.icon} />Humidity: <Box className={styles.spanValue} component='span'>{data.main.humidity}%</Box></Typography>
                <Typography className={styles.row}><Brightness5Icon className={styles.icon} />Sunrise: <Box className={styles.spanValue} component='span'>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</Box></Typography>
                <Typography className={styles.row}><Brightness3Icon className={styles.icon} />Sunset: <Box className={styles.spanValue} component='span'>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</Box></Typography>
                <Typography className={styles.row}><MenuIcon className={styles.icon} />Condition: <Box className={styles.spanValue} component='span'>{data.weather[0].main}</Box></Typography>
                <Typography className={styles.row}><CloudIcon className={styles.icon} />Clouds: <Box className={styles.spanValue} component='span'>{data.clouds.all}%</Box></Typography>
            </Box>
            : ''
    );
}

export default Information; 