/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";

import { ISize } from "../../interfaces/ISize";
import { api } from "../../services/api";
import { SizeSection, ButtonSize } from "./styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Size = (props: any) => {
  const [size, setSize] = useState<ISize[] | null>(null);

  useEffect(() => {
    api.get(`/size`).then((response) => setSize(response.data));
  }, []);

  const onTrigger = (size: ISize): void => {
    props.parentCallback(size);
  };

  return (
    <>
      <SizeSection>
        {size?.map((size) => (
          <div className="container" key={size.id}>
            <div className="row">
              <div className="card" key={size.id}>
                <ButtonSize
                  onClick={() => onTrigger(size)}
                  buttonSize={size?.measure}
                >
                  {size?.measure}
                </ButtonSize>
              </div>
            </div>
          </div>
        ))}
      </SizeSection>
    </>
  );
};

export default Size;
