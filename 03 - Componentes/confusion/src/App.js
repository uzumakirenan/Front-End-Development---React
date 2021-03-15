import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

import MenuC from './components/MenuCompClass';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorant Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <MenuC />
    </div>
  );
}

export default App;
