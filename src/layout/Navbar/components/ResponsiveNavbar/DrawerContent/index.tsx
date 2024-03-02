import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";
import {
  BubbleChart,
  Close,
  Home,
  Mail,
  MedicalServices,
  PriceChange,
  Star,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
function DrawerContent({ toggleDrawer }: any) {
  const navigate = useNavigate();
  const ArrayDataOne = [
    {
      name: "Home",
      icon: <Home />,
      url: "/",
    },
    // {
    //   name: "About",
    //   icon: <Info />,
    //   url: "/about",
    // },
    {
      name: "Services",
      icon: <MedicalServices />,
      url: "/services",
    },
    {
      name: "Specialities",
      icon: <Star />,
      url: "/specialities",
    },
  ];
  const ArrayDataTwo = [
    {
      name: "Request Demo",
      icon: <BubbleChart />,
      url: "/demo",
    },
    {
      name: "Pricing",
      icon: <PriceChange />,
      url: "/pricing",
    },
    {
      name: "Contact Us",
      icon: <Mail />,
      url: "/contact",
    },
  ];
  return (
    <div>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <IconButton sx={{ m: 1 }}>
          <Close />
        </IconButton>
        <List>
          {ArrayDataOne?.map((text, index) => (
            <ListItem
              onClick={() => navigate(text?.url)}
              key={index}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {ArrayDataTwo?.map((text, index) => (
            <ListItem
              onClick={() => navigate(text?.url)}
              key={index}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>{text?.icon}</ListItemIcon>
                <ListItemText primary={text?.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default DrawerContent;
