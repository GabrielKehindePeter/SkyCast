const Sidebar = () => {
    return ( 
        <div>
         
<div className="bg-dark text-white sidebar" id="sidebar">
  <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
    <h5 className="mb-0">SkyCast</h5>
    {/*  Dismiss button (visible only on mobile)  */}
    <button className="btn btn-sm btn-outline-light d-lg-none" id="dismissSidebar">&times;</button>
  </div>
  <ul className="nav flex-column p-3">
    <li className="nav-item">
      <a href="/dashboard" className="nav-link text-white">Home</a>
    </li>

    {/*  Weather dropdown  */}
    <li className="nav-item">
      <a className="nav-link text-white d-flex justify-content-between align-items-center" data-bs-toggle="collapse"
        href="#weatherMenu" role="button" aria-expanded="false" aria-controls="weatherMenu">
        Weather <span className="caret">▼</span>
      </a>
      <div className="collapse" id="weatherMenu">
        <ul className="nav flex-column ms-3">
          <li><a className="nav-link text-light" href="#">Today</a></li>
          <li><a className="nav-link text-light" href="#">Forecast</a></li>
          <li><a className="nav-link text-light" href="#">Maps</a></li>
        </ul>
      </div>
    </li>

    {/*  Settings dropdown  */}
    <li className="nav-item">
      <a className="nav-link text-white d-flex justify-content-between align-items-center" data-bs-toggle="collapse"
        href="#settingsMenu" role="button" aria-expanded="false" aria-controls="settingsMenu">
        Settings <span className="caret">▼</span>
      </a>
      <div className="collapse" id="settingsMenu">
        <ul className="nav flex-column ms-3">
          <li><a className="nav-link text-light" href="/profile">Profile</a></li>
          <li><a className="nav-link text-light" href="#">Security</a></li>
          <li><a className="nav-link text-light" href="#">Preferences</a></li>
        </ul>
      </div>
    </li>
    <li className="nav-item">
      <a href="/logout" className="nav-link text-danger">Logout</a>
    </li>
  </ul>
</div>
        </div>
     );
}
 
export default Sidebar;