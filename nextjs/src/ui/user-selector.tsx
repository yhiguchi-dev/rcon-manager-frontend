import { Select } from "@chakra-ui/react";
import { type ComponentProps, forwardRef, type ReactElement } from "react";

import { service } from "@/lib/service";

type Props = {
  defaultValue?: string;
} & ComponentProps<"select">;

const UserSelector = forwardRef<HTMLSelectElement, Props>(
  async ({ onChange, defaultValue }, ref): Promise<ReactElement> => {
    const users = await service.getUser();
    const selectorOptions = users.map((value, index) => {
      return (
        <option key={index} value={value}>
          {value}
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
UserSelector.displayName = "UserSelector";
export default UserSelector;
