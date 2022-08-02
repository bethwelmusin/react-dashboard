import "./chart.scss";
import {
  LineChart,
  ResponsiveContainer,
  Legend, Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';




const pdata = [
  {
      name: '1',
      completed: 11,
      incoming: 120,
      pending:23
  },
  {
      name: '2',
      completed: 15,
      incoming: 12,
      pending:12
  },
  {
      name: '3',
      completed: 5,
      incoming: 10,
      pending:12
  },
  {
      name: '4',
      completed: 10,
      incoming: 5,
      pending:8
  },
  {
      name: '5',
      completed: 9,
      incoming: 4,
      pending:39
  },
  {
      name: '6',
      completed: 10,
      incoming: 8,
      pending:19
  },
];

const Chart = () => {
  return (
    <div className="chart">
        <h2 className="text-heading">
            Orders
        </h2>
        <ResponsiveContainer width="100%" aspect={2 /1}>
            <LineChart data={pdata} margin={{ right: 300 }}>
                <CartesianGrid />
                <XAxis dataKey="name" 
                    interval={'preserveStartEnd'} />
                <YAxis></YAxis>
                <Legend />
                <Tooltip />
                <Line dataKey="completed"
                    stroke="blue" activeDot={{ r: 8 }} />
                <Line dataKey="incoming"
                    stroke="red" activeDot={{ r: 8 }} />
                <Line dataKey="pending"
                    stroke="orange" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
};

export default Chart;
