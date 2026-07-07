const paper = document.querySelector(".paper");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate(

[
{
opacity:0,
transform:"translateY(80px)"
},
{
opacity:1,
transform:"translateY(0)"
}
],

{
duration:1200,
fill:"forwards"
}

);

}

});

});

observer.observe(paper);
