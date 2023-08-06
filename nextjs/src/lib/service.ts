"use server";
import { backendApi } from "@/lib/backend-api";

const itemToUser = async (formData: FormData): Promise<void> => {
  const user = formData.get("user");
  const itemId = formData.get("itemId");
  const amount = formData.get("amount");
  if (user !== null && itemId !== null && amount !== null) {
    await backendApi.postItemToUser({
      user: user.toString(),
      itemId: itemId.toString(),
      amount: parseInt(amount.toString(), 10),
    });
  }
  throw Error("");
};

const getUser = async (): Promise<string[]> => {
  return await backendApi.getUser();
};

export const service = {
  itemToUser,
  getUser,
};
