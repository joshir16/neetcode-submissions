class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        if(!s.length) return 0

        let sum = 0;

        for(let i = 0; i < s.length -1 ; i++){
            sum += Math.abs(s[i].charCodeAt(0) - s[i+1].charCodeAt(0))
            console.log(sum)
        }

        return sum;
    }
}
