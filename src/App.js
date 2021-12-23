import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Body from './Components/Body/Body';
import CartBody from './Components/CartBody/CartBody';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Body />
          </Route>
          <Route exact path='/cart'>
            <CartBody />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;