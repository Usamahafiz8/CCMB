import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IconButton, Collapse } from "@mui/material";
import {
  BubbleChart,
  Close,
  ExpandLess,
  ExpandMore,
  Home,
  Mail,
  MedicalServices,
  PriceChange,
  Star,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import { useState } from "react";

function DrawerContent({ toggleDrawer }: any) {
  const navigate = useNavigate();
  const [openServices, setOpenServices] = useState(false);

  const handleServicesClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation(); // Prevent the drawer from closing
    setOpenServices(!openServices);
  };

  const handleNavigate = (url: string) => {
    navigate(url);
    toggleDrawer(false)();
  };

  const ArrayDataOne = [
    {
      name: "Home",
      icon: <Home />,
      url: "/",
    },
    {
      name: "Services",
      icon: <MedicalServices />,
      url: "/services",
      children: [
        {
          name: "Our Services",
          url: "/services",
        },
        {
          name: "Prior Authorization Services",
          url: "/authorizationservices",
        },
        {
          name: "Medical Billing Services",
          url: "/medicalbilling",
        },
        {
          name: "AR Recovery Services",
          url: "/recoveryservice",
        },
        {
          name: "Provider Enrollment Services",
          url: "/enrollment",
        },
      ],
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
      <Box sx={{ width: 250 }} role="presentation">
        <IconButton sx={{ m: 1 }} onClick={toggleDrawer(false)}>
          <Close />
        </IconButton>
        <List>
          {ArrayDataOne.map((e, i) =>
            e.children ? (
              <div key={i}>
                <ListItem disablePadding>
                  <ListItemButton onClick={handleServicesClick} sx={{ py: 0.5 }}>
                    <ListItemIcon>{e.icon}</ListItemIcon>
                    <ListItemText primary={e.name} primaryTypographyProps={{ fontSize: '0.875rem' }} />
                    {openServices ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                </ListItem>
                <Collapse in={openServices} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {e.children.map((child, index) => (
                      <ListItem
                        key={index}
                        onClick={() => handleNavigate(child.url)}
                        sx={{ pl: 4, py: 0.5 }}
                        disablePadding
                      >
                        <ListItemButton>
                          <ListItemText primary={child.name} primaryTypographyProps={{ fontSize: '0.875rem' }} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </div>
            ) : (
              <ListItem
                onClick={() => handleNavigate(e.url)}
                key={i}
                disablePadding
                sx={{ py: 0.5 }}
              >
                <ListItemButton>
                  <ListItemIcon>{e.icon}</ListItemIcon>
                  <ListItemText primary={e.name} primaryTypographyProps={{ fontSize: '0.875rem' }} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          {ArrayDataTwo.map((text, index) => (
            <ListItem onClick={() => handleNavigate(text.url)} key={index} disablePadding sx={{ py: 0.5 }}>
              <ListItemButton>
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText primary={text.name} primaryTypographyProps={{ fontSize: '0.875rem' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default DrawerContent;
