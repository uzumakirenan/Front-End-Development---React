import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

import MenuC from './components/MenuCompClass';
import MenuF from './components/MenuComponentFunction';
import MenuSF from './components/MenuCompSharedFunc';
import MenuSC from './components/MenuCompSharedClass';
import { DISHES } from './shared/dishes'


function App(props) {

  

  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorant Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <MenuSF dishes={DISHES} />     

    </div>
  );
}

export default App;
