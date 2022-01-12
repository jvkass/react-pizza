/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";

import { IFlavor } from "../../interfaces/IFlavor";
import { api } from "../../services/api";
import { FlavorSection, Button } from "./styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Flavor = (props: any) => {
  const [flavor, setFlavor] = useState<IFlavor[] | null>(null);

  useEffect(() => {
    api.get(`/flavor`).then((response) => setFlavor(response.data));
  }, []);

  const onTrigger = (flavor: IFlavor): void => {
    props.parentCallback(flavor);
  };

  return (
    <>
      <FlavorSection>
        {flavor &&
          flavor.map((flavor) => (
            <div className="container" key={flavor.id}>
              <div className="row">
                <div className="card" key={flavor.id}>
                  <Button onClick={() => onTrigger(flavor)}>
                    <div className="card-body">
                      <h5 className="card-title">{flavor?.description}</h5>
                    </div>
                    <img
                      className="card-img-down"
                      key={flavor.id}
                      src={require(`../../assets/pizza${flavor.id}.png`)}
                      alt={flavor.description}
                    />
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </FlavorSection>
    </>
  );
};

export default Flavor;
