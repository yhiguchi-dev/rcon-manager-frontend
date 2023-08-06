import { http } from "@/lib/http";

const getUser = async ({ url }: { url: string }): Promise<string[]> => {
  const { get } = http;
  const response = await get<string[]>({
    url: `${url}/users`,
  });
  switch (response.type) {
    case "success":
      return response.body;
    default:
      throw new Error("network error");
  }
};

const postItemToUser = async ({
  url,
  user,
  itemId,
  amount,
}: {
  url: string;
  user: string;
  itemId: string;
  amount: number;
}): Promise<void> => {
  const { postNoBody } = http;
  const requestBody = {
    item_id: itemId,
    amount,
  };
  const response = await postNoBody({
    url: `${url}/users/${user}/item`,
    requestBody,
  });
  switch (response.type) {
    case "success":
      return;
    default:
      throw new Error("network error");
  }
};

export const backendApi = {
  getUser,
  postItemToUser,
};
