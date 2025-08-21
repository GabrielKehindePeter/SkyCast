const Navbar = () => {
    return ( 
        <div>
             
  <div >
    {/* <!-- Top Navbar --> */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-4">
      <div className="container-fluid">
        {/* <!-- Sidebar Toggle Button (always visible) --> */}
        <button className="btn btn-outline-secondary me-3" id="sidebarToggle">
          ☰
        </button>
        <a className="navbar-brand" href="#">SkyCast</a>
        {/* <!-- <div className="ms-auto">
          <span className="navbar-text">Hello, User</span>
        </div> --> */}
        <div className="ms-auto dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gabriel
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>  </div>
      </div>
    </nav>

    {/* <!-- Weather Search Area --> */}
   
    </div>
  </div>
      
     );
}
 
export default Navbar;