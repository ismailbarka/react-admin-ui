import "./single.scss"
import { Tooltip } from "@mui/material"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"


type Props ={
  id:number;
  img?:string;
  title:string;
  info:object;
  chart?:{
    dataKeys:{name:string; color:string}[]
    data:object[];
  }
  activities?:{time:string; text:String}[]

}

const Single = (props:Props) => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
            <div className="topInfo">
                <img src={props.img} alt=""></img>
                <h1>{props.title}</h1>
                <button>Update</button>
            </div>
            <div className="details">
              {Object.entries(props.info).map((item) =>{
                return <div className="item" key={item[0]}>
                          <span className="itemTitle">{item[0]}</span>
                          <span className="itemvalue">{item[1]}</span>
                        </div>
              })}
            </div>
        </div>
        <hr/>
        <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
            width={500}
            height={300}
            data={props.chart?.data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {props.chart?.dataKeys.map(datakey =>(
              <Line type="monotone" dataKey={datakey.name} stroke={datakey.color} />
            ))}
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
        </div>
      </div>
      <div className="activites">
        <h2>
            {props.activities && 
            <ul>
                {props.activities.map(activitie =>
                  <li>
                    <div>
                      <p>{activitie.text}</p>
                      <time>{activitie.time}</time>
                    </div>
                  </li>
                )}
            </ul>
            }
        </h2>
      </div>
    </div>
  )
}

export default Single
