/**
 * A small helper to send consistent API responses.
 * @param {Object} res - Express response object
 * @param {number} statusCode - HTTP status code
 * @param {boolean} success - true for success, false for failure
 * @param {string} message - short description
 * @param {Object|null} data - payload (optional)
 * @param {Object|null} error - error details (optional)
 */

function sendResponse(
  res,
  statusCode,
  success,
  message,
  data = null,
  error = null
) {
  // base response
  const response = {
    success,
    message,
  };

  if (data) {
    response.data = data;
  }

  if (error) {
    response.error = error;
  }

  return res.status(statusCode).json(response);
}

module.exports = sendResponse;
