import { Link } from "react-router-dom"
import "./menu.scss"
import {menu} from "../../data"

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) =>{
        return(
          <div className="item" key={item.id}>
            {/* <span className="title">{item.title.toUpperCase()}</span> */}
            {item.listItems.map((item) =>{
              return(
                <Link to={item.url} className="listItem" key={item.id}>
                  <img src={item.icon} alt=""/>
                  <span className="listItemTitle">{item.title}</span>
                </Link>
              )
            })}
          </div>
         )
      })}
    </div>
  )
}

export default Menu


"I am leaning Web Dev"