/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";

import { IDough } from "../../interfaces/IDough";
import { api } from "../../services/api";
import { DoughSection, Button } from "./styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Dough = (props: any) => {
  const [dough, setDough] = useState<IDough[] | null>(null);

  useEffect(() => {
    api.get(`/dough`).then((response) => setDough(response.data));
  }, []);

  const onTrigger = (dough: IDough): void => {
    props.parentCallback(dough);
  };

  return (
    <>
      <DoughSection>
        {dough &&
          dough.map((dough) => (
            <div className="container" key={dough.id}>
              <Button onClick={() => onTrigger(dough)}>
                <div className="card-body">
                  <h5 className="card-title">massa {dough?.description}</h5>
                  <hr />
                </div>
              </Button>
            </div>
          ))}
      </DoughSection>
    </>
  );
};

export default Dough;
