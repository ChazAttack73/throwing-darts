var chai = require('chai');
var expect = chai.expect;
chai.should();

var scoreThrows = require( '../throwing-darts.js');

describe( 'scoreThrows', function() {
  it( 'should exist', function () {
    expect( scoreThrows ).to.exist;
    expect( scoreThrows ).to.be.a( 'function' );
  });
});