module.exports = scoreThrows;

var scoreArr = [];
var scoreOfRound = 0;
var bonus = 100;

function scoreThrows() {

 //========== for loop simulating 3 throws
  for( var i = 0; i < 3; i++ ) {

   //========== randomly generate radius value
   var radius = Math.floor( ( Math.random() * 20 ) + 1 );

   //========== give score values to the throws depending on radius value
    if( radius > 10 ) {
      scoreArr.push( 0 );
    } else if ( 5 <= radius && radius <= 10 ) {
      scoreArr.push( 5 );
    } else scoreArr.push( 10 );

    scoreOfRound += scoreArr[i];

    if(
      scoreArr[0] > 9 &&
      scoreArr[1] > 9 &&
      scoreArr[2] > 9 ) {
      scoreOfRound += bonus;
    }
  }
  console.log( scoreArr );
  return scoreOfRound;
}
console.log( scoreThrows() );