const task = [
  {
    id: "6f4452df-c109-4da8-852b-b06b29f52366",
    title: "Đi học",
    completed: true,
  },
  {
    id: "9342afb7-9476-4b02-b1d2-ebb559f6fd1d",
    title: "Đi chợ",
    completed: false,
  },
  {
    id: "1b810e56-bc2f-4f9e-a2ba-4121bd3e528f",
    title: "Đi về quê",
    completed: false,
  },
  {
    id: "7ed34a58-3860-4128-a156-6678feebbe81",
    title: "Ăn cơm",
    completed: false,
  },
  {
    id: "202fab3c-4927-4c59-a4ec-85ca0626f397",
    title: "Đi ngủ",
    completed: false,
  },
];
var result = [];
function getTaskByFilter(statusType) {
  // Do somthing here
  // tips: Use map, filter
  result = task
    .filter(function (item) {
      if (statusType === "completed") {
        return item.completed === true;
      } else return item.completed === false;
    })
    .map(function (item) {
      return item.title;
    });
  return result; // it should be array
}
function countResult(result) {
  let countResult;
  countResult = result.reduce(function (countResult) {
    return countResult + 1;
  }, 0);
  return countResult;
}
//
getTaskByFilter("completed");
getTaskByFilter("active");
countResult(result);
console.log(getTaskByFilter("completed"));
console.log(getTaskByFilter("active"));
console.log(countResult(result));
/***
 * Case 1
 * input: "completed"
 * output: ["Đi học"]
 *
 * Case 2
 * input: "active"
 * output: ["Đi chợ", "Đi về quê", "Đi ngủ", "Ăn cơm"]
 */

// BONUS đếm số phần tử là active ( dùng filter, reduce,...)
