var branchMapping = require("../config/module");
var taskRunner = require("../utils/taskRunner");

module.exports = function runner(answers) {
  console.log(JSON.stringify(answers, null, "  "));

  // 1. 切换分支
  const branchName = branchMapping[answers.activityType];
  taskRunner(`git checkout ${branchName}`, {
    preMsg: `正在切换到${branchName}`,
    silence: true,
    postMsg: "done"
  });
};
