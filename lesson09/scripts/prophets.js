const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const requestUrl = async(url) =>{
    const response = await fetch(url);
    console.log(response);

    if (response.status === 200){
        const data = await response.json();
        console.log(data);
        let prophet = data.prophets;
        prophet.forEach(displayProphets)

        
    }
    else{
        console.log('Something went wrong, check the URL')
    }
}

const displayProphets = (prophet)=>{
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p');

    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `Date of birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of birth: ${prophet.birthplace}`;

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt',`Portrait of ${prophet.name} - ${prophet.order}th Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);
    

    document.querySelector('div.cards').appendChild(card);


}


requestUrl(url);