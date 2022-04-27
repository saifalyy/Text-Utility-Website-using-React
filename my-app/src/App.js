import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
    <Navbar brandName="TextUtils"/>
    <Textform prompt="Enter text to analyze: "/>
    </>
      );
}

export default App;
