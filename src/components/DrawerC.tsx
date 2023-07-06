import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from "@mui/material/Button";
import { IconButton } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Box } from "@mui/material";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Box sx={{ display: "flex", p: 2 }}>
        <IconButton  sx={{ p: 0, mr: 1 }}>
          <DashboardIcon />
        </IconButton>
        <Typography>Dashboard</Typography>
      </Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ border: 0 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <IconButton  sx={{ p: 0, mr: 1 }}>
            <DashboardIcon />
          </IconButton>
          <Typography sx={{ flexShrink: 0 }}>Key Vault</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Location</Typography>
          <Typography>User</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{ border: 0 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <IconButton sx={{ p: 0, mr: 1 }}>
            <DashboardIcon />
          </IconButton>
          <Typography sx={{ flexShrink: 0 }}>CA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Location</Typography>
          <Typography>User</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <IconButton  sx={{ p: 0, mr: 1 }}>
            <DashboardIcon />
          </IconButton>
          <Typography sx={{ flexShrink: 0 }}>Dashboard</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Location</Typography>
          <Typography>User</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <IconButton  sx={{ p: 0, mr: 1 }}>
            <DashboardIcon />
          </IconButton>
          <Typography sx={{ flexShrink: 0 }}>Certificate Provider</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Location</Typography>
          <Typography>User</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <IconButton  sx={{ p: 0, mr: 1 }}>
            <DashboardIcon />
          </IconButton>
          <Typography sx={{ flexShrink: 0 }}>OCSP</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Location</Typography>
          <Typography>User</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <IconButton  sx={{ p: 0, mr: 1 }}>
            <DashboardIcon />
          </IconButton>
          <Typography sx={{ flexShrink: 0 }}>TimeStamping</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Location</Typography>
          <Typography>User</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("pane7")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <IconButton  sx={{ p: 0, mr: 1 }}>
            <DashboardIcon />
          </IconButton>
          <Typography sx={{ flexShrink: 0 }}>Signing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Location</Typography>
          <Typography>User</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <IconButton  sx={{ p: 0, mr: 1 }}>
            <DashboardIcon />
          </IconButton>
          <Typography sx={{ flexShrink: 0 }}>Access control</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Location</Typography>
          <Typography>User</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
 
}
