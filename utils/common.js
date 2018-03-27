function print(msg) {
  console.log(msg);
}

// only log the errors
function logError(error) {
  if (!error) return 0;
  return console.error(("error: ", error));
}
module.exports = {
  print,
  logError
};
