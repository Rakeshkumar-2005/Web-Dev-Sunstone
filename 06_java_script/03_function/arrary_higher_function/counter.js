// function counter(initialvalue){
//    let count = initialvalue;
//    return{
//     increase(value){
//       count += value;
//       console.log(`increase:${value},current value: ${count}`);
//     },
//     decrease(value){
//       count -= value;
//       console.log(`decrese:${value},current value: ${count}`);
//     },
//     reset(){
//       console.log(`current value:${count}`);
//     },
//    };
// }

// let user = counter(100);
// user.increase(50);
// user.decrease(100);
// user.reset();

function VendingMachine() {
    let insertedValue = 0;

    let inventory = {
        soda: { price: 50, stock: 5 },
        chips: { price: 20, stock: 3 }
    };
    return{
      insertCoin(coin){
        insertedValue += coin;
        console.log(`inserted value :${insertedValue}`);
      },

      buyItem(item){
        let itemExist = inventory[item];
        if(itemExist){
          if(itemExist.price>insertedValue){
            console.log("Insert more coins!");
          }
          else if(itemExist.stock<=0){
            console.log("bhai khatam ho gya ");
          }
          else{
            insertedValue -=itemExist.price;
            itemExist.stock -=1;
            console.log("mil gya bhai tere item !!!");
          }

        }

      },

    };

  }

  let user = VendingMachine();
  user.insertCoin(20);
  user.buyItem("chips");