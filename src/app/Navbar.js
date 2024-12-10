import React from 'react'


export default function Navbar() {
  return (
    <div className='Navbar'>
        <div className='mini-nav'></div>
        <div className='logo'>
        {/* <FontAwesomeIcon icon="fa-brands fa-react" /> */}
          <h3 className='logoName'>Mama Mboga</h3>
        </div>
        <div className='search'>
          <p>Search products,stores,recipes</p>
        </div>
        <div className='location'>
          <p>curent location</p>
        </div>
        <div className='L-Btn'>
          <button>Login</button>
        </div>
        <div className='cart'>
          <p>Count</p>
        </div>
    </div>
  )
}
