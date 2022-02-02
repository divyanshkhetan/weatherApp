import { Box, TextField, Button } from "@material-ui/core";
import { useEffect } from "react";
import { getData } from "../services/api";
import { useState } from "react";
import Information from "./information";
import styles from './form.module.css';

const Form = () => {

    const [data, getWeatherData] = useState()
    const [city, setCity] = useState()
    const [country, setCountry] = useState()
    const [click, handleClick] = useState('false')


    useEffect(() => {
        const getWeather = async () => {
            city && await getData(city, country).then((response) => {
                getWeatherData(response.data);
                console.log(response.data);
            })
        }
        getWeather();
        handleClick(false);
    }, [click])

    const handleCityChange = (value) => {
        setCity(value);
    }

    const handleCountryChange = (value) => {
        setCountry(value);
    }

    return (
        <>
            <Box className={styles.component}>
                <TextField
                    inputProps={{ className: styles.input }}
                    onChange={(e) => handleCityChange(e.target.value)}
                    label='City'
                    className={styles.input}
                    value={city}
                />
                <TextField
                    inputProps={{ className: styles.input }}
                    onChange={(e) => handleCountryChange(e.target.value)}
                    label='Country'
                    className={styles.input}
                    value={country}
                />

                <span className={styles.gap}></span>

                <Button onClick={() => handleClick()} className={styles.button}
                    variant="contained">
                    Get Weather
                </Button>
            </Box>
            <Information data={data} />
        </>
    );
}

export default Form;