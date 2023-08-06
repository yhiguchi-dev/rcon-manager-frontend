import { type ReactElement } from "react";

import { getUser } from "@/lib/service";
import Home from "@/ui/home";

const RootPage = async (): Promise<ReactElement> => {
  const users = await getUser();
  return (
    <main>
      <Home users={users} />
    </main>
  );
};

export default RootPage;
