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
      //====== Number of Visits====// 
       // Check if 'visitCount' exists in localStorage
if (localStorage.getItem('visitCount')) {
        // If it exists, increment the count by 1
        let count = parseInt(localStorage.getItem('visitCount'));
        count++;
        localStorage.setItem('visitCount', count);
        document.getElementById('visitCount').textContent = count;
    } else {
        // If it doesn't exist, initialize it to 1
        localStorage.setItem('visitCount', 1);
        document.getElementById('visitCount').textContent = 1;
    }
    