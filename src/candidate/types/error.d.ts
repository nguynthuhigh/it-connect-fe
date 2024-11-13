export interface ErrorWithResponse {
  response?: {
    data: {
      message?: string;
    };
  };
}
