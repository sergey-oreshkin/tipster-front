import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Notification from './components/Notification/Notification';

function App() {
  return (
    <div className="App">
      <Header />
      <Notification />
      <Main />
    </div>
  );
}

export default App;
