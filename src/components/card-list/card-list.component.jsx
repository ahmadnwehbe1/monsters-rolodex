import React from "react";
import { Card, Container } from "semantic-ui-react";
import { CardComponent } from "../card/card.component";

export const CardList = (props) => {
  return (
    <Container>
      <Card.Group itemsPerRow={4}>
        {props.monsters.map((monster, i) => (
          <CardComponent key={i} monster={monster} />
        ))}
      </Card.Group>
    </Container>
  );
};
