import { IncomingMessage, ServerResponse } from "http";

export type HandleFnType = (req: IncomingMessage, res: ServerResponse, done: NextFnType) => void;
export type MethodType = "GET" | "POST" | "PUT" | "DELETE" | "*";

export type RouteType = {
  path: string;
  method: MethodType;
  handle: HandleFnType;
};

export type RouteMethodType = { [key: string]: boolean };

export type NextFnType = (err?: any) => void;
