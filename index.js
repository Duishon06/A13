// let box = document.querySelector (".box")

// box.innerHTML = "Hello Aidai"

// let content = document.querySelector(".contetnt")

// content.innerHTML = "Hello Beknur"



function checkName() {
    let age = (prompt("Жашыңыз канчада?")); 

    if (age >= 18) {
        alert("Сизге кирүүгө болот.");
    } else if (age < 18) {
        let setName = confirm("Ата-энеңиз уруксат бердиби?"); 
        if (setName) {
            alert("Сизге кирүүгө болот."); 
        } else {
            alert("Сизге кирүүгө болбойт.");
        }
    }
}
checkName();
