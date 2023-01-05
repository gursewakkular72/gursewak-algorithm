/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let c1 = 0;
  let c2 = 0;
  const mergedArr = [];
  let k = 0;
  const lenMergedArr = nums1.length + nums2.length;

  while (c1 < nums1.length && c2 < nums2.length) {
    if (nums1[c1] < nums2[c2]) {
      mergedArr[k] = nums1[c1];
      c1++;
    } else {
      mergedArr[k] = nums2[c2];
      c2++;
    }

    k++;
  }

  while (c1 < nums1.length) {
    mergedArr[k] = nums1[c1];
    k++;
    c1++;
  }

  while (c2 < nums2.length) {
    mergedArr[k] = nums2[c2];
    k++;
    c2++;
  }

  return mergedArr;
  // [1,3,5] [2,4,6]
  // [1] c1 = 1, c2 = 0
  //[1,2]  c1 = 1, c2 = 1
  //[1,2,3] c1 = 2, c2 = 1
  //[1,2,3,4] c1 = 2, c2 = 2
  // [1,2,3,4,5] c1 = 3, c2 = 2
  // [1,2,3,4,5,6] c1 = 3, c2 = 3
};

console.log(findMedianSortedArrays([1, 3, 5], [2, 4, 6]));

console.log(
  findMedianSortedArrays([2, 3, 10, 50, 55, 64, 96], [23, 34, 44, 55, 64])
);
