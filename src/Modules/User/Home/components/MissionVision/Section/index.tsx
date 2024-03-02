import { Stack, Typography } from "@mui/material";
import BracketsImage from "../../../../../../assets/Home/mission/curlybrackets.svg";
import useWindowWidth from "../../../../../../hook/useWindowWidth";
function Section({ content }: any) {
  const windowWidth = useWindowWidth();
  return (
    <Stack
      width={"350px"}
      sx={{
        mb:
          windowWidth > 900
            ? content?.title == "Our Vision"
              ? "150px"
              : "-150px"
            : "0px",
        marginBlock: windowWidth > 900 ? 0 : 4,
      }}
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <img
        style={{ transform: "rotate(180deg)", height: "280px" }}
        src={BracketsImage}
        alt=""
      />
      <Stack direction={"column"} gap={2}>
        <Typography fontWeight={600} variant={"h5"}>
          {content.title}
        </Typography>
        <Typography variant={"body2"}>{content.content}</Typography>
      </Stack>
      <img src={BracketsImage} style={{ height: "280px" }} alt="" />
    </Stack>
  );
}

export default Section;
