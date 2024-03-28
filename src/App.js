
import './App.css';
import Filter from './components/Filter';
import { Paper, styled, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import OrderDetails from './components/OrderDetails';
import OrderList from './components/OrderList';

function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow:'0px',
    borderRadius:'25px'
  }));
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12} lg={4} >
            <Item className='flexDiv'><Filter/></Item>
            <OrderList />
          </Grid>
          <Grid xs={12} lg={8} >
            <Item className='flexDiv'><OrderDetails/></Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
