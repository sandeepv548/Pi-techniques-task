import Styled from "./styles";
import Grid from "@mui/material/Unstable_Grid2";
import { Avatar } from "@mui/material";
import { green } from "@mui/material/colors";
import {Phishing} from "@mui/icons-material"

const OrderList = () => {
  return (
    <Styled>
       <h2>ORDERS</h2>
          <Grid container className={'order-list'}>
            <Grid xs={8} lg={8} className='order-list-details'>
              <span className="order-num">1231-1231231</span>
              <span className="order-name">HOTEL/TECH WORK SQUAD GFR</span>
              <span className="order-badge">Lorem Ipsum</span>
            </Grid>
            <Grid xs={4} lg={4}>
             
                <div className="icons-badge">
                <Phishing />
                <Avatar sx={{ bgcolor: green[500],fontSize:'12px',width:'25px',height:'25px'}}>RT</Avatar>
            
                </div>
            
              
              <span className="service-date">
                Service <br></br>
                12 July 2019
              </span>
            </Grid>
            
          </Grid>
          
    </Styled>
  );
};
export default OrderList;
