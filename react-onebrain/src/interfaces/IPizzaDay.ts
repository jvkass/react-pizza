import { IDough } from "./IDough";
import { IFlavor } from "./IFlavor";
import { ISize } from "./ISize";

export interface IPizzaDay {
  id: number;
  flavor: IFlavor;
  size: ISize;
  dough: IDough;
}
