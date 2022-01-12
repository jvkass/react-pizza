/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/inject-style";

import { IOrder } from "../../interfaces/IOrder";
import { error, success } from "../Toast/index";
import { DataSection, Button, Grid, Input, Label, InputPrice } from "./styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DataForm = (props: any) => {
  const [fullname, setFullName] = useState<string>("");
  const [adress, setAdress] = useState<string>("");

  function setFormData(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const price = calculateTotalPrice()
      .replace(",", ".")
      .replace(/[^0-9.-]+/g, "");

    const order: IOrder = {
      data: {
        id: props.selectData?.id != null ? props.selectData?.id : 0,
      },
      flavor: {
        id: props.selectFlavor?.id != null ? props.selectFlavor?.id : 0,
      },
      dough: {
        id: props.selectDough?.id != null ? props.selectDough?.id : 0,
      },
      size: {
        id: props.selectSize?.id != null ? props.selectSize?.id : 0,
      },
      totalPrice: parseFloat(price),
    };
    if (!props.selectFlavor) {
      error(["Informe o sabor da pizza"]);
    } else if (!props.selectDough) {
      error(["Informe o tipo de massa da pizza"]);
    } else if (!props.selectSize) {
      error(["Informe o tamanho da pizza"]);
    } else if (fullname === "") {
      error(["Informe o seu nome completo"]);
    } else if (adress === "") {
      error(["Informe o seu endereço"]);
    } else if (order.data != null) {
      success();
      redirectHome();
    }
  }

  const redirect = useHistory();

  function redirectHome(): void {
    setTimeout(function () {
      redirect.push("/home");
    }, 5000);
  }

  const calculateTotalPrice = () => {
    const value =
      (props.selectDough?.price != null ? props.selectDough?.price : 0) +
      (props.selectFlavor?.price != null ? props.selectFlavor?.price : 0) +
      (props.selectSize?.price != null ? props.selectSize?.price : 0);
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <>
      <DataSection>
        <form onSubmit={setFormData}>
          <Input
            type="text"
            placeholder="Nome Completo"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            value={fullname}
          />

          <Input
            className="form-control"
            type="text"
            placeholder="Endereço"
            onChange={(e) => {
              setAdress(e.target.value);
            }}
            value={adress}
          />

          <Grid>
            <Label>Preço: </Label>
            <InputPrice
              className="form-control"
              type="text"
              placeholder="Preço:"
              readOnly
              value={calculateTotalPrice()}
            />
          </Grid>
          <Button type="submit">Finalizar pedido</Button>
        </form>
      </DataSection>
      <ToastContainer />
    </>
  );
};

export default DataForm;
