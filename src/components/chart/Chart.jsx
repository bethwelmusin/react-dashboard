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
      completed: 15,
      incoming: 83,
      pending:45
  },
  {
    name: '7',
    completed: 12,
    incoming: 0,
    pending:23
},
{
    name: '8',
    completed: 54,
    incoming: 18,
    pending:23,
       
},
{
    name: '9',
    completed: 50,
    incoming: 18,
    pending:19,
},
{
    name: '10',
    completed: 30,
    incoming: 6,
    pending:27,
},
    { 
    name: '11',
    completed: 40,
    incoming: 7,
    pending:32
    },
];

const Chart = () => {
  return (
    <div className="chart">
        <h2 className="text-heading">
            Orders
        </h2>
        <ResponsiveContainer width="100%" aspect={3 /1}>
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
