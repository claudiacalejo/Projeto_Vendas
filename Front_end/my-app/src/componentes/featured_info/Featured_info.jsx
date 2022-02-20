import "./featured_info.css"
import { ArrowDownward, ArrowUpward } from "@mui/icons-material"

export default function Featured_info() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">€€€</span>
                <span className="featuredMoneyRate">
                    adasdas <ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">€€€</span>
                <span className="featuredMoneyRate">
                    adasdas <ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">€€€</span>
                <span className="featuredMoneyRate">
                    adasdas <ArrowUpward className="featuredIcon positive"/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}
