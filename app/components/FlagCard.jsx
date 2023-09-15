import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";

export default function FlagCard(props) {
  return (
    <Link href={`/country-details/${props.name.common.toLowerCase()}`}>
      <Card id="theme" className="w-[320px]">
        <CardActionArea>
          <CardMedia
            component="img"
            className="h-[160px]"
            image={props.flags.png}
            loading="lazy"
            alt={props.name.common}
          />
          <CardContent className="pb-12 ml-2">
            <Typography gutterBottom variant="h5" component="div">
              {props.name.common}
            </Typography>
            <Typography variant="body3">
              <ul>
                <li>
                  <span className="font-bold">Population:</span>{" "}
                  {props.population.toLocaleString()}
                </li>
                <li>
                  <span className="font-bold">Region:</span> {props.region}
                </li>
                <li>
                  <span className="font-bold">Capital:</span> {props.capital}
                </li>
              </ul>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
