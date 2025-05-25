const temples = [
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicated: "1893",
        area: 253000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
        name: "Los Angeles California Temple",
        location: "Los Angeles, California, USA",
        dedicated: "2000",
        area: 191000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-38945-main.jpg"
    },
    {
        name: "Washington D.C. Temple",
        location: "Washington D.C., USA",
        dedicated: "1974",
        area: 160000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
    },
    {
        name: "Palmyra New York Temple",
        location: "Palmyra, New York, USA",
        dedicated: "2000",
        area: 30000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/077-Palmyra-New-York-Temple.jpg"
    },
    {
        name: "Provo City Center Temple",
        location: "Provo, Utah, USA",
        dedicated: "2016",
        area: 110000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-56386-main.jpg"
    },
    // Add three more temple objects
    {
        name: "Oklahoma City Oklahoma Temple",
        location: "Oklahoma City, Oklahoma, USA",
        dedicated: "2000",
        area: 50000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/oklahoma-city-oklahoma-temple/oklahoma-city-oklahoma-temple-55657-main.jpg"
    },
    {
        name: "Phoenix Arizona Temple",
        location: "Phoenix, Arizona, USA",
        dedicated: "2014",
        area: 90000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/phoenix-arizona-temple/phoenix-arizona-temple-12711-main.jpg"
    },
    {
        name: "Fort Lauderdale Florida Temple",
        location: "Fort Lauderdale, Florida, USA",
        dedicated: "2014",
        area: 100000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/fort-lauderdale-florida-temple/fort-lauderdale-florida-temple-3792-main.jpg"
    }
];

function createTempleCard(temple) {
    const card = document.createElement('div');
    card.classList.add('temple-card');
    card.innerHTML = `
        <h3>${temple.name}</h3>
        <p>${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area} sq ft</p>
        <img src="${temple.image}" alt="${temple.name}" loading="lazy">
    `;
    return card;
}

function displayTemples(filterFunc) {
    const templeCardsSection = document.getElementById('temple-cards');
    templeCardsSection.innerHTML = ''; // Clear existing cards
    const filteredTemples = temples.filter(filterFunc);
    filteredTemples.forEach(temple => {
        const templeCard = createTempleCard(temple);
        templeCardsSection.appendChild(templeCard);
    });
}

// Event listeners for navigation
document.getElementById('home').addEventListener('click', () => displayTemples(() => true));
document.getElementById('old').addEventListener('click', () => displayTemples(temple => parseInt(temple.dedicated) < 1900));
document.getElementById('new').addEventListener('click', () => displayTemples(temple => parseInt(temple.dedicated) > 2000));
document.getElementById('large').addEventListener('click', () => displayTemples(temple => temple.area > 90000));
document.getElementById('small').addEventListener('click', () => displayTemples(temple => temple.area < 10000));

// Initial display of all temples
displayTemples(() => true);

document.addEventListener('DOMContentLoaded', () => {
    // Update footer copyright year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Update footer last modified date
    const lastModSpan = document.getElementById('last-modified');
    if (lastModSpan) {
        lastModSpan.textContent = document.lastModified;
    }

    // Create hamburger button and insert it into header before nav
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    if (header && nav) {
        const hamburger = document.createElement('button');
        hamburger.setAttribute('aria-label', 'Toggle menu');
        hamburger.classList.add('hamburger');
        hamburger.innerHTML = '&#9776;'; // Hamburger symbol ≡
        header.insertBefore(hamburger, nav);

        // Toggle navigation menu visibility
        hamburger.addEventListener('click', () => {
            const isVisible = nav.classList.toggle('nav-open');
            hamburger.innerHTML = isVisible ? '&#10005;' : '&#9776;'; // X or hamburger
            nav.classList.toggle('hidden'); // Toggle hidden class for nav
        });
    }
});
