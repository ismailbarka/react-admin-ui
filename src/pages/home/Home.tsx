import BarChartBox from "../../Components/barChartBox/BarChartBox"
import BigChartBox from "../../Components/bigChartBox/BigChartBox"
import ChartBox from "../../Components/chartBox/ChartBox"
import PieChartBox from "../../Components/pieChartBox/PieChartBox"
import TopBox from "../../Components/topBox/TopBox"
import { barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data"
import "./home.scss"
const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox/>
      </div>
      <div className="box box2"><ChartBox {...chartBoxUser}/></div>
      <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
      <div className="box box4"><PieChartBox/></div>
      <div className="box box5"><ChartBox {...chartBoxConversion}/></div>
      <div className="box box6"><ChartBox {...chartBoxRevenue}/></div>
      <div className="box box7"><BigChartBox/></div>
      <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
      <div className="box box9"><BarChartBox {...chartBoxRevenue}/></div>
    </div>
  )
}

export default Home
 