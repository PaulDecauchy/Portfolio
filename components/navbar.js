// import CSS from 'csstype';

import Link from "next/link";
import DownloadCV from "./downloadcv";


function Navbar() {

  // let h1Styles: CSS.Properties = {
  //     backgroundColor: 'rgba(255, 255, 255, 0.85)',

  //     padding: '100rem',
  //     fontFamily: 'sans-serif',
  //     fontSize: '1.5rem',
  //     boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
  //   };
  return (
    <div className="navbar bg-base-100 bg-opacity-90 sticky z-10 top-0 rounded-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="#homepage">Homepage</Link></li>
            <li><Link href="#projets">Projets</Link></li>
            <li><Link href="#contact">Me contacter</Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-primary text-xl">Portfolio</a>
      </div>
      <div className="navbar-end">
        <DownloadCV />
      </div>
    </div>
  )
}

export default Navbar;