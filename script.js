let food = "";
let description = "";
let audio = "";
const wrapper = document.querySelector('.hide')
const resultPlaceholder = document.querySelector('.result-container')
const descriptionPlaceholder = document.querySelector('.description-container')
const submitButton = document.querySelector('.submit-button')


submitButton.addEventListener('click', function(event){
    event.preventDefault()
    const dateInput = document.querySelector('.date-input').value;
    const dateifer = new Date(dateInput);
    const month = dateifer.getMonth() + 1;
    const day = dateifer.getDate() + 1;
    console.log(month);
    console.log(day);

    if ((day >= 21 && month == 3) || (day <= 19 && month == 4)) {
        food = "Spizzico di Pizza";
    } else if ((day >= 20 && month == 4) || (day <= 20 && month == 5)){ 
        food = "Vegetable Samosas";
    } else if ((day >= 21 && month == 5) || (day <= 20 && month == 6)){ 
        food = "Baton Lover’s Quartet";
    } else if ((day >= 21 && month == 6) || (day <= 22 && month == 7)){ 
        food = "Mini Ice Cream Cones";
    } else if ((day >= 23 && month == 7) || (day <= 22 && month == 8)){ 
        food = "Orange Chicken";
    } else if ((day >= 23 && month == 8) || (day <= 22 && month == 9)){ 
        food = "Guacamole to Go"; 
    } else if ((day >= 23 && month == 9) || (day <= 22 && month == 10)){ 
        food = "Everything but the Bagel Seasoning";
    } else if ((day >= 23 && month == 10) || (day <= 21 && month == 11)){ 
        food = "Chili Lime Rolled Tortilla Chips";
    } else if ((day >= 22 && month == 11) || (day <= 21 && month == 12)){ 
        food = "Spiced Chai Concentrate";
    } else if ((day >= 22 && month == 12) || (day <= 19 && month == 1)){ 
        food = "Lemon Bars";
    } else if ((day >= 20 && month == 1) || (day <= 18 && month == 2)){ 
        food = "Speculoos Cookie Butter";
    } else if ((day >= 19 && month == 2) || (day <= 20 && month == 3)){ 
        food = "Dark Chocolate Stars";
    }

      getFoodInfo();
      showResult();


})

document.querySelectorAll('.placeholder').forEach(item => {
    item.addEventListener('click', event => {
    const foodId = item.getAttribute("id");
    food = foodId;
    console.log(food);
    showResult();
    })
})

function getFoodInfo (food){
    if (food == "Spizzico di Pizza"){
        document.getElementById("picture").src="pictures/pizza.png"
        audio = new Audio('sounds/1.mp3');
        description= "Naturally very fiery and bold, you always stand out with your saucy way of life. You pay the competition no mind; everyone knows that no one compares to you!";
   
    } else if (food == "Vegetable Samosas"){
        audio = new Audio('sounds/2.wav');
        document.getElementById("picture").src="pictures/samosa.png"
        description= "A fan favorite, everyone cheers when you finally leave the oven and join the rest of the world to celebrate! Savory and spicy, you appreciate balance and resilience.";
   
    } else if (food == "Baton Lover’s Quartet"){
        document.getElementById("picture").src="pictures/baton.png"
        audio = new Audio('sounds/3.wav');
        description= "Sensing a lot of personality here... almost too much at times! People come to you because you have the answer to everything, and you aren't afraid to switch it up when the time comes.";
    
    } else if (food == "Mini Ice Cream Cones"){
        document.getElementById("picture").src="pictures/cone.png"
        audio = new Audio('sounds/4.mp3');
        description= "While others may look down on you for at first and think you are not as substantial as them, they have no idea the flavor you pack is enormous! And remember that meltdowns are normal. ";
   
    } else if (food == "Orange Chicken"){
        document.getElementById("picture").src="pictures/chicken.png"
        audio = new Audio('sounds/5.mp3');
        description = "Sweet, yummy, and in your face! Strong and outgoing, you bring people together. Never settle for second place, you know you're on top!";
    
    } else if (food == "Guacamole to Go"){
        document.getElementById("picture").src="pictures/guac.png"
        audio = new Audio('sounds/6.wav');
        description= "A creation certainly made by a perfectionist -- not a flaw to be spotted! You inspire the masses with your dedication and diligence.";
   
    } else if (food == "Everything but the Bagel Seasoning"){
        document.getElementById("picture").src="pictures/bagel.png"
        audio = new Audio('sounds/7.wav');
        description= "The perfect balance of everything and more! You bring harmony and peace everywhere you go, and you are a great person to rely on!";
    
    } else if (food == "Chili Lime Rolled Tortilla Chips"){
        document.getElementById("picture").src="pictures/chips.png"
        audio = new Audio('sounds/8.mp3');
        description= "Give me more of that spicy and sour! You may come across as reckless or impulsive, but in reality, you just know what you want and are not shy at all to just go for it. ";
    
    } else if (food == "Spiced Chai Concentrate"){
        document.getElementById("picture").src="pictures/chai.png"
        audio = new Audio('sounds/9.wav');
        description= "You desire freedom and adventure but also appreciate the domestic comforts of home to keep you warm. Remember, stability can be exciting too! ";
    
    } else if (food == "Lemon Bars"){
        document.getElementById("picture").src="pictures/lemon.png"
        audio = new Audio('sounds/10.wav');
        description= "A burst of inspiration is just what everyone gets when they take a bite out of you! Forge your own path, and don't lose sight of your goals.";
    
    } else if (food == "Speculoos Cookie Butter"){
        document.getElementById("picture").src="pictures/butter.png"
        audio = new Audio('sounds/11.mp3');
        description= "Oh, what a creative mind we have here! Always on your own creative journey, you realize you don't have to be the loudest person in the room to make the biggest impact.";
    
    } else if (food == "Dark Chocolate Stars"){
        document.getElementById("picture").src="stars.png";
        audio = new Audio('sounds/12.wav');
        description= "So cute and fun! Look at those sprinkles! Your reflective nature and harmonious energy, have made you a necessity at every function, whether you like it or not!";
    } 
}

function showResult (){
    getFoodInfo(food);
    resultPlaceholder.innerHTML = food;
    descriptionPlaceholder.innerHTML = description;
    wrapper.style.display = 'block';
    audio.play();
}
   

