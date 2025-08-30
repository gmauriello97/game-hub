import React from "react";
import Dropdown from "./UI/Dropdown";
import { SORT_LABEL } from "./Strings/strings";
import { OrderObj, options } from "@/types/order";

interface Props {
  sort: string | null;
  onChange: (g: OrderObj) => void;
}

const OrderingSelector = ({ onChange, sort }: Props) => {
  let selected = options.filter((o) => o.id == sort);
  let title = SORT_LABEL;
  if (selected.length > 0) {
    title = selected[0].name;
  }
  return (
    <Dropdown
      defaultName={SORT_LABEL}
      items={options}
      title={"Order by: " + title}
      onChange={(g) => onChange(g)}
    ></Dropdown>
  );
};

export default OrderingSelector;
