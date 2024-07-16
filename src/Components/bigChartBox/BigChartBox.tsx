import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import "./bigChartbox.scss"

const data = [
    {
      name: 'Page A',
      electronics: 4000,
      clothes: 2400,
      books: 2400,
    },
    {
      name: 'Page B',
      electronics: 3000,
      clothes: 1398,
      books: 2210,
    },
    {
      name: 'Page C',
      electronics: 2000,
      clothes: 9800,
      books: 2290,
    },
    {
      name: 'Page D',
      electronics: 2780,
      clothes: 3908,
      books: 2000,
    },
    {
      name: 'Page E',
      electronics: 1890,
      clothes: 4800,
      books: 2181,
    },
    {
      name: 'Page F',
      electronics: 2390,
      clothes: 3800,
      books: 2500,
    },
    {
      name: 'Page G',
      electronics: 3490,
      clothes: 4300,
      books: 2100,
    },
  ];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
        <h1>Revenue Analytics</h1>
        <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="electronics" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="clothes" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="books" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BigChartBox
