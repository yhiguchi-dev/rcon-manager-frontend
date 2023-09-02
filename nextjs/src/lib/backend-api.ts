import { http } from "@/lib/http";
import { JTD } from "@/lib/json";

const userResponse = {
  properties: {
    users: {
      elements: {
        type: "string",
      },
    },
  },
} as const;

type UserResponse = JTD<typeof userResponse>;

const getUser = async ({ url }: { url: string }): Promise<string[]> => {
  const { get } = http;
  const response = await get({
    url,
    path: "users",
  });
  switch (response.type) {
    case "success":
      const body = await response.body<UserResponse>(userResponse);
      return body.users;
    default:
      throw new Error("network error");
  }
};

const itemToUserRequest = {
  properties: {
    item_id: {
      type: "string",
    },
    amount: {
      type: "int32",
    },
  },
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
  const { post } = http;
  const data = {
    item_id: itemId,
    amount,
  };
  const response = await post({
    url,
    path: `users/${user}/item`,
    requestBody: {
      schema: itemToUserRequest,
      data,
    },
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
