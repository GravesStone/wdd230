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
    const directoryContent = document.getElementById("spotlights");
    directoryContent.innerHTML = "";
  
    members.forEach((member) => {
      const memberCard = document.createElement("section");
      memberCard.className = "member-card";
  
      // Create member card content here
      const cardContent = `
        <h2>Companies</h2>
        <img src="${member.image}" alt="${member.name} Image" class="member-image">
        <p>Address: ${member.address}</p>
        <p>Phone: ${member.phone}</p>
        <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p>Membership Level: ${member.membershipLevel}</p>
        <p>Other Info: ${member.otherInfo}</p>
      `;
  
      memberCard.innerHTML = cardContent;
      directoryContent.appendChild(memberCard);
    });
  }
  