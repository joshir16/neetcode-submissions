class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        if(!s.length) return 0

        let sum = 0;
            let curValue = s.charCodeAt(0);

        for(let i = 0; i < s.length -1 ; i++){

            let nextValue = s.charCodeAt(i+1);
            sum += Math.abs(curValue - nextValue)
            console.log(sum)
            curValue = nextValue
        }

        return sum;
    }
}
