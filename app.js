console.log("hello");
//resume button display
document.getElementById("btn-cv").addEventListener("click",() =>{
    window.open("/assets/cv.pdf",'_blank');
})

//contact btn
document.getElementById("btn-con").addEventListener("click",()=>{
    location.href='./#contact';
})

//project1 btn view
document.getElementById("one-view").addEventListener("click",() =>{
    window.open("https://niranjansimha.netlify.app/",'_blank');
})

//project1 btn github

document.getElementById("one-src").addEventListener("click",() =>{
    window.open("https://github.com/codewithsathwik/niranjans-gallery",'_blank');
})

// project2 btn view
document.getElementById("two-view").addEventListener("click",() =>{
    window.open("https://sathwikms.netlify.app/",'_blank');
})

//project2 btn github
document.getElementById("two-src").addEventListener("click",() =>{
    window.open("https://github.com/codewithsathwik/sathwik-ms",'_blank');
})
