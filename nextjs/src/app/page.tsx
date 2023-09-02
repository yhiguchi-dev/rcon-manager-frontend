import React, { type ReactElement } from "react";

import { getUser, itemToUser } from "@/lib/service";
import ItemSelector from "@/ui/item-selector";
import UserSelector from "@/ui/user-selector";

const RootPage = async (): Promise<ReactElement> => {
  const users = await getUser();
  const handleAction = async (formData: FormData): Promise<void> => {
    "use server";
    await itemToUser(formData);
  };
  return (
    <main>
      <div className="flex w-screen items-center justify-center pt-4">
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form className="group" action={handleAction} noValidate>
          <div className="space-y-1.5">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                ユーザー
              </label>
              <UserSelector
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                users={users}
                name="user"
              />
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                アイテム
              </label>
              <ItemSelector
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                name="itemId"
              />
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                個数
              </label>
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                type="number"
                name="amount"
                required
                min={1}
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 group-invalid:pointer-events-none group-invalid:opacity-30"
            >
              登録
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default RootPage;
