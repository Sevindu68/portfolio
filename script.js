const header=document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY>12)
});

 window.addEventListener('load',()=>{
    let progressBar=document.querySelectorAll('.progress-bar');
    let values=[
        '70%',
        '60%',
        '90%',
        '80%',
        '60%'

    ];
    progressBar.forEach((progress,index)=>{
    progress.style.width=values[index];
    });

});

window.addEventListener('load',()=>{
    let progressBar=document.querySelectorAll('.bar');
    let values=[
        '70%',
        '80%',
        '70%',
        '70%'
        

    ];
    progressBar.forEach((progress,index)=>{
    progress.style.width=values[index];
    });

});


