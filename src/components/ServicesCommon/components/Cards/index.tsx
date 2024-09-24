import { Card, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";

function Cards({ CardsData }: any) {
  const navigate = useNavigate() 
  return (
    <Card 
    elevation={2} 
    sx={{ 
      height: "100%", 
      width: "100%", 
      paddingBlock: 3, 
      paddingInline: 2, 
      pointerEvents: "auto", 
      cursor: "pointer", // Changes cursor to pointer on hover
      transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition for hover effects
      '&:hover': {
        transform: "scale(1.05)", // Slightly increase the size on hover
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Elevates the card with shadow on hover
      }
    }} 
    onClick={() => navigate(CardsData.url)}  
    >
      <Stack sx={{ height: "100%", width: "100%" }} direction={"column"}>
        <img src={CardsData.imgOne} style={{ width: "100%" }} alt="" />
        <img src={CardsData.imgTwo} style={{width:"40px", marginTop:"-20px"}} alt="" />
        <Typography variant="h5" fontWeight={500}>{CardsData.title}</Typography>
        <Typography variant="body2">{CardsData.para}</Typography>
      </Stack>
    </Card>
  );
}

export default Cards;
