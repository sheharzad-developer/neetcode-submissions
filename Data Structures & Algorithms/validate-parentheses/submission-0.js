class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        let map = {
            "{" : "}",
            "[" : "]",
            "(" : ")",
        }
        for(let i = 0; i < s.length; i++){
            if(map[s[i]]){
            // if(s[i] === "{" || s[i] === "[" || s[i] === "("){
                stack.push(s[i]);
            }

            else {
                let top = stack.pop();
                if(!top || s[i] != map[top]) {
                    return false;
                }
            }
        }
        return stack.length === 0;
        }
}
