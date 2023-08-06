import { Select } from "@chakra-ui/react";
import { type ComponentProps, forwardRef, type ReactElement } from "react";

import { items } from "@/data/items";

type Props = {
  defaultValue?: string;
} & ComponentProps<"select">;

const ItemSelector = forwardRef<HTMLSelectElement, Props>(
  ({ onChange, defaultValue }, ref): ReactElement => {
    const selectorOptions = items.map((value, index) => {
      const { name, displayName } = value;
      return (
        <option key={index} value={name}>
          {displayName}
        </option>
      );
    });
    return (
      <Select defaultValue={defaultValue} onChange={onChange} ref={ref}>
        {selectorOptions}
      </Select>
    );
  },
);
ItemSelector.displayName = "ItemSelector";
export default ItemSelector;
