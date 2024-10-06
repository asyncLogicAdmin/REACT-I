import styles from './styles/Auth.module.scss';
import logoAuth from './assets/logo.png';

const App = () => {







  return (
    <div className={styles.ctnGeneral}>
      
      <div className={styles.ctnAuth}>

          <div style={{textAlign: 'center'}}>
            <img 
              src={logoAuth}
              width={145}
            />
          </div>

          <div className={styles.ctnSwitchAuth}>
            <div style={{flex: 1}}>
              Login
            </div>
            <div style={{flex: 1}}>
              Sign Up
            </div>
          </div>

          <div>
            Form Login
          </div>

      </div>

    </div>
  )
}

export default App;
