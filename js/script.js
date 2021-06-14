let maleNames = ["KWASI","KWADWO","KWABENA","KWAKU","YAW","KOFI","KWAME"]
let femaleNames = ["AKOSUA","ADWOA","ABENNA","AKUA","YAA","AFUA","AMA"]

function birthday(){
        let input = document.getElementById("D.O.B").value;
        let date = new Date(input)

        let days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

    if(date.value){
        let year = date.getFullYear().string();
        let dayOfTheWeek= date.getDay();

        return dayOfTheWeek
    }
    else{
        alert("PLEASE ENTER YOUR BIRTHDAY.")
    }
}

function sex() {
    let gender; 

    if (document.getElementById("male").checked) {
        gender == 0
    }
    else if(document.getElementById("female").checked){
        gender == 1
    }
    else {
        alert("PLEASE SELECT GENDER.")
    }
    // if ((form.gender[0].checked == true) || (form.gender[1].checked == true)) {
    //     if (form.gender[0].checked == true) {
    //         gender = 0;
    //     } else if (form.gender[1].checked == true) {
    //         gender = 1;
    //     }
    //     return gender;
    // } else {
    //     alert("Please select your gender!");
    //     return;
    // }
}

function selectDay() {
     let selectedGender = sex()
     let getBirthday = birthday()

if (getBirthday.valueOf() === true || (getBirthday === 0)) {
     if (selectedGender == 0) {
        let result = "Your Akan name is " + maleNames[getBirthday] + ".";
        document.getElementById("submit").innerHTML = result;
     }
    //  else (selectedGender === 1){
    //     let result = "Your Akan name is " + femaleNames[getBirthday] + ".";
    //     document.getElementById("submit").innerHTML = result;
    //  }
}

}
