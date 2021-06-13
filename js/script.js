let maleNames = ["KWASI","KWADWO","KWABENA","KWAKU","YAW","KOFI","KWAME"]
let femaleNames = ["AKOSUA","ADWOA","ABENNA","AKUA","YAA","AFUA","AMA"]

function birthday(){
        let input = document.getElementById("D.O.B").value;
        let date = new date(input)
    
    if(date.value()){
        let year = date.getFullYear().string();
        let dayOfTheWeek= date.getDate();

        return dayOfTheWeek
    }
    // else{
    //     alert("PLEASE ENTER YOUR BIRTHDAY.")
    // }
}

function sex() {
    let gender; 
    if ((form.gender[0].checked == true) || (form.gender[1].checked == true)) {
        if (form.gender[0].checked == true) {
            gender = 0;
        } else if (form.gender[1].checked == true) {
            gender = 1;
        }
        return gender;
    } else {
        alert("Please select your gender!");
        return;
    }
}

function selectDay() {
    let selectedGender = sex;
    let getBirthday =birthday;

    if (dayOfTheWeek.valueOf()===true || (dayOfTheWeek == 0)) {
       if (selectedGender == 0) {
        let submit = "Your Akan name is " + maleNames[dayOfTheWeek] + ".";
        document.getElementById("submit").innerHTML = submit;
        
       }
    }
    else if(selectedGender == 1){
        let submit = "Your Akan name is " + femaleNames[dayOfTheWeek] + ".";
        document.getElementById("submit").innerHTML = submit;
        
    }
    else{
        return;
    }
}










