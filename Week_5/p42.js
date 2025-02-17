function check(x, y, z) {
    if (y > x && z > y) {
      return "strict mode"  
    } 
    else if (z > y) {
      return "Soft mode"
    } 
    else {
      return "Undefined"
    }
}
  console.log(check(10,11,12));
  console.log(check(10,8,9));
  console.log(check(10,9,8)); 
  