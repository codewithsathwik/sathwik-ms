
//resume button display
//resume button display

const cvBtn = document.getElementById("btn-cv");
console.log(cvBtn);

cvBtn.addEventListener("click",() =>{
    window.open("/assets/cv.pdf",'_blank');
})