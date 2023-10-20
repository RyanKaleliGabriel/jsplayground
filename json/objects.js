const myJSON = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON);


let text = ""
for(const x in myObj)
{
    console.log(text += x + ", " );
}

for(const x in myObj){
    console.log(x +":"+myObj[x])
}