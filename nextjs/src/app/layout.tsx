import { type ReactElement, type ReactNode } from "react";

import BaseLayout from "@/ui/base-layout";
import Providers from "@/ui/providers";

const RootLayout = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <html lang="ja">
      <body>
        <Providers>
          <BaseLayout>{children}</BaseLayout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
