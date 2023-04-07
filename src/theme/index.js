import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';

const themeOptions = {
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderColor: 'lightgrey',
            height: '48px',
            '&:hover': {
              borderColor: 'lightgrey'
            }
          }
        }
      },
      MuiListItem: {
        styleOverrides: {
            root: {
                padding:0
            }
        }
      },
      MuiListItemButton: {
        styleOverrides: {
            root: {
                borderRadius: '6px',
                '&.Mui-selected': {
                    backgroundColor: 'rgba(145, 158, 171, 0.16)',
                    '&:hover': {
                        backgroundColor: 'rgba(145, 158, 171, 0.16)'
                    }
                },
                '&:hover': {
                    backgroundColor: 'rgba(145, 158, 171, 0.08)'
                }
            }
        }
      },
      MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: '6px'
            }
        }
      }
    }
  };

const theme = createTheme(themeOptions);

export const ThemeProvider = ({children}) => {
    return(
        <MUIThemeProvider theme={theme}>
            {children}
        </MUIThemeProvider>
    )
}