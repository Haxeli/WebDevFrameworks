import './App.css';
import HeaderBar from './components/HeaderBar';
import UnderBar from './components/UnderBar';
import TrendingBars from './components/TrendingBars';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <HeaderBar />
      <UnderBar />
      <TrendingBars />
      <Feed />
      <Sidebar />
    </div>
  );
}

export default App;
