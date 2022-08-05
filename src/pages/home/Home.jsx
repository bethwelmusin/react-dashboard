import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Donut from "../../components/donutchart/Donut";


const Home = () => {

  return (
    <div className="home">
      <Sidebar />                    
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="total orders" />
          <Widget type="customers" />
          <Widget type="revenue" />
          <Widget type="profits" />
        </div>
        <div className="charts">
        <Chart title="Orders overview" aspect={2 / 1} />
          {/* <Featured /> */}
          <Donut />

         
        </div>
        <div className="listContainer">
          <div className="listTitle">Popular Menu Dishes</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
