class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let counter = 0;
        let result = 0

        for(let i = 0; i < nums.length; i++ ){
            if(nums[i] === 1) {
                counter++;
            }
            else {
                counter = 0
            }
            result = Math.max(result, counter)
            console.log(result)
        }

        return result

    }
}
