const membersModule = (function () {
  const baseURL = "https://gravesstone.github.io/wdd230/"; // Replace with your actual GitHub Pages URL
  const linksURL = `${baseURL}chamber/data/members.json`;

  async function loadMemberData() {
    try {
      const response = await fetch(linksURL);
      const data = await response.json();
      return data.members;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  function displayGridMembers(members) {
    const directoryContent = document.getElementById("spotlight");
    directoryContent.innerHTML = "";

    const firstThreeMembers = members.slice(0, 3);

    firstThreeMembers.forEach((member) => {
      const memberCard = document.createElement("div");
      memberCard.className = "card";

      const cardContent = `
        <h2>${member.name}</h2>
        <img src="${member.image}" alt="${member.name} Image" class="member-image">
        <p>Address: ${member.address}</p>
        
      `;

      memberCard.innerHTML = cardContent;
      directoryContent.appendChild(memberCard);
    });
  }

  async function init() {
    try {
      const members = await loadMemberData();
      displayGridMembers(members);
    } catch (error) {
      console.error("Error loading member data:", error);
    }
  }

  return {
    init: init,
  };
})();