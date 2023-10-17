

// FUNCTION THAT ALLOWS TO TOGGLE THE NAV BAR 
let btn = document.getElementById("hamburger-btn")
btn.onclick = () => toggleMenu()
toggleMenu = () => {
    document.getElementById("primary-nav").classList.toggle("open");
    btn.classList.toggle("open");
};
var dateobj = new Date();{
    // Year from the above object 
           // is being fetched using getFullYear() 
           var dateObject = dateobj.getFullYear();
           
           // Printing current year 
           document.getElementById("copyright").innerHTML ="&copy" + dateObject;
   };
          
   
   var update = "last update: ";
   const mdates = new Date(document.lastModified);
   document.getElementById("lastModified").innerHTML = update + mdates;
   




  




