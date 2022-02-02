import { Box } from "@material-ui/core"
import Link from '@material-ui/core/Link';
import styles from './developer.module.css';


const Developer = () => {
    return (
        <Box className={styles.dev}>developed by - <Link href="https://github.com/divyanshkhetan" target="_blank">
            divyanshkhetan
        </Link> </Box>
    )
}

export default Developer;