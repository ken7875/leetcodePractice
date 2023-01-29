// const nums = [1,-2,-5,-4,-3,3,3,5], target = -11
const nums = [1,0,-1,0,-2,2], target = 0
// [-2, -1, 0, 0, 1, 2]
var fourSum = function(nums, target) {
  if(nums.length < 4) return [];
  nums = nums.sort((a, b) => a - b)
  let resAry = []
  for(let i = 0; i < nums.length - 3; i++) {
    // if(nums[i] > target) return resAry
    if(i > 0 && nums[i] === nums[i - 1]) continue

    for (let k = i + 1; k < nums.length - 2; k++) {

        if(k > i + 1 && nums[k] === nums[k - 1]) continue
        let l = k + 1, r = nums.length - 1
        while(l < r) {
            const sum = nums[i] + nums[k] + nums[l] + nums[r]
            // if(sum < target) {l++; continue}
            // if(sum > target) {r--; continue}

            // resAry.push([nums[i], nums[k], nums[l], nums[r]])
            // while(l < r && nums[l] === nums[++l]);
            // while(l < r && nums[r] === nums[--r]);
            if(sum < target) {
              l++
            } else if(sum > target) {
              r--
            } else {
              resAry.push([nums[i], nums[k], nums[l], nums[r]])
            //   while(l < r && nums[l] === nums[l + 1]) {
            //     l++
            //   }
            //     while(l < r && nums[r] === nums[r - 1]) {
            //     r--
            //   }
            while(l < r && nums[l] === nums[++l]);
            while(l < r && nums[r] === nums[--r]);
            }
            // l++
            // r--
        };
    };
  };

  return resAry
};

console.log(fourSum(nums, target));