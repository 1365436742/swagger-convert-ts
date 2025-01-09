import express from "express";
import type * as http from "http";
import type * as httpProxy from "http-proxy";
export interface ProxyMockPluginOptions {
  /** 端口 */
  port?: number;
  /** 储存路径 */
  savePath?: string;
}
export interface Request extends express.Request {}
export interface Response extends express.Response {}
export type OnProxyReqCallback = (
  proxyRes: http.ClientRequest & Request,
  req: http.ClientRequest & Request,
  res: Response
) => Promise<void>;
