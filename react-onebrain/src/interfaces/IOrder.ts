import { IData } from "./IData";
import { IDough } from "./IDough";
import { IFlavor } from "./IFlavor";
import { ISize } from "./ISize";

export interface IOrder {
  id?: number;
  flavor: IFlavor;
  dough: IDough;
  size: ISize;
  data: IData;
  totalPrice: number;
}
