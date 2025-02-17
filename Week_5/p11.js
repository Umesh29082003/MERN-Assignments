function cToF(cel) 
{
  var far = cel * 9 / 5 + 32;
  var str = cel+"\xB0C is " + far + ' \xB0F.';
    console.log(str);
}

function fToC(far) 
{
  var cel = (far - 32) * 5 / 9;
  var str = far+'\xB0F is ' + cel + '\xB0C.';
    console.log(str);
} 
cToF(60);
fToC(45);