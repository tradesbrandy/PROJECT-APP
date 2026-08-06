import {createTheme}from"@mui/material/styles";
const theme = createTheme({
    typography:{
        fontFamily:"Arial,Hlvetica,sans-serif",
    },
    palette:{
        background:{
            default:"#ffffff",
        },
        text:{
            primary:"#111111",
        },
        shape:{
            borderRadius:10,
        },
    },
});

export default theme;
