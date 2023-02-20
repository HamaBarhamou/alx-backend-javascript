module.exports = function displayMessage(message) {
  return process.stdout.write(`${message}\n`);
};
