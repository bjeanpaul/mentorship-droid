export class NetworkError {}


export class ApiResponseError {
  constructor(message, response = null) {
    this.message = message;
    this.response = response;
  }
}


export class ApiAuthenticationError extends ApiResponseError {}
export class ApiNotFoundError extends ApiResponseError {}
