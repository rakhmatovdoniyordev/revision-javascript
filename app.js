{
    //8-masala
    let nums = [2, 7 , 11, 15]
    let target = 9
    let newArray = []
    for(let i = 0; i < nums.length; i++){
        for(let g = 0; g < i; g++){
            if((nums[i] + nums[g]) === target){
                newArray.push(g, i)
            }
        }
    }
    console.log(newArray);
}

{
    //9-masala
    let arr = [1, 3, 2, 2, 3]
    let newArray = []
    for(let  i = 0; i < arr.length; i++){
        if(!newArray.includes(arr[i])){
            newArray.push(arr[i])
            newArray.sort((a,b)=>a-b)
        }
    }
    console.log(newArray);
}


{
    //10-masala
    function gatLevel(n){
        let sum = 1
        let arr = []
        for(let i = 1; i <= n; i++){
            sum = 2**i
            arr.push(sum)
        }
        return arr
    }
    console.log(gatLevel(5));
}

{
    //11-masala
    const total = (n) => {
        let str = n.toString().split("").map(item => parseInt(item));
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += str[i];
        }
        return sum;
    }
    console.log(total(452));
}

{
    //12-masala
    const foo = (n) => {
        let total = 0
        for(let i = 0; i < n.length; i++){
            total += n[i]
        }
        return total.toString().split("").map(item=>parseInt(item))
    }
    console.log(foo([1, 22, 3]));
}

{
    //13-masala
    function palOrNot(arg){
        let str = arg.toString().split("").reverse().join("")
        if(arg == str){
            return "palindrom"
        }else{
            return "palindrom emas"
        }
    }
    console.log(palOrNot("wew"));
}

{
    //14-masala
    const obj = {
        a: 1,
        b: 22
    }
    let sum = 0
    for(let index in obj){
        sum += obj[index]
    }
    console.log(`object ning valuelari yig'indisi: ${sum}`);
    let total = sum.toString().split("").map(item=>parseInt(item)).reduce((a,b) => a+b)
    console.log(`value larining yigindising raqamlar yig'indisi: ${total}`);
}

{
    //15-masala
    function vowel(str){
        let count = 0
        for(let i = 0; i <= str.length; i++){
            if("aoueiAOUEI".includes(str[i])){
                count++
            }
        }
        return `Berilgan matndagi unlilar soni: ${count}`
    }
    console.log(vowel("Najottalim"));
}

{
    //16-masala
    function getInitialOdds(n){
        let  newArray = []
        let count = 0
        for(let i = 1; count < n; i+=2){
            newArray.push(i);
            count++
        }
        return newArray
    }
    console.log(getInitialOdds(3));
}

{
    //17-masala
    let mergeTwoLists = function(list1, list2){
        let result = [...list1, ...list2]
        return result.sort((a,b)=>a-b)
    }
    console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
}

{
    //18-masala
    function foo(arr){
        let newArray = []
        for(let i = 0; i < arr.length; i++){
            for(let g = i + 1; g < arr.length; g++){
                if(arr[i] === arr[g] && !newArray.includes(arr[i])){
                    newArray.push(arr[i])
                }
            }
        }
        return newArray
    }
    console.log(foo([1, 3, 7, 2, 7, 14, 23, 3]));
}

{
    //19-masala qo'shimcha
    let reverse = function(x) {
        let result = x.toString().split("").map(index=> parseInt(index)).reverse()
        return Number(result.join(""))
    };
    console.log(reverse(123));
}

{
    //21-masala qo'shimcha
    function primeNumber(n){
        let count = 0
        for(i = 0; i <= n; i++){
            if(n % i == 0){
                count++
            }
        }
        if(count == 2){
            return `${n} soni tub son`
        }else{
            return `${n} soni tub son emas`
        }
    }
    console.log(primeNumber(7));
}