//stringify is basically make every value and property from an object make it in string like in the double quote("");

const user = {id :1, name: 'gorib amir', job: 'actor'};
const stingified = JSON.stringify(user);
// const parse = JSON.parse(user);
// console.log(user);
// console.log(stingified);



// JSON.parse start from here;

const shop ={
      owner: 'alia',
      address : {
            street : 'ranbir',
            city : 'kocu khet vhuter goli',
            country : 'BD',
      },
      products : ['laptop', 'mic', 'monitor', 'keyboard'],
      revenue : 4500000,
      isOpen : true,
      isNew : false,
};
console.log(shop);
const shopJson = JSON.stringify(shop);
const shopObj = JSON.parse(shopJson);
console.log(shopJson);
console.log(shopObj);