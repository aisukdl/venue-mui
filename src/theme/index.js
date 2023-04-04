import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';

const themeOptions = {
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
                borderColor: 'lightgrey',
                '&:hover': {
                    borderColor: 'lightgrey'
                }
            },
          },
        },
    }    
}

const theme = createTheme(themeOptions);

export const ThemeProvider = ({children}) => {
    return(
        <MUIThemeProvider theme={theme}>
            {children}
        </MUIThemeProvider>
    )
}