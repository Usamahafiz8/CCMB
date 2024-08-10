import { Call, LocationCity, Mail } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import useWindowWidth from "../../../../hook/useWindowWidth";

type ContactInfo = {
  title: string;
  icon: ReactNode;
};
function Lower() {
  const windowWidth = useWindowWidth();
  const DataArray: ContactInfo[] = [
    {
      title: "8819 Ohio St. South Gate, CA 90280",
      icon: <LocationCity />,
    },
    {
      title: "info@claimcrestmb.com",
      icon: <Mail />,
    },
    {
      title: "+1 30000000000",
      icon: <Call />,
    },
  ];
  return (
    <Stack
      direction={windowWidth < 900 ? "column" : "row"}
      alignItems={windowWidth < 900 ? "flex-start" : "center"}
      justifyContent={"space-between"}
      width={"100%"}
      gap={windowWidth < 900 ? 4 : 0}
    >
      <Typography variant="body2">Copyright Calim Crest Medical Billing</Typography>
      {DataArray.map((e, i) => (
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          {e.icon}
          <Typography sx={{ mt: 0.5 }} key={i} variant="body2">
            {e.title}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}

export default Lower;
