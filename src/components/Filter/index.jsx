import Styled from "./styles";
import DynamicText from "../../common/DynamicInput/DynamicText";
import Grid from "@mui/material/Unstable_Grid2";
import DynamicSelect from "../../common/DynamicInput/DynamicSelect";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Search,DirectionsBoat } from "@mui/icons-material";
const Filter = () => {
  return (
    <Styled>
      <Grid container spacing={1}>
        <Grid xs={12} lg={6}>
          <DynamicText
            variant={"outlined"}
            className="rounded"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {" "}
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <DirectionsBoat />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <Search position="end">
                  {" "}
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <Search />
                  </IconButton>
                </Search>
              ),
            }}
          />
        </Grid>
        <Grid xs={12} lg={6}>
          <DynamicSelect />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid xs={12} lg={6}>
          <DynamicText
            variant={"standard"}
            className="squared"
            placeholder="Enter coy id"
            label="Coy id"
          />
        </Grid>
        <Grid xs={12} lg={6}>
        <DynamicText
            variant={"standard"}
            className="squared"
            placeholder="Enter order number"
            label="Order number"
          />
        </Grid>
      </Grid>
    </Styled>
  );
};
export default Filter;
