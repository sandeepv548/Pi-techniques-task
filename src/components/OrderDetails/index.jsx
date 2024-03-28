import Styled from "./styles";
import Grid from "@mui/material/Unstable_Grid2";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Print, SaveAs, ReportSharp, FileOpen } from "@mui/icons-material";
import { Box } from "@mui/material";
import OrderDetailsTab from './OrderDetailsTab'

const OrderDetails = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [createData("10 July 2019", "Service", "12312-12312 HM PAX")];

  const navList = [
    {
      icon: <SaveAs />,
      name: "Edit Order details",
    },
    {
      icon: <Print />,
      name: "Print Order details",
    },
    {
      icon: <FileOpen />,
      name: "Change Delivery Status",
    },
    {
      icon: <ReportSharp />,
      name: "Reports",
    },
  ];
  return (
    <Styled>
      <Grid container spacing={1}>
        <Grid xs={12} lg={12} className={"details-head-div"}>
          <h1>4902-00022 HOTEL/TECH WORK SQUAD GFR</h1>

          <Table sx={{ maxWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Date Requested</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Account Code</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.calories}</TableCell>
                  <TableCell>{row.fat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
      <Divider />
      <Box>
        <List component="nav" aria-label="main mailbox folders">
          {navList?.map(({name,icon}) => {
            return (
              <ListItemButton>
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            );
          })}
        </List>
        <Divider />
        <OrderDetailsTab/>
      </Box>
     
    </Styled>
  );
};
export default OrderDetails;
