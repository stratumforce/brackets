module.exports = function check(str, bracketsConfig) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        const bracket = str[i];

        for (let j = 0; j < bracketsConfig.length; j++) {
            if (bracket === bracketsConfig[j][0]) {
                if (bracket === bracketsConfig[j][1]) {
                    if (stack[stack.length - 1] === bracket) {
                        stack.pop();
                        break;
                    }
                }

                stack.push(bracket);
                break;
            }

            if (bracket === bracketsConfig[j][1]) {
                if (stack.pop() !== bracketsConfig[j][0]) {
                    return false;
                }

                break;
            }
        }
    }

    return stack.length === 0;
};
