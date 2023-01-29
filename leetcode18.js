// const nums1: number[] = [1,0,-1,0,-2,2], target1: number = 0
// // [-2, -1, 0, 0, 1, 2]
// // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// var fourSum = function(nums: number[], target: number): number[][] {
//   interface MyMap {
//     [key: string]: number[][]
//   }
//   let map: MyMap = {} 
//   let sortAry: number[] = nums1.sort((a, b) => a - b)
//   for (let i = 0; i < sortAry.length; i++) {
//     for (let j = 0; j < sortAry.length; j++) {
//       let key: number = sortAry[i] + sortAry[j]
//       if(key > 0) {
//         map[key] = []
//         map[key].push([sortAry[i], sortAry[j]])
//       }
//     }
//   }
// //   console.log(map)
//   for (let i = 0; i < nums.length; i++) {
//   }
//   return [[1]]
// };
// fourSum(nums1, target1)
var nums = [-1, 0, 1, 2, -1, -4];
// [-4, -1, -1, 0, 1, 2]
var threeSum = function (nums) {
    var sortAry = nums.sort(function (a, b) { return a - b; });
    var resAry = [];
    for (var i = 0; i < sortAry.length; i++) {
        var l = i + 1;
        var r = nums.length - 1;
        if (sortAry[i] > 0)
            return resAry;
        if (sortAry[i] === sortAry[i - 1])
            continue;
        while (l < r) {
            var left = sortAry[l];
            var right = sortAry[r];
            var threeSum_1 = sortAry[i] + sortAry[l] + sortAry[r];
            if (threeSum_1 < 0) {
                l++;
            }
            else if (threeSum_1 > 0) {
                r--;
            }
            else {
                resAry.push([sortAry[i], left, right]);
                // 去重
                while (l < r && sortAry[l] === sortAry[l + 1]) {
                    l++;
                }
                while (l < r && sortAry[r] === sortAry[r - 1]) {
                    r--;
                }
            }
            l++;
            r--;
        }
    }
    return resAry;
};
console.log(threeSum(nums));
