const message = 'Hello world' // Try edit me

// Update header text
//document.querySelector('#header').innerHTML = message

// Log to console
console.log(message)

const stringarrayData = [1,23,543];
var arrayData = stringarrayData.values();
console.log(arrayData);
for(var item of arrayData)
{
  console.log(item);
}

console.log(stringarrayData.length); 

const arr = ['test','abc','new'];
arr.reverse();
console.log(arr);

const arr2 = [54,34,654,2354,645,3];
console.log(arr2);

console.log(arr2.at(5)); //Zero index based

const array2 = ['test', '52345', 23, 43];
array2.fill("naga", 2, 3);
console.log(array2);

console.log("--------------------")
console.log("from")
const arr3 = [4,435,23];
const arr3a = Array.from(arr3);
console.log(arr3a);
console.log("--------------------")
console.log("join")
const arrJoin = [234,423,534,24,'a','b','fgh'];
console.log(arrJoin.join(', '));
console.log("--------------------")
console.log("toString")
const arrTstring = [234,2,54,23,6];
console.log(arrTstring.toString());
console.log("--------------------")
console.log("pop")
const arrPop = [23,345,6452];
console.log(arrPop.pop());
console.log(arrPop.toString());

console.log("--------------------")
console.log("forEach")
const arrForeach = [234,34,54];
arrForeach.forEach(function(item){
	console.log(item);
}
);

arrForeach.forEach(function(x){
	console.log(x);
}
);

arrForeach.forEach((ab)=>{
	console.log('data:'+ ab);
}
);
console.log("--------------------")
console.log("copy within")
const arrCopywithin = [23,234,'test', 'abc','bbc','kkn'];
arrCopywithin.copyWithin(3,0,2);
console.log(arrCopywithin);

console.log("--------------------")
console.log("unshift")
const arrUnshift = [23,354,46,67];
const arrRslt = arrUnshift.unshift(233,435);
console.log(arrUnshift);
console.log(arrRslt);


console.log("--------------------")
console.log("concat")
const arConcat1 = [25,652,345,54];
const arConcat2 = [84,978];
console.log(arConcat1.concat(arConcat2));
console.log(arConcat1);

console.log("--------------------")
console.log("flat")
const arrFlat = [23,[2756,843],98,[28,[54,90]]]
console.log(arrFlat.flat(Infinity));

console.log("--------------------")
console.log("lastIndexOf, indexOf")
const vlastind = [32,53,34,6,7,90,86,89,6];
console.log(vlastind.lastIndexOf(6));
console.log(vlastind.indexOf(6));
