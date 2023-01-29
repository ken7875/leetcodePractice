// const n = 4, k = 2
// let result = []
// let path = []
// var combine = function(n, k) {
//     result = []
//     combineHelper(n, k, 1)
//     return result
// };
// const combineHelper = (n, k, startIndex) => {
//     console.log(startIndex, 'outside')
//     if (path.length === k) {
//         result.push([...path])
//         return
//     }
//     // console.log(startIndex)
//     for (let i = startIndex; i <= n - (k - path.length) + 1; ++i) {
//         path.push(i)
//         console.log(n - (k - path.length) + 1, 'for total')
//         console.log(startIndex, i, 'for i')
//         combineHelper(n, k, i + 1)
//         console.log('pop')
//         path.pop()
//     }
// }

// combine(n, k)
let n = 4, k = 2
var combine = function(n, k) {
    let res = []
    let startIdx = 1

    backtrick(n, k, startIdx)

    function backtrick (n, k, startIdx) {
      let path = []
      if(path.length === k) {
        console.log(path)
        res.push([...path])
        return
      }

      for (let i = startIdx; i < n; i++) {
        path.push(i)

        backtrick(n, k, startIdx + 1)

        path.pop()
      }
    }

    return res
  };

  console.log(combine(n, k))