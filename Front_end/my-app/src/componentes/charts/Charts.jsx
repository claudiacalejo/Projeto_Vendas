import "./charts.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Charts({title, data, dataKey, grid}) {

  return (
    <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data = {data}>
                {grid && <CartesianGrid strokeDasharray="5 5" />}
                <XAxis dataKey="name" stroke = "#5550bd" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey={dataKey} stroke="#8884d8"/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
