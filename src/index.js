module.exports = function check(str, bracketsConfig) {
    let stack = [];

    for (let bracket of str) {
        for (let pair of bracketsConfig) {
            if (bracket === pair[1]) {
                if (pair[0] === pair[1]) {
                    if (stack[stack.length - 1] === bracket) {
                        stack.pop();
                        break;
                    }
                    stack.push(bracket);
                    break;
                }

                if (stack.pop() !== pair[0]) return false;
            }

            if (bracket === pair[0]) {
                stack.push(bracket);
                break;
            }
        }
    }

    return !stack.length;
};
