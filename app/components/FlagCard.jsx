import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function FlagCard() {
  return (
    <div className="flex justify-center">
      <Card id="theme" sx={{ maxWidth: 320 }}>
        <CardActionArea>
          <CardMedia component="img" image="https://flagcdn.com/w320/br.png" />
          <CardContent className="pb-12">
            <Typography gutterBottom variant="h5" component="div">
              Brazil
            </Typography>
            <Typography variant="body3">
              <ul>
                <li>
                  <span className="font-bold">Population:</span> 8,797,450
                </li>
                <li>
                  <span className="font-bold">Region:</span> America
                </li>
                <li>
                  <span className="font-bold">Capital:</span> Brasilia
                </li>
              </ul>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
