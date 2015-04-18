var name = "Bob";
var bob = {
  name,
  friends: ["John", "Tom"],
  printFriends() {
    this.friends.forEach(f =>
    {
      console.log(this.name + " knows " + f);
    });
  }
};

bob.printFriends();
//Bob knows John
//Bob knows Tom