/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import DataForm from "../../components/DataForm";
import Dough from "../../components/Dough";
import Flavor from "../../components/Flavor";
import Size from "../../components/Size";
import Title from "../../components/Title";
import { IDough } from "../../interfaces/IDough";
import { IFlavor } from "../../interfaces/IFlavor";
import { IPizzaDay } from "../../interfaces/IPizzaDay";
import { ISize } from "../../interfaces/ISize";
import { api } from "../../services/api";
import { Container } from "../Home/styles";
import { Button, Grid, Order } from "./styles";

const MakePizza: React.FC = () => {
  const location = useLocation();

  const [flavor, setFlavor] = useState<boolean>(false);
  const [dough, setDough] = useState<boolean>(false);
  const [size, setSize] = useState<boolean>(false);
  const [data, setData] = useState<boolean>(false);

  const [selectFlavor, setSelectFlavor] = useState<IFlavor>();
  const [selectDough, setSelectDough] = useState<IDough>();
  const [selectSize, setSelectSize] = useState<ISize>();
  const [selectPizzaDay, setSelectPizzaDay] = useState<IPizzaDay>();

  if (location.state != null) {
    useEffect(() => {
      api.get(`/pizzaDay`).then((response) => {
        if (response.status === 200) {
          setSelectPizzaDay(response.data[0]);
          setSelectFlavor(response.data[0].flavor);
          setSelectDough(response.data[0].dough);
          setSelectSize(response.data[0].size);
        }
      });
    }, []);
  }

  const handleView = (name: string) => {
    if (name === "flavor") {
      setFlavor(true);
      setDough(false);
      setSize(false);
      setData(false);
    }
    if (name === "dough") {
      setDough(true);
      setFlavor(false);
      setSize(false);
      setData(false);
    }
    if (name === "size") {
      setSize(true);
      setDough(false);
      setFlavor(false);
      setData(false);
    }
    if (name === "data") {
      setData(true);
      setSize(false);
      setDough(false);
      setFlavor(false);
    }
  };

  return (
    <>
      <Title name="Monte sua pizza" />
      <Container>
        <Grid>
          <Order>
            <Button id="flavor" onClick={(e) => handleView("flavor")}>
              Sabor <b>{selectFlavor?.description}</b>
            </Button>
            <Button id="dough" onClick={(e) => handleView("dough")}>
              Massa <b>{selectDough?.description}</b>
            </Button>
            <Button id="size" onClick={(e) => handleView("size")}>
              Tamanho <b>{selectSize?.measure}</b>
            </Button>
            <Button id="data" onClick={(e) => handleView("data")}>
              Dados
            </Button>
          </Order>

          {flavor ? (
            <Flavor
              parentCallback={(flavor: IFlavor) => setSelectFlavor(flavor)}
            />
          ) : null}
          {dough ? (
            <Dough parentCallback={(dough: IDough) => setSelectDough(dough)} />
          ) : null}

          {size ? (
            <Size parentCallback={(size: ISize) => setSelectSize(size)} />
          ) : null}
          {data ? (
            <DataForm
              selectDough={selectDough}
              selectFlavor={selectFlavor}
              selectSize={selectSize}
            />
          ) : null}
        </Grid>
      </Container>
    </>
  );
};

export default MakePizza;
