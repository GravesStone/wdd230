const baseURL = "https://gravesstone.github.io/wdd230/"; // Replace with your actual GitHub Pages URL
        const linksURL = `${baseURL}data/links.json`;

        async function getLinks() {
            const response = await fetch(linksURL);
            const data = await response.json();
            displayLinks(data);
        }

        function displayLinks(weeks) {
            const linksContainer = document.getElementById('links-container');

            for (const week of weeks.lessons) {
                const weekTitle = `Week ${week.lesson}`;
                const linksList = document.createElement('ul');

                for (const link of week.links) {
                    const listItem = document.createElement('li');
                    const anchor = document.createElement('a');
                    anchor.href = link.url;
                    anchor.textContent = link.title;
                    listItem.appendChild(anchor);
                    linksList.appendChild(listItem);
                }

                const weekContainer = document.createElement('div');
                weekContainer.className = 'week-container';
                weekContainer.innerHTML = `<p>${weekTitle}</p>`;
                weekContainer.appendChild(linksList);

                linksContainer.appendChild(weekContainer);
            }
        }

        getLinks();