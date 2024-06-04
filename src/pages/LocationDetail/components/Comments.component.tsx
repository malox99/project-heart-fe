import { Button, Stack, TextField, Typography } from "@mui/material";
import { getIconCustom } from "../../../utils/utils";
import { Rating } from "react-simple-star-rating";

const mockComments = [
  {
    name: "Alex Mattucci",
    description: "Questa è la mia descrizione. Bla bla bla",
    date: "04/06/2024",
    rating: 4,
  },
  {
    name: "Salvatore Castellitti",
    description: "Questa è la mia descrizione 2",
    date: "02/06/2024",
    rating: 2,
  },
];
const Comments = () => {
  return (
    <Stack gap={3}>
      {mockComments.map((el, i) => (
        <Stack key={i} direction={"row"} gap={1}>
          {getIconCustom(el.name)}
          <Stack>
            <Stack direction={"row"} alignItems={"baseline"} gap={2}>
              <Typography variant="body1">{el.name}</Typography>
              <Rating initialValue={el.rating} disableFillHover size={15} />
            </Stack>
            <Typography variant="caption">{el.date}</Typography>

            <Typography>{el.description}</Typography>
          </Stack>
        </Stack>
      ))}

      <Stack direction={"row"} gap={1}>
        {getIconCustom("Alex Mattucci")}
        <Stack width={"100%"} gap={1}>
          <Rating size={15} />
          <Stack direction={'row'} gap={2}>
          <TextField
            placeholder="Aggiungi un commento"
            sx={{
              height: "40px",
              width: "100%",
              "& .MuiInputBase-root": {
                height: "40px",
              },
            }}
          />
          <Button variant="primary">Salva</Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Comments;
