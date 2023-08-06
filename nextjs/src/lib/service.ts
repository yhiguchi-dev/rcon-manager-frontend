"use server";
import { backendApi } from "@/lib/backend-api";

export const itemToUser = async (formData: FormData): Promise<void> => {
  const url = process.env.BACKEND_URL;
  const user = formData.get("user");
  const itemId = formData.get("itemId");
  const amount = formData.get("amount");
  console.log(formData);
  if (user !== null && itemId !== null && amount !== null) {
    await backendApi.postItemToUser({
      url,
      user: user.toString(),
      itemId: itemId.toString(),
      amount: parseInt(amount.toString(), 10),
    });
  }
};

export const getUser = async (): Promise<string[]> => {
  const url = process.env.BACKEND_URL;
  return await backendApi.getUser({ url });
};
