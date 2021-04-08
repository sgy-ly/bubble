// 求值的复杂表达式
function calculationStr(str) {
    function handleCalculation(numArr, num1, num2, char) {
        console.log("numArr=num1,num2,char",numArr,num1,num2,char);
        if (char == '+') {
            numArr.push(num1 + num2);
        } else if (char == '-') {
            numArr.push(num1 - num2);
        } else if (char == '*') {
            numArr.push(num1 * num2);
        } else if (char == '/') {
            numArr.push(num1 / num2);
        }
    }
    function isPop(char1, char2) {
        if ((char1 == '+' || char1 == '-') && (char2 == '+' || char2 == '-')) return true;
        if ((char1 == '+' || char1 == '-') && (char2 == '*' || char2 == '/')) return true;
        if ((char1 == '*' || char1 == '/') && (char2 == '*' || char2 == '/')) return true;
        if ((char1 == '*' || char1 == '/') && (char2 == '+' || char2 == '-')) return false;
    }
    // 分割字符串
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let t = str.charAt(i);
        let v = t;
        if (!isNaN(t)) {
            v = parseFloat(v);
        }
        arr.push(v);
    }
    console.log(arr);
    let charArr = [], numArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            numArr.push(arr[i]);
            console.log("numArr",numArr);
        } else {
            if (charArr.length) {
                // 存储字符的栈要一直出栈直到栈为空
                console.log("--------------------------");
                console.log("arr[i],charArr",arr[i],charArr[charArr.length - 1]);
                while (isPop(arr[i], charArr[charArr.length - 1])) {
                    let t2 = numArr.pop();
                    let t1 = numArr.pop();
                    let char = charArr.pop();
                    console.log("isPop-handleCalculation",numArr, t1, t2, char);
                    console.log("#############################");
                    handleCalculation(numArr, t1, t2, char);
                }
                if (arr[i] == ')') {
                    let st = charArr[charArr.length - 1];
                    // 遇到右括号也要一直出栈，直到遇到左括号，要注意边界问题
                    while (st != '(') {
                        let t1, t2;
                        let char = charArr.pop();
                        if (char != '(') {
                            t2 = numArr.pop();
                            t1 = numArr.pop();
                        }
                        // console.log("(-handleCalculation",numArr, t1, t2, char);
                        handleCalculation(numArr, t1, t2, char);
                        st = char;
                    }
                }
                if (arr[i] != ')') {
                    charArr.push(arr[i])
                }
            } else {
                charArr.push(arr[i]);
            }
        }
    }
    // 最后字符栈如果还有字符，要一直出栈直到为空
    console.log(charArr, numArr);
    while (charArr.length) {
        let t2 = numArr.pop();
        let t1 = numArr.pop();
        let char = charArr.pop();
        handleCalculation(numArr, t1, t2, char);
    }
    return numArr[0];
}
const str = "6*(4/2*(2-2))+3*1";
console.log('formula: ' + calculationStr(str))
