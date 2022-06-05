/**
 * Gets the status code from the given error.
 *
 * @param {Object} error the error object to be analysed.
 * @returns {number} the status code number.
 */
 exports.getErrorStatusCode = (error) =>
 error.statusCode || error.status || error.code || 500;
