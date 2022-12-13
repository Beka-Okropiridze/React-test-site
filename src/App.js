import './App.css';

import HelloWorld from './HelloWorld';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <HelloWorld title="Test message" subTitle="subtitle" />
      <HelloWorld title="Test message 2" subTitle="subtitle" />
      <Welcome user="James Bond" />
    </div>
  );
}

export default App;
