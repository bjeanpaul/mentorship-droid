export class ApiResponseError {
  constructor(message, response = null) {
    this.message = message;
    this.response = response;
  }
}


export class ApiForbiddenError extends ApiResponseError {}
export class ApiNotFoundError extends ApiResponseError {}
