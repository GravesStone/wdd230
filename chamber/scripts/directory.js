if (title == "Directory") {

  displayComp = document.getElementById("companies")

  const displayCompanies = (data) => {
      // Fetch the Data 
      fetch(data)
          .then(function (response) {
              // Convert to a Json object
              return response.json();
          })
          .then(function (jsonObject) {

              // Displays the Data in the HTML 
              outputInHtml(jsonObject)
          });
  }

  const outputInHtml = (processedData) => {
      companies = processedData.companies

      html = companies.map(company =>
          `
      <div class="company">
          <h2>${company.name}</h2>
          <a href="${company.websiteurl}" target="_blank"><img src="${company.imageurl}" alt="${company.name}"></a>
          <p>${company.industry}</p> 
         <p>Visit <a href="${company.websiteurl}" target="_blank"> ${company.websiteurl}</p></a>
          <p>${company.phonenumber}</p>
          </div>
      `
      ).join("")

      displayComp.innerHTML += html
  }

  displayCompanies(data)


  const gridbutton = document.querySelector("#grid-icon");
  const listbutton = document.querySelector("#list");
  const displayCompany = document.querySelector("#companies");

  // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
  listbutton.style.display = "block";
  gridbutton.style.display = "none";
  gridbutton.addEventListener("click", () => {
      // example using arrow function
      displayCompany.classList.add("grid");
      displayCompany.classList.remove("list");
      gridbutton.style.display = "none";
      listbutton.style.display = "block";
  });

  listbutton.addEventListener("click", showList); // example using defined function

  function showList() {
      displayCompany.classList.add("list");
      displayCompany.classList.remove("grid");
      listbutton.style.display = "none";
      gridbutton.style.display = "block";
  }
}