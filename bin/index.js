var query = require("./query");
var runner = require("./runner");

query.then(answers => {
  runner(answers);
});
