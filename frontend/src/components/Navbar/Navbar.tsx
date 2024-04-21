import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="nav-logo-title">
          <img className="nav-logo" src="/images/fixit-logo.png" alt="fixit-logo" />
          <h1>FixIt</h1>
        </div>
        <div className="nav-search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="nav-icons">
          <img className="nav-logo" src="/images/fixit-logo.png" alt="fixit-logo" />
          <img className="nav-logo" src="/images/fixit-logo.png" alt="fixit-logo" />
          <img className="nav-logo" src="/images/fixit-logo.png" alt="fixit-logo" />
          <img className="nav-logo" src="/images/fixit-logo.png" alt="fixit-logo" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
