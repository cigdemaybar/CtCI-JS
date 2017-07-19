function pangram(input){
  var lower = input.toLowerCase();
  var chars = new Set(lower);
  var result = chars.size === 27 ? 'pangram' : 'not pangram';
  console.log( result );
}

//alphabet 26 characters plus space 27
