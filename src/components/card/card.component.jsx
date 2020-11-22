import React from "react";
import { Card, CardContent, Image } from "semantic-ui-react";
import "./card.style.css";

export const CardComponent = (props) => (
  <Card className="cardStyle" style={{ backgroundColor: "#89D3D3" }}>
    <Card.Content>
      <Image
        alt="monster"
        src={"https://robohash.org/" + props.monster.id + "?set=set2"}
      />

      <h3>{props.monster.name}</h3>
      <p>{props.monster.email}</p>
    </Card.Content>
  </Card>
);
