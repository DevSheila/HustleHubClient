import Navbar from './Navbar'; 
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';


import Otp from './otp';

function App() {
  return (
<Router>
 <div className="App">
  <Navbar />
  <div className="content">
    <Switch>
<Route exact path="/">
  <Home />
</Route>
<Route path="/login">
  <Login/>
</Route>



<Route exact path="/otp">
  <Otp />
</Route>

    </Switch>
  </div>
 </div>
 </Router>
  );
}
  
export default App;