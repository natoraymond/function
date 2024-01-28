class house {
    numberOfDoors = 3;

   static numberOfWindows = 5;
   
   openDoor(){
       console.log('The door is Open');
   }
   loseDoor(){
       console.log('The door is Close');
   }
}

const House = new house()

house.openDoor()
house.CloseDoor()