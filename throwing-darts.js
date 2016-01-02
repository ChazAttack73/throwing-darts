module.exports = scoreThrows;

var scoreArr = [];

function scoreThrows( arr ) {

  for( var i = 0; i < 3; i++ ) {
    var radius = Math.floor((Math.random() * 20) + 1);
    console.log(radius);
      if( radius > 10 ) {
        scoreArr.push( 0 );
      } else if ( 5 <= radius && radius <= 10 ) {
        scoreArr.push( 5 );
      } else scoreArr.push( 10 );
  } return scoreArr;
}

console.log( scoreThrows( scoreArr));