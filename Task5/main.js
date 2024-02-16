function Evennum() {
    console.log("##### problem 1 #####");
    for (let i = 0; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
Evennum();

function table() {
    console.log("##### problem 2 #####");
    for (let x = 1; x <= 10; x++) {
        console.log(`table of ${x}`);
        for (let y = 1; y <= 12; y++) {
            console.log(`${x} x ${y} = ${x * y}`);
        }
    }
}
table();

function removespace() {
    console.log("##### problem 3 #####");
    let str = " osama ahmed elazab ";
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === ' ') {
            str = str.replace(' ', '');
        }
    }
    // str = str
    //     .split("")
    //     .filter((a) => a.trim().length)
    //     .join("");
    console.log(str);
}
// removespace();

function bool10(){
    console.log("##### problem 4 #####");
    let x=10;
    return x%10===0?true:false;
}
console.log(bool10());

function countvowel(){
    console.log("##### problem 5 #####");
    let str='aeiouAEIOU', count=0;
    for(let s=0;s<str.length;s++){
        if(str.includes('a','e','i','o','u','A','E','I','O','U')){
            count++;
        }
    }
    return count;
}
console.log(countvowel());