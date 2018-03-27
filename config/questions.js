// the prefix q means question
var qActivityType = {
  type: "list",
  name: "activityType",
  message: "你想生成什么样的活动样板代码？",
  choices: [
    "腰封底通",
    "首页弹层",
    {
      name: "积分商城定制",
      disabled: "暂不支持"
    },
    {
      name: "自定义活动工具",
      disabled: "暂不支持"
    },
    {
      name: "主会场",
      disabled: "暂不支持"
    },
    {
      name: "敬请期待",
      disabled: "暂不支持"
    }
  ]
};

var qActivityName = {
  type: "input",
  name: "activityName",
  message: "活动的名字是什么?(大小写不敏感)",
  filter: function(val) {
    return val.toLowerCase();
  },
  validate: function(value) {
    if (!value) return "请输出活动名字";
    return true;
  }
};

var qPageSize = {
  type: "list",
  name: "pageSize",
  message: "设计稿大小",
  choices: ["750", "640", "both"]
};

module.exports = [qActivityType, qActivityName, qPageSize];
