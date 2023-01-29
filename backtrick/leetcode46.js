// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
var permute = function(nums) {
    let startIdx = 0
    let res = []
    let path = []

    backtrickHelper(startIdx, path)
    function backtrickHelper (startIdx, path){
        if(path.length === nums.length) {
            res.push([...path])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if(path.includes(nums[i])) {
                continue
            }
            path.push(nums[i])
            backtrickHelper(startIdx + 1, path)
            path.pop()
        }
    }

    return res
};

console.log(permute([1]));