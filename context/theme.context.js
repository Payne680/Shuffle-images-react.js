
export const themeContext = React.createContext()

export const ThemeProvider = themeContext.Provider;

export const themeObject = {
    light: {
        color: "orange",
        backgroundColor: "black"
    },
    dark: {
        color: "black",
        backgroundColor: "white"
    }
}

export const useTheme = () => {
    return React.useContext(themeContext)
}
