import { Box, TextField, Button, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { getData } from "../services/api";
import { useState } from "react";
import Information from "./information";


const useStyles = makeStyles({
    input: {
        color: '#fff',
        marginRight: '15px'
    },
    component: {
        padding: '10px'
    },
    button: {
        width: 150,
        height: 40,
        background: '#e67e22',
        color: '#fff',
        marginTop: '5px'
    }
})

const Form = () => {

    const classes = useStyles();
    const [data, getWeatherData] = useState()
    const [city, setCity] = useState()
    const [country, setCountry] = useState()
    const [click, handleClick] = useState('false')


    useEffect(() => {
        const getWeather = async() =>{
            city && await getData(city, country).then((response) => {
                getWeatherData(response.data);
                console.log(response.data);
            })
        }
        getWeather();
        handleClick(false);
    },[click])

    const handleCityChange = (value) =>{
        setCity(value);
    }

    const handleCountryChange = (value) =>{
        setCountry(value);
    }

    return (
        <>
            <Box className={classes.component}>
                <TextField 
                    inputProps={{className:classes.input}}
                    onChange={(e) =>handleCityChange(e.target.value)}
                    label='City'
                    className= {classes.input}
                />
                <TextField 
                    inputProps={{className:classes.input}}
                    onChange={(e) => handleCountryChange(e.target.value)}
                    label='Country'
                    className= {classes.input}
                />
                <Button onClick={() => handleClick()} className={classes.button} 
                variant="contained">
                    Get Weather
                </Button>
            </Box>
            <Information data={data} />
        </>
    );
}

export default Form;