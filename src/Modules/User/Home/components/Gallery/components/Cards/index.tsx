import { Card, Grid } from "@mui/material";

function Cards({ CardsData }: any) {
  return (
    <Card elevation={2} sx={{ height: "100%", width: "100%", padding: 1 }}>
      <Grid container gap={2}>
        <Grid item xs={12}>
          <img src={CardsData.img} style={{ width: '100%', height: '300px', objectFit: 'cover' }}  alt="" />
        </Grid>
      </Grid>
    </Card>
  );
}

export default Cards;
