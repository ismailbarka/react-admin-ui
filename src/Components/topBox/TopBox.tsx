import "./topBox.scss"
import { topDealUsers } from "../../data"

const TopBox = () => {
  return (
    <div className="topBox">
        <h1>Deal</h1>
        <div className="list">
        {
            topDealUsers.map((user) =>{
                return(
                    <div className="listItem" key={user.id}>
                        <div className="user">
                            <img src={user.img}/>
                            <div className="userTexts">
                                <span className="username">{user.username}</span>
                                <span className="email">{user.email}</span>
                            </div>
                        </div>
                        <span className="amount">${user.amount}</span>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default TopBox
