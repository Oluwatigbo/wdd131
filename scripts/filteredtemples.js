const temples = [
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicated: "1893",
        area: 253000,
        image: "https://example.com/images/salt-lake-temple.webp"
    },
    {
        name: "Los Angeles California Temple",
        location: "Los Angeles, California, USA",
        dedicated: "2000",
        area: 191000,
        image: "https://example.com/images/los-angeles-temple.webp"
    },
    {
        name: "Washington D.C. Temple",
        location: "Washington D.C., USA",
        dedicated: "1974",
        area: 160000,
        image: "https://example.com/images/washington-dc-temple.webp"
    },
    {
        name: "Palmyra New York Temple",
        location: "Palmyra, New York, USA",
        dedicated: "2000",
        area: 30000,
        image: "https://example.com/images/palmyra-temple.webp"
    },
    {
        name: "Provo City Center Temple",
        location: "Provo, Utah, USA",
        dedicated: "2016",
        area: 110000,
        image: "https://example.com/images/provo-city-center-temple.webp"
    },
    // Add three more temple objects
    {
        name: "Oklahoma City Oklahoma Temple",
        location: "Oklahoma City, Oklahoma, USA",
        dedicated: "2000",
        area: 50000,
        image: "https://example.com/images/oklahoma-city-temple.webp"
    },
    {
        name: "Phoenix Arizona Temple",
        location: "Phoenix, Arizona, USA",
        dedicated: "2014",
        area: 90000,
        image: "https://example.com/images/phoenix-temple.webp"
    },
    {
        name: "Fort Lauderdale Florida Temple",
        location: "Fort Lauderdale, Florida, USA",
        dedicated: "2014",
        area: 100000,
        image: "https://example.com/images/fort-lauderdale-temple.webp"
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
