import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { Doughnut } from 'react-chartjs-2'

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <Doughnut
        data={{
          
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            data: [100, 200, 300, 400, 500, 600],
            backgroundColor: ['red', 'green', 'orange', 'purple', 'cyan', 'blue'],
          },
          ]
        }
        }
      >

      </Doughnut>


    </div>
  );
};

export default Featured;
