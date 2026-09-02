import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

// let buffer = Buffer.alloc(0)
// const writable = new Writable({
//   write(chunk, encoding, callback) {
//     buffer = Buffer.concat([buffer, chunk]);
//     callback();
//   }
// });
// writeableSa
// writable.on('finish', () => {
//   console.log('Final buffer:', buffer);
// }