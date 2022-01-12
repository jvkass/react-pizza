/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";

import imgPizza from "../../assets/pizza5.png";
import { IPizzaDay } from "../../interfaces/IPizzaDay";
import { api } from "../../services/api";
import { ImgPizzaDay } from "./styles";

const PizzaDay = (props: any) => {
  const [pizzaDay, setPizzaDay] = useState<IPizzaDay | null>(null);

  useEffect(() => {
    api.get(`/pizzaDay`).then((response) => {
      if (response.status === 200) {
        setPizzaDay(response.data[0]);
        props.parentCallback(response.data[0]);
      }
    });
  }, []);

  return (
    <>
      {pizzaDay && (
        <div className="content">
          <div className="form-group row">
            <div className="col-sm-2">
              <strong className="form-control-plaintext">
                {pizzaDay.flavor.description}
              </strong>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-2">
              <strong className="form-control-plaintext">
                <label className="col-sm-2 col-form-label">tamanho </label>
                {pizzaDay.size.description}
              </strong>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-2">
              <strong className="form-control-plaintext">
                <label className="col-sm-2 col-form-label">massa </label>
                {pizzaDay.dough.description}
              </strong>
            </div>
          </div>
          <ImgPizzaDay src={imgPizza} alt="Pizza Day" />
        </div>
      )}
    </>
  );
};

export default PizzaDay;
