const baseURL = "https://gravesstone.github.io/wdd230/"; // Replace with your actual GitHub Pages URL
        const linksURL = `${baseURL}data/links.json`;
        
        function displayLinks(weeks) {
            const linksContainer = document.getElementById("links-container");

            weeks.lessons.forEach((week) => {
                const weekElement = document.createElement("div");
                weekElement.classList.add("week");

                const weekTitle = document.createElement("h2");
                weekTitle.textContent = "Week " + week.lesson;
                weekElement.appendChild(weekTitle);

                const linksList = document.createElement("ul");

                week.links.forEach((link) => {
                    const linkItem = document.createElement("li");
                    const linkAnchor = document.createElement("a");
                    linkAnchor.href = baseURL + link.url;
                    linkAnchor.textContent = link.title;
                    linkItem.appendChild(linkAnchor);
                    linksList.appendChild(linkItem);
                });

                weekElement.appendChild(linksList);
                linksContainer.appendChild(weekElement);
            });
        }

        displayLinks(jsonData); // Call the function with the embedded data directly