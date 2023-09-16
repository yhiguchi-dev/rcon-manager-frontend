interface NetworkError extends Error {
  name: "NetworkError";
  code: number;
}

interface NetworkErrorConstructor extends ErrorConstructor {
  new (code: number, message?: string): NetworkError;
  (message?: string): NetworkError;
  readonly prototype: NetworkError;
}

declare const NetworkError: NetworkErrorConstructor;

interface UnknownHttpStatusError extends Error {
  name: "UnknownHttpStatusError";
  code: number;
}

interface UnknownHttpStatusErrorConstructor extends ErrorConstructor {
  new (code: number, message?: string): UnknownHttpStatusError;
  (code: number, message?: string): UnknownHttpStatusError;
  readonly prototype: UnknownHttpStatusError;
}

declare const UnknownHttpStatusError: UnknownHttpStatusErrorConstructor;

interface JSONParseError extends Error {
  name: "JSONParseError";
}

interface JSONParseErrorConstructor extends ErrorConstructor {
  new (message?: string): JSONParseError;
  (message?: string): JSONParseError;
  readonly prototype: JSONParseError;
}

declare const JSONParseError: JSONParseErrorConstructor;

interface JSONSerializeError extends Error {
  name: "JSONSerializeError";
}

interface JSONSerializeErrorConstructor extends ErrorConstructor {
  new (message?: string): JSONSerializeError;
  (message?: string): JSONSerializeError;
  readonly prototype: JSONSerializeError;
}

declare const JSONSerializeError: JSONSerializeErrorConstructor;
