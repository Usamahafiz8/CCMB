import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";
interface SimpleLinksTwoProps {
  StringArray: any;
  title: string;
}
function SimpleLinksTwo({ StringArray, title }: SimpleLinksTwoProps) {
  const navigate = useNavigate()
  return (
    <Stack sx={{ height: "100%", width: "100%" }} direction={"column"} gap={2}>
      <Typography fontWeight={600} sx={{ mb: 2 }} variant={"body2"}>
        {title}
      </Typography>
      {StringArray?.map((e:any, i:number) => (
        <Typography sx={{cursor:"pointer"}} onClick={()=>{navigate(e?.url)}} key={i} variant={"caption"}>
          {e?.name}
        </Typography>
      ))}
    </Stack>
  );
}

export default SimpleLinksTwo;
