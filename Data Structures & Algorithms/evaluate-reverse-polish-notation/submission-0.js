class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        for(let i = 0; i < tokens.length; i++){
            let token = tokens[i];

            if(token === "+" || token === "-" || token === "*" || token === "/"){
                let b = stack.pop();
                let a = stack.pop();
                let result;

                switch(token){
                    case "+": result = a + b; break;
                    case "-": result = a - b; break;
                    case "/": result = Math.trunc(a / b); break;
                    case "*": result = a * b; break;
                }
                    stack.push(result);
                }
                else {
                    stack.push(Number(token));
                }
            }

        return stack.pop();
    }
}
