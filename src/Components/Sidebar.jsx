const Sidebar = () => {
    return ( 
        <div>
         
<div class="bg-dark text-white sidebar" id="sidebar">
  <div class="d-flex justify-content-between align-items-center p-3 border-bottom">
    <h5 class="mb-0">SkyCast</h5>
    {/*  Dismiss button (visible only on mobile)  */}
    <button class="btn btn-sm btn-outline-light d-lg-none" id="dismissSidebar">&times;</button>
  </div>
  <ul class="nav flex-column p-3">
    <li class="nav-item">
      <a href="#" class="nav-link text-white">Home</a>
    </li>

    {/*  Weather dropdown  */}
    <li class="nav-item">
      <a class="nav-link text-white d-flex justify-content-between align-items-center" data-bs-toggle="collapse"
        href="#weatherMenu" role="button" aria-expanded="false" aria-controls="weatherMenu">
        Weather <span class="caret">▼</span>
      </a>
      <div class="collapse" id="weatherMenu">
        <ul class="nav flex-column ms-3">
          <li><a class="nav-link text-light" href="#">Today</a></li>
          <li><a class="nav-link text-light" href="#">Forecast</a></li>
          <li><a class="nav-link text-light" href="#">Maps</a></li>
        </ul>
      </div>
    </li>

    {/*  Settings dropdown  */}
    <li class="nav-item">
      <a class="nav-link text-white d-flex justify-content-between align-items-center" data-bs-toggle="collapse"
        href="#settingsMenu" role="button" aria-expanded="false" aria-controls="settingsMenu">
        Settings <span class="caret">▼</span>
      </a>
      <div class="collapse" id="settingsMenu">
        <ul class="nav flex-column ms-3">
          <li><a class="nav-link text-light" href="#">Profile</a></li>
          <li><a class="nav-link text-light" href="#">Security</a></li>
          <li><a class="nav-link text-light" href="#">Preferences</a></li>
        </ul>
      </div>
    </li>
  </ul>
</div>
        </div>
     );
}
 
export default Sidebar;