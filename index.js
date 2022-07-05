let numberArray = [
  "abcdefghijklmnopqrstuvxyz",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "0123456789",
  "@#$%^&!",
];
const generator = document.getElementById("generate-password");
const LengthInput = document.getElementById("password-length");

function generatePassword() {
    let characters = numberArray.join("");
    let passwordLength = LengthInput.value;
   
      function randomPasswordOne() {
        let password = "";
        for (let i = 0; i <= passwordLength - 1; i++) {
          let randomOne = Math.floor(Math.random() * characters.length);
          password += characters.substring(randomOne, randomOne + 1);
        }
        document.getElementById("password-one").value = password;
      }
    
      function randomPasswordTwo() {
        let password = ""
         for (let i = 0; i <= passwordLength - 1; i++) {
           let randomTwo = Math.floor(Math.random() * characters.length);
           password += characters.substring(randomTwo, randomTwo + 1);
         }
         document.getElementById("password-two").value = password;
      }
       
      function randomPasswordThree() {
        let password = ""
        for (let i = 0; i <= passwordLength - 1; i++) {
          let randomThree = Math.floor(Math.random() * characters.length);
          password += characters.substring(randomThree, randomThree + 1);
        }
        document.getElementById("password-three").value = password; 
      }
         
      function randomPasswordFour() {
        let password = ""
          for (let i = 0; i <= passwordLength - 1; i++) {
            let randomFour = Math.floor(Math.random() * characters.length);
            password += characters.substring(randomFour, randomFour + 1);
          }
          document.getElementById("password-four").value = password;
      }
        randomPasswordOne()
        randomPasswordTwo()
        randomPasswordThree()
        randomPasswordFour()
}



