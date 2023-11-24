const baseURL = "https://gravesstone.github.io/wdd230/"; // Replace with your actual GitHub Pages URL
const linksURL = `${baseURL}chamber/data/members.json`;

// Function to load member data from JSON asynchronously
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

// Function to display members in grid view
function displayGridMembers(members) {
  const directoryContent = document.getElementById("directory-content");
  directoryContent.innerHTML = "";

  members.forEach((member) => {
    const memberCard = document.createElement("div");
    memberCard.className = "member-card";

    // Create member card content here
    const cardContent = `
      <h2>${member.name}</h2>
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

// Function to display members in list view
function displayListMembers(members) {
  const directoryContent = document.getElementById("directory-content");
  directoryContent.innerHTML = "<ul>";

  members.forEach((member) => {
    const listItem = document.createElement("li");
    listItem.className = "list-item";
    listItem.innerHTML = `
      <h2>${member.name}</h2>
      <img src="${member.image}" alt="${member.name} Image" class="member-image" width="100" height="100">
      <p>Address: ${member.address}</p>
      <p>Phone: ${member.phone}</p>
      <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
      <p>Membership Level: ${member.membershipLevel}</p>
      <p>Other Info: ${member.otherInfo}</p>
    `;
    directoryContent.appendChild(listItem);
  });

  directoryContent.innerHTML += "</ul>";
}

// Function to toggle between grid and list view
async function toggleView(view) {
  const membersData = await loadMemberData();

  if (view === "grid") {
    displayGridMembers(membersData);
  } else if (view === "list") {
    displayListMembers(membersData);
  }
}

// Initially display members in grid view
toggleView("grid");