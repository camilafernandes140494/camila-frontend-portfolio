import Header from "./pages/components/Header"
import { Home } from "./pages/Home/Home"
import { CustomThemeProvider } from "./pages/Theme/ThemeContext"

function App() {

  return (
    <>
      <CustomThemeProvider>
        <Header />
        <Home />
      </CustomThemeProvider>
    </>
  )
}

export default App
