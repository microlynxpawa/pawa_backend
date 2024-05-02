export type TResult = { success: true; config: unknown } | { success: false; error: string };

export type TRService = {
  code: string;
  message: string
}

export interface TClient {
  code: string;
  message: string
}
