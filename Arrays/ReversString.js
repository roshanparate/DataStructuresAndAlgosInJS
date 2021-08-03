function reverse(str){

  if(!str || typeof str !== 'string' || str.length < 2 ) return str;

  const revArray = [];
  totalItems= str.length - 1;
  for(let i = totalItems; i >=0 ; i--){
    revArray.push(str[i])
  } 

  return revArray.join('');
}

function reverse2(str){
  return str.split('').reverse().join('');
}

const reverse3 = str => str.split('').reverse().join('');

const reverse4 = str => [...str].reverse().join('');

//reverse("My Name is Roshan");
reverse4("I am working in CITI Crop")