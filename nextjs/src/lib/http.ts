import { json, JTDSchema } from "@/lib/json";

const _get = async ({
  url,
  path,
  queries,
  headers,
}: Omit<HttpRequest, "method">): Promise<HttpResponse> => {
  const response = await send({ url, path, queries, method: "GET", headers });
  return resolve(response);
};

const _post = async ({
  url,
  path,
  headers,
  requestBody,
}: Omit<HttpRequest, "method">): Promise<HttpResponse> => {
  const response = await send({
    url,
    path,
    method: "POST",
    headers,
    requestBody: requestBody,
  });
  return resolve(response);
};

const _put = async ({
  url,
  path,
  headers,
  requestBody,
}: Omit<HttpRequest, "method">): Promise<HttpResponse> => {
  const response = await send({
    url,
    path,
    method: "PUT",
    headers,
    requestBody: requestBody,
  });
  return resolve(response);
};

const _delete = async ({
  url,
  path,
  headers,
}: Omit<HttpRequest, "method">): Promise<HttpResponse> => {
  const response = await send({ url, path, method: "DELETE", headers });
  return resolve(response);
};

const send = async ({
  url,
  path,
  queries,
  method,
  headers,
  requestBody,
  timeout = 3000,
}: HttpRequest): Promise<Response> => {
  const controller = new AbortController();
  const _timeout = setTimeout(() => {
    controller.abort();
  }, timeout);
  try {
    const urlValue = new URL(path, url);
    if (queries !== undefined) {
      console.log(new URLSearchParams(queries).toString());
      urlValue.search = new URLSearchParams(queries).toString();
    }
    const body = serializeRequestBody(requestBody);
    return await fetch(urlValue, {
      method,
      headers: {
        ...headers,
        "content-type": "application/json",
      },
      body,
      signal: controller.signal,
      mode: "cors",
      cache: "no-store",
    });
  } finally {
    clearTimeout(_timeout);
  }
};

const serializeRequestBody = (requestBody?: RequestBody) => {
  if (requestBody !== undefined) {
    const { serialize } = json;
    return serialize(requestBody.schema, requestBody.data);
  }
  return undefined;
};

const resolve = (response: Response): HttpResponse => {
  const body = async <T>(schema: JTDSchema): Promise<T> => {
    const { parse } = json;
    const responseJson: unknown = await response.json();
    return parse<T>(schema, JSON.stringify(responseJson));
  };
  if (response.ok) {
    return {
      type: "success",
      code: response.status,
      body,
    };
  }
  const code = response.status;
  if (code >= 400 && code <= 499) {
    return {
      type: "clientError",
      code,
      body,
    };
  }
  if (code >= 500 && code <= 599) {
    return {
      type: "serverError",
      code,
      body,
    };
  }
  throw new Error("unknown http status");
};

type Method = "GET" | "POST" | "PUT" | "DELETE";

interface HttpRequest {
  url: string;
  path: string;
  queries?: Record<string, string>;
  method: Method;
  headers?: Record<string, string>;
  requestBody?: RequestBody;
  timeout?: number;
}

interface RequestBody {
  schema: JTDSchema;
  data: unknown;
}

interface Success {
  type: "success";
  code: number;
  body: <T>(schema: JTDSchema) => Promise<T>;
}

interface ClientError {
  type: "clientError";
  code: number;
  body: <T>(schema: JTDSchema) => Promise<T>;
}

interface ServerError {
  type: "serverError";
  code: number;
  body: <T>(schema: JTDSchema) => Promise<T>;
}

type HttpResponse =
  | Readonly<Success>
  | Readonly<ClientError>
  | Readonly<ServerError>;

export const http = {
  get: _get,
  post: _post,
  put: _put,
  delete: _delete,
};
