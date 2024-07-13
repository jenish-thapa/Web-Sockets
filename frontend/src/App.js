import Chatbox from './components/Chatbox/Chatbox';
import io from "socket.io-client";
import './App.css';

const socket = io("http://localhost:8080");

function App() {
  return (
    <div className="App">
      <Chatbox />
    </div>
  );
}

export default App;
