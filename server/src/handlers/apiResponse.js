class ApiResponse {
  constructor(status = 200, data) {
    this.status = status;
    this.data = data;
  }
}

export default ApiResponse;
