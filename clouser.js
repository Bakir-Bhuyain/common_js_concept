// closure holo emn ekta function jeta hocche normally jonmo sthan er memory(scope) dhore rakhte help kore, jonmo sthan dhongsho hoye jawar poreo ; 
/**
 * closure ashole hocche ekta function er bhitore arekta function thakai hocche closure
 * normally function ta hocche j dhoro kaj sesh howar pore memory theke variable muche jawar kotha ;
 * kintu closure ta hocche mainly tar tar parent function ta r variable gula tar sathe kore niye cole just like a bagpack for this reason main function ta tar kaj sesh howarpor variable gula muche jay na borong closure er sathe cola col kore .
 * 
*/

// with code example 
function stopWatch (){
      let count = 0; // this is a outer variable
      return function(){
            count++; //in here the inner function is using the outer variable;
            return count; // returning the function;
      }
}
const clock1 = stopWatch(); // in here calling the parent function, so that basically here is like when we call the function here first the variable should be execute its work and will be returned but it wont be happen; which is like remove from the memory;
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock1());

