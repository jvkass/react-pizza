import React, { useState } from "react";
import { Link } from "react-router-dom";

import PizzaDay from "../../components/PizzaDay";
import Title from "../../components/Title";
import { IPizzaDay } from "../../interfaces/IPizzaDay";
import { Container, Hr } from "./styles";

const Home: React.FC = () => {
  const [selectPizzaDay, setSelectionPizzaDay] = useState<IPizzaDay | null>(
    null
  );

  return (
    <>
      <Title name="Peça sua Pizza" />
      <Container>
        <Link to="/MakePizza">montar pedido</Link>
        <Hr />
        <Link to={{ pathname: "/MakePizza", state: selectPizzaDay }}>
          pedir pizza do dia
        </Link>
        <Hr />
        <PizzaDay
          parentCallback={(pizzaDay: IPizzaDay) =>
            setSelectionPizzaDay(pizzaDay)
          }
        />
      </Container>
    </>
  );
};

export default Home;
