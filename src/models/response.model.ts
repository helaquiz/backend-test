export class SuccessResponse {
  code: number = 0;
  status: boolean = true;
  msgInfo: string = "";
  data: any[] = [];

  constructor(functionName: string = 'Function is not define.', result: any = null) {
    this.msgInfo = `${functionName}() is finished`;
    this.data = result;
  }
}

export class ErrorResponse {
  code: number = 0;
  status: boolean = false;
  msgInfo: string = "";
  message: string = "";
  errors: any = [];

  constructor(functionName: string = 'Function is not define.', errors: any = { errMsg: "NOT FOUND", message: "ผิดพลาด" }, code = 1) {
    this.code = code;
    this.msgInfo = `${functionName}() is finished`;
    this.errors = errors;
    this.message = errors.message;
  }
}