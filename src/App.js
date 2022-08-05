
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Menu from "./components/menu/Menu";
import Orders from "./components/orders/Orders";
import Feedback from "./components/feedback/Feedback";
import Message from "./components/messages/Message";
import Qrcode from "./components/qr codes/Qrcode";



function App() {
 
  return (
    <div className={ ""}>
      
      <BrowserRouter>
      
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/messages" element={<Message />} />
            <Route path="/QRcode" element={<Qrcode />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
