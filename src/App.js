import Layout from "./components/Layout";
import Aside from "./components/Aside/Aside";
import './index.css'
import UpperMenu from "./components/UpperMenu/UpperMenu";
function App() {
  return (
    <div className="App">
        <UpperMenu/>
        <div className='AppFlex'>
            <Aside />
            <Layout/>
        </div>
    </div>
  );
}

export default App;
