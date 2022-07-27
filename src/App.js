
import './App.css';
import User from './User';
import HomeContainer from './container/HomeContainer';
import HeaderContainer from './container/HeaderContainer';

function App() {
  return (
    <div className="App">
      {/* <h1>React Router</h1>
      <User data={{name: 'parth dudhatra', age:20}}/> */}
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
