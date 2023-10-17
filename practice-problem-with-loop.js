//Practice Problem 1(display something for 39 times)
for(var i = 1; i < 40; i++){
    //console.log("Ajke amar mon valo nei");
}



//Practice Problem 2(display numbers between 58 to 98)
var number = [39, 59, 37, 58, 76, 50, 71, 30, 89, 69, 90, 100, 140]
for(var i = 0; i < 14; i++ ){
    var numbers = number[i];
    if(numbers >= 58 && numbers <=98){
        //console.log(numbers);
    }
}



//Practice Problem 3(show all even numbers from 412 to 456)
for(var i = 412; i <=456; i += 2){
    //console.log(i);
}




//Practice Problem 4(show all odd numbers from 581 to 623)
for(var i = 581; i <=623; i += 2){
    //console.log(i);
}




//Practice Problem 5(declare an array for all the topics you heve learned and dispiay them as an output)
var topics = ["html", "vanilla css", "tailwind css", "daisy ui", "basic of javascript"];
for(var i = 0; i < 5; i++ ){
    var topic = topics[i];
    //console.log(topic);
}




//Practice Problem 6(declare an array for all the mobile phones you heve used and dispiay them as an output by while loop)
var topics = ["shaomi", "nokia", "samsang", "realme", "oppo"];
var i = 0;
while(i < 5){

    var topic = topics[i];
    //console.log(topic);
    i++;
}





//Practice Problem 7(ran a loop from 30 to 86.... stop the loop if the value gets the higher of 44)
for(var i = 30; i<=86; i++){
    if(i == 45){
        break;
    }
    //console.log(i);
}



//Practice Problem 8(write the price of the books you have..display the prices if the price is lower thwn 200)
var booksPrice = [150, 290, 400, 280, 100, 49, 500];
for(i = 0; i < 7; i++){
    var booksPrices = booksPrice[i]; 
    if(booksPrices > 200){
        continue;
    }
    console.log(booksPrices);
}

