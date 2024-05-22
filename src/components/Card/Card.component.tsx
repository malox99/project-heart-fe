import { Box, Grid } from "@mui/material";
import { colors } from "../../theme/palette";

const Card = () => {
  return (
    <Grid item xs={3}>
      <Box sx={{ background: colors.gray.light }} height={300} />
    </Grid>
  );
};

export default Card;
