import logo from './logo.svg';
import './App.css';

function LoginButton(){
  return(
    <button>로그인</button>
  );
}
function LogoutButton(){
  return(
    <button>로그아웃</button>
  );
}
function UserButton(props){
  if(props.isLoggedIn){
    return <LogoutButton/>;
  }
  return <LoginButton/>;
}

function App() {
  let isLoggedIn = true;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          isLoggedIn ? <LogoutButton/>:<LoginButton/>
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
