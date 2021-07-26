function countLetters( str )
{
  let result = {};
  let char = '';
  let count = 0; 
  // checking string is valid or not
  if( str.length == 0 )
  {
    console.log("Invalid string")
    return;
  }
 // for loop to iterate over the string
 
  for( let i = 0 ;i < str.length ;i++) {
    char = str.charAt(i);
    count = str.split(char).length-1
    result[char] = count;
  }
  delete result[' '];
  return result;
  
 
}
console.log(countLetters("lighthouse in the house"));