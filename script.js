const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215
    );
    const randomCode = "#" + randomNumber.toString(16);
    console.log(randomNumber);
    console.log(randomCode);
    document.body.style.backgroundColor = randomCode;
    document.querySelector('#color-code').innerText = "Color's Hex-Code : " + randomCode;
    //document.getElementById('color-code').innerText = "Color's Hex-Code : " + randomCode;
    //   document.getElementById('para-id').innerText = randomCode;



}
// Event Call
document.querySelector(".btn-class").addEventListener('click', getColor);
// document.getElementById("btn-id").addEventListener('click', getColor);
//document.getElementById("para-id").addEventListener('click', getColor);
console.log("Color Code Testing :");
console.log("Hey Color Code");
// Initial Call
getColor();
// getColor();
