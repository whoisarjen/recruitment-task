import { createTheme, ThemeProvider as ThemeProviderMUI } from "@mui/material/styles";

const MUI = ({ children }: { children: any }) => {

    const theme = createTheme({
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