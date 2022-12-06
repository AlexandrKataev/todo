import styles from './App.module.scss';
import { Header } from 'layouts/Header';
import { Routing } from './Routing';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routing />
    </div>
  );
}

export default App;
