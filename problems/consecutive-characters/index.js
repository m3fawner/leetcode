// https://leetcode.com/problems/consecutive-characters/

module.exports = function(s) {
    let currentLetter = s[0];
    let currentSize = 0;
    let maxSize = 0;
    for(let i = 0; i <= s.length; i++) {
        if (currentLetter === s[i]) {
            currentSize++;
        } else {
            maxSize = Math.max(maxSize, currentSize);
            if (s.length - maxSize > 0) {
                currentLetter = s[i];
                currentSize = 1;                
            } else {
                break;
            }
        }
    }
    return maxSize;
};