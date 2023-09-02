import { type ComponentProps, type ReactElement } from "react";

import { items } from "@/data/items";

type Props = ComponentProps<"select">;

const ItemSelector = ({ className, onChange, name }: Props): ReactElement => {
  const selectorOptions = items.map((value, index) => {
    const { name, displayName } = value;
    return (
      <option key={index} value={name}>
        {displayName}
      </option>
    );
  });
  return (
    <select
      className={className}
      name={name}
      onChange={onChange}
      defaultValue=""
      required
    >
      <option value="" disabled></option>
      {selectorOptions}
    </select>
  );
};
ItemSelector.displayName = "ItemSelector";
export default ItemSelector;
