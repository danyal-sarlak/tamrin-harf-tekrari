let name = 'dani';
var isname = name.split("");
var hasDuplicate = false;
var seenChars = [];
isname.forEach((char)=>{
if(seenChars.includes(char)){
    console.log('err');
    hasDuplicate = true
}else{
    seenChars.push(char);
    console.log('ok');
}

})

if(hasDuplicate){
    console.log('the charctor has doplicte');
}else{
    console.log('the carctur dont have doplicate');
}




