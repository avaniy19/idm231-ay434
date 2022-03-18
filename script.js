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
        audio = new Audio('sounds/');
        description= "Pizza Description";
   
    } else if (food == "Vegetable Samosas"){
        audio = new Audio('sounds/');
        document.getElementById("picture").src="pictures/samosa.png"
        description= "Samosa Description";
   
    } else if (food == "Baton Lover’s Quartet"){
        document.getElementById("picture").src="pictures/baton.png"
        audio = new Audio('sounds/');
        description= "Baton Description";
    
    } else if (food == "Mini Ice Cream Cones"){
        document.getElementById("picture").src="pictures/pizza.png"
        audio = new Audio('sounds/');
        description= "Ice Cream Description";
   
    } else if (food == "Orange Chicken"){
        document.getElementById("picture").src="pictures/chicken.png"
        audio = new Audio('sounds/');
        description = "Orange Chicken Description!";
    
    } else if (food == "Guacamole to Go"){
        document.getElementById("picture").src="pictures/guac.png"
        audio = new Audio('sounds/');
        description= "Guac Description";
   
    } else if (food == "Everything but the Bagel Seasoning"){
        document.getElementById("picture").src="pictures/bagel.png"
        audio = new Audio('sounds/');
        description= "Bagel Seasoning Description";
    
    } else if (food == "Chili Lime Rolled Tortilla Chips"){
        document.getElementById("picture").src="pictures/chips.png"
        audio = new Audio('sounds/');
        description= "Chips Description";
    
    } else if (food == "Spiced Chai Concentrate"){
        document.getElementById("picture").src="pictures/chai.png"
        audio = new Audio('sounds/');
        description= "Chai Description";
    
    } else if (food == "Lemon Bars"){
        document.getElementById("picture").src="pictures/lemon.png"
        audio = new Audio('sounds/');
        description= "Lemon Bars Description";
    
    } else if (food == "Speculoos Cookie Butter"){
        document.getElementById("picture").src="pictures/butter.png"
        audio = new Audio('sounds/');
        description= "Cookie Butter Description";
    
    } else if (food == "Dark Chocolate Stars"){
        document.getElementById("picture").src="stars.png";
        audio = new Audio('sounds/');
        description= "Chocolate Stars Description";
    } 
}

function showResult (){
    getFoodInfo(food);
    resultPlaceholder.innerHTML = food;
    descriptionPlaceholder.innerHTML = description;
    wrapper.style.display = 'block';
    audio.play();
}
   
