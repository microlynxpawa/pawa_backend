export type TResult =
  | { success: true; config: unknown; responseData?: any }
  | { success: false; error: string; responseData?: any };

export type TRService = {
  code: string;
  message: string;
};

export interface TClient {
  code: string;
  message: string;
}

export type ResponseMessage = {
  code: string;
  status: string;
  message: string;
};
