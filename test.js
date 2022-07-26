class test{
  constructor(){
    this.id = 1;
    this.type();
    this.name = "one";
  }
  type(){
    console.log(this.name);
    setTimeout(() => {
      console.log(this.name);
      console.log("waiting")
    }, 0.1)
    for(var i = 0; i < 9999; i++){
      console.log(this.name);
    }for(var i = 0; i < 9999; i++){
      console.log(this.name);
    }
  }
}

new test();