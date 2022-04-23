import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Account/Login';
import Body from './Components/Body/Body';
import CartBody from './Components/CartBody/CartBody';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Navbar />
            <Body />
            <Footer />
          </Route>
          <Route exact path='/cart'>
            <Navbar />
            <CartBody />
            <Footer />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;