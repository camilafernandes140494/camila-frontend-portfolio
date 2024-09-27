import { Home } from "./pages/Home/Home";
import { CustomThemeProvider } from "./pages/Theme/ThemeContext";

function App() {
  return (
    <>
      <CustomThemeProvider>
        <Home />
      </CustomThemeProvider>
    </>
  );
}

export default App;
