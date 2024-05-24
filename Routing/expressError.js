class ExpressError extends Error {
  constructor(message, status) {
    super(message); 
    this.status = status;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ExpressError);
    }
  }
}

export default ExpressError;