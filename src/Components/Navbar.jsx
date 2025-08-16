const Navbar = () => {
    return ( 
        <div>
             
  <div class="content" id="content">
    {/* <!-- Top Navbar --> */}
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-4">
      <div class="container-fluid">
        {/* <!-- Sidebar Toggle Button (always visible) --> */}
        <button class="btn btn-outline-secondary me-3" id="sidebarToggle">
          ☰
        </button>
        <a class="navbar-brand" href="#">SkyCast</a>
        {/* <!-- <div class="ms-auto">
          <span class="navbar-text">Hello, User</span>
        </div> --> */}
        <div class="ms-auto dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>  </div>
      </div>
    </nav>

    {/* <!-- Weather Search Area --> */}
    <div class="container">
      <h2>Check the Weather</h2>
      <form class="d-flex mb-3">
        <input type="text" class="form-control me-2" placeholder="Enter city..." />
        <button class="btn btn-primary">Search</button>
      </form>
      <div class="card">
        <div class="card-body">
          <h5>Weather Results</h5>
          <p>Weather info will appear here...</p>
        </div>
      </div>
    </div>
  </div>
        </div>
     );
}
 
export default Navbar;