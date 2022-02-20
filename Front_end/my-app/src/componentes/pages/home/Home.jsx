import Featured_info from "../../featured_info/Featured_info"
import Charts from "../../charts/Charts"
import "./home.css"
import { userData } from "../../../data"
import WidgetSm from "../../widgetSm/WidgetSm"
import WidgetLg from "../../widgetLg/WidgetLg"

export default function Home() {
  return (
    <div className="home">
        <Featured_info/>
        <Charts data={userData} title = "User Analytics" grid dataKey="Active Users"/>
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>

        </div>
    </div>
  )
}
