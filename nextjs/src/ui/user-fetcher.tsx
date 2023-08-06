import { type ReactElement } from "react";

import { getUser } from "@/lib/service";
import UserSelector from "@/ui/user-selector";

const UserFetcher = async (): Promise<ReactElement> => {
  const users = await getUser();
  return <UserSelector users={users} name="user" />;
};
export default UserFetcher;
