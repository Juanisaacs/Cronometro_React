import DigitalClock from './components/DigitalClock/DigitalClock'
import './App.css';
import Countdown from './components/Countdown/Countdown';
import Stopwatch from './components/Stopwatch/Stopwatch';

function App() {
  return (
    <div className="App">
    <DigitalClock/>
    <Countdown/>
    <Stopwatch/>
    </div>
  );
}

export default App;
