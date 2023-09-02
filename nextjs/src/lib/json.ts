import Ajv from "ajv/dist/jtd";
import { type SchemaObject } from "ajv/lib/types";
import { type JTDDataType } from "ajv/lib/types/jtd-schema";
const ajv = new Ajv();

export type JTDSchema = SchemaObject;
export type JTD<T> = JTDDataType<T>;

const serialize = (schema: JTDSchema, data: unknown): string => {
  try {
    const serializer = ajv.compileSerializer(schema);
    return serializer(data);
  } catch (e: unknown) {
    throw Error();
  }
};

const parse = <T>(schema: JTDSchema, json: string): T => {
  const parser = ajv.compileParser<T>(schema);
  const parsed = parser(json);
  if (parsed === undefined) {
    throw Error();
  }
  return parsed;
};

export const json = {
  serialize,
  parse,
};
