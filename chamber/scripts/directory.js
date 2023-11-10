const baseURL = "https://gravesstone.github.io/wdd230/"; // Replace with your actual GitHub Pages URL
        const linksURL = `${baseURL}chamber/data/membership.json`;
async function getMembers() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(members) {
  const container = document.getElementById('directory-content');
  container.innerHTML = '';

  const view = document.getElementById('view-toggle').value;

  members.forEach(member => {
    if (view === 'grid') {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${member.image}" alt="${member.name} image">
        <div>
          <h2>${member.name}</h2>
          <p>${member.address}</p>
          <p>Phone: ${member.phone}</p>
          <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
          <p>Membership Level: ${member.membershipLevel}</p>
          <p>${member.otherInfo}</p>
        </div>
      `;
      container.appendChild(card);
    } else if (view === 'list') {
      const listItem = document.createElement('div');
      listItem.className = 'list-item';
      listItem.innerHTML = `
        <h2>${member.name}</h2>
        <img src="${member.image}" alt="${member.name} image">
        <div>
          <p>${member.address}</p>
          <p>Phone: ${member.phone}</p>
          <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
          <p>Membership Level: ${member.membershipLevel}</p>
          <p>${member.otherInfo}</p>
        </div>
      `;
      container.appendChild(listItem);
    }
  });
}

function toggleView(selectedView) {
  // Update the selected view
  document.getElementById('view-toggle').value = selectedView;
  
  // Display members based on the selected view
  displayMembers();
}

// Call the async function to fetch members data
getMembers();