import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import beef from "../../images/beef.jpg";

const List = () => {
  const rows = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
      fooditem: "pizza ",
      category: "Lunch",
      orders: "1234",
      sales: "43%",
      
    },
    {
      img: "https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=",
      fooditem: "burger ",
      category: "Lunch",
      orders: "1234",
      sales: "13%",
      
    },
    {
      img: "https://s23209.pcdn.co/wp-content/uploads/2020/03/Best-Ever-Beef-StewIMG_1367.jpg",
      fooditem: "beef stew ",
      category: "supper",
      orders: "12",
      sales: "33%",
      
    },
    {
      img: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg",
      fooditem: "coffee ",
      category: "breakfast",
      orders: "56",
      sales: "23%",
      
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/4/48/Ugali_%26_Sukuma_Wiki.jpg",
      fooditem: "ugali skuma ",
      category: "supper",
      orders: "124",
      sales: "13%",
      
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell"> Image</TableCell>
            <TableCell className="tableCell">fooditem</TableCell>
            <TableCell className="tableCell">category</TableCell>
            <TableCell className="tableCell">orders</TableCell>
            <TableCell className="tableCell">sales</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow >
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.fooditem}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.fooditem}</TableCell>
              <TableCell className="tableCell">{row.category}</TableCell>
              <TableCell className="tableCell">{row.orders}</TableCell>
              <TableCell className="tableCell">{row.sales}</TableCell>
              <TableCell className="tableCell">
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
