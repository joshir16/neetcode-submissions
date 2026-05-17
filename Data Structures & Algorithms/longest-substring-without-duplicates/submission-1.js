class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(!s.length) return 0

        let window = new Set();
        let l = 0
        let max = 0;

        for(let r = 0; r < s.length; r++){
            while(window.has(s[r])){
                window.delete(s[l])
                l++
            }
            window.add(s[r])
            max = Math.max(max, window.size)
        }

        return max
    }
}
