import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function Problem({ info }) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        {info ? (
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {info.pnum}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {info.solved_rank}
            </Typography>
          </CardContent>
        ) : (
          <Box textAlign="center">
            <AddIcon sx={{ fontSize: 100 }} />
          </Box>
        )}
      </CardActionArea>
    </Card>
  );
}
