import './App.css';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import { Router } from './routes/router';
import { ThemeProvider } from './theme';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
