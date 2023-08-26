import Layout from "./components/Layout";
import Aside from "./components/Aside/Aside";
import './index.css'
function App() {
  return (
    <div className="App">
        <div className='AppFlex'>
            <Aside />
            <Layout/>
        </div>
    </div>
  );
}

export default App;
