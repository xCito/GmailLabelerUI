import './App.css';
import './styles/header.css';
import './styles/pane.css';
import './styles/email.css';
import './styles/category.css';
import './styles/score.css';
import './styles/splitpane.css';
import Header from './components/Header';
import Page from './components/Page';

function App() {
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  );
}

export default App;
