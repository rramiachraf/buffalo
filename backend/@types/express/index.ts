declare module Express {
  export interface Request {
    rawBody: Buffer
  }
}
