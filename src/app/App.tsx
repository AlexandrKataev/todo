import './App.scss';
import { Header } from 'layouts/Header';
import { Routing } from './Routing';

function App() {
  return (
    <div className="app">
      <Header />
      <Routing />
    </div>
  );
}

export default App;
