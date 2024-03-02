import { Stack, Typography } from "@mui/material";
interface SimpleLinksProps {
  StringArray: string[];
  title: string;
}
function SimpleLinks({ StringArray, title }: SimpleLinksProps) {
  return (
    <Stack sx={{ height: "100%", width: "100%" }} direction={"column"} gap={2}>
      <Typography fontWeight={600} sx={{ mb: 2 }} variant={"body2"}>
        {title}
      </Typography>
      {StringArray?.map((e, i) => (
        <Typography key={i} variant={"caption"}>
          {e}
        </Typography>
      ))}
    </Stack>
  );
}

export default SimpleLinks;
