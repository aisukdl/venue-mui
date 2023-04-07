import './App.css';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import { ThemeProvider } from './theme';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        {/* <LoginPage /> */}
        <MainPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
