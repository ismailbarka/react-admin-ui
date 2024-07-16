import "./navBar.scss"

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="logo">
        <img src="logo.svg" alt=""/>
        <span>TITle</span>
      </div>
      <div className="icons">
        <img src="/search.svg" className="icon" />
        <img src="/app.svg" className="icon" />
        <img src="/expand.svg" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" className="icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img  src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
          <span>ismail barka</span>
        </div>
        <img src="/settings.svg" className="icon" />
      </div>
    </div>
  )
}

export default NavBar
