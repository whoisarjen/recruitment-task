import { createTheme, ThemeProvider as ThemeProviderMUI } from "@mui/material/styles";

const MUI = ({ children }: { children: any }) => {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#2f3b52',
            },
        },
        typography: {
            fontFamily: "Quicksand, sans-serif",
        },
    });

    return (
        <ThemeProviderMUI theme={theme}>
            {children}
        </ThemeProviderMUI>
    )
}

export default MUI;