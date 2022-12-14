import './App.css';

import HelloWorld from './HelloWorld';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <HelloWorld title="Test message" subTitle="subtitle" age={30} />
      <HelloWorld title="Test message 2" subTitle="subtitle" age={50} />
      <Welcome user="James Bond" />
    </div>
  );
}

export default App;
