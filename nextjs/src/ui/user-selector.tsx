import { type ComponentProps, type ReactElement } from "react";

type Props = {
  users: string[];
} & ComponentProps<"select">;

const UserSelector = ({
  users,
  onChange,
  name,
  className,
}: Props): ReactElement => {
  const selectorOptions = users.map((value, index) => {
    return (
      <option key={index} value={value}>
        {value}
      </option>
    );
  });
  return (
    <select
      className={className}
      name={name}
      defaultValue=""
      onChange={onChange}
      required
    >
      <option value="" disabled></option>
      {selectorOptions}
    </select>
  );
};
UserSelector.displayName = "UserSelector";
export default UserSelector;
