"use client";
import { Select } from "@chakra-ui/react";
import { type ComponentProps, forwardRef, type ReactElement } from "react";

type Props = {
  defaultValue?: string;
  users: string[];
} & ComponentProps<"select">;

const UserSelector = forwardRef<HTMLSelectElement, Props>(
  async ({ onChange, defaultValue, users }, ref): Promise<ReactElement> => {
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
