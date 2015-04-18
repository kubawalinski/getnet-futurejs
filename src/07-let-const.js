function() {
  {
    console.log(x); //should throw a ReferenceError
    let x = "start";
    y = "start";
    console.log(x,y); // start start
    {
      const z = "permanent";
      //z = "can't touch this";
      x = "inner";
      var y = "works everywhere";
      console.log(x,y,z); // inner works everywhere permanent
    }
    //let x = "new value"; //illegal
  }
  //x = "end";
  y = "end";
  console.log(y); // end
}();
