var { exec } = require("child-process-promise");

var { logError, print } = require("./common");

function taskRunner(cmd, { preMsg, silence, postMsg }) {
  if (preMsg) print(preMsg);
  exec(cmd)
    .then(({ stdout, stderr }) => {
      if (!silence) {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      }
      return {
        stderr,
        stdout
      };
    })
    .then(() => {
      if (postMsg) print(postMsg);
    })
    .catch(logError);
}

module.exports = taskRunner;
