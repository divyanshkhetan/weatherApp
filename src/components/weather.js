import { Box } from '@material-ui/core';
import Form from './form';
import styles from './weather.module.css';

const Weather = () => {
    return (
        <Box className={styles.component}>
            <Box className={styles.leftContainer}></Box>
            <Box className={styles.rightContainer}>
                <Form />
            </Box>
        </Box>
    )
}


export default Weather;