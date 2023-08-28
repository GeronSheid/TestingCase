import Layout from "./components/Layout/Layout";
import Aside from "./components/Aside/Aside";
import styles from './index.module.scss'
import UpperMenu from "./components/UpperMenu/UpperMenu";
import ShadeGrade from "./components/ShadeGrade/ShadeGrade";
function App() {
  return (
    <div className={styles.AppContainer}>
        <div>
            <UpperMenu/>
            <div className={styles.AppFlex}>
                <Aside />
                <Layout/>
            </div>
            <ShadeGrade />
        </div>
    </div>
  );
}

export default App;
