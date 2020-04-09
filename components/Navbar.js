import React from 'react';
import { useContext } from 'react';
import CartContext from './cartContext';
import Link from 'next/link';

const Navbar = (props) => {
  const { cart } = useContext(CartContext);
  return (
    <nav className="navbar navbar-light bg-light fixed-top">
      <h3><Link href="/">Summit</Link>Chasing</h3>
      <a href="/cart" className="btn btn-outline-primary my-2 my-sm-0">Cart {cart.length}</a>
    </nav>
  );
};
export default Navbar;