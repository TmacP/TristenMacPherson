// Define an array of portfolio site URLs and descriptions
const portfolioItems = [
    {
        url: "https://beatburritochef.ca",
        description: "Landing page, for links, to my music production. Check out my music on Spotify, and Apple Music to listen to my work with Fearsome Lee; or check out my other socials to hear some less developed ideas I post for amusement. You can also play a basic version of Snake I implemented in JavaScript for fun.",
    },
    {
        url: "https://cst.cs.usask.ca",
        description: "Currently responsible for maintaining and updating this site as part of my dutys as executive member of the Usask Cyber Security Team.",
    },
    {
        url: "https://infinite-abyss.pages.dev",
        description: "A Unity game built by our team of 7 for Computer Science 306 at the University of Saskatchewan. I was in charge of the audio design, and did a large amount of the programming, game design, and playtesting. I also assumed a portion of the project management role.",
    },
    {
        url: "https://infiniteabyss.pages.dev/",
        description: "This project is my first time using Defold. I created it so I could test out how Defold compares to Unity. This is a work in progress still in the prototype phase. The intention is to be a single player, pixel art, 2d underwater platformer. It is based off of the game Infinite Abyss for Computer Science 306 at the University of Saskatchewan. Click the screen to move, and travel through the pipes on the sides of the map.",
    },
    {
        url: "https://discarded-whisker.pages.dev/",
        description: "This project was created so I could experiment with using Defold. This is a work in progress which is still very early in the prototype phase(right now you, and the ai, can only place a card, and end your turn.). The intention is to be a single player, pixel art, card collecting game.",
    },
    // Add more portfolio items with URLs and descriptions here
];

const iframe = document.getElementById("portfolio-iframe");
const descriptionContainer = document.getElementById("portfolio-description");
const nextButton = document.getElementById("next-portfolio");
const portfolioLink = document.getElementById("portfolio-link");
let currentIndex = 0;

// Function to update the iframe and description
function updatePortfolio() {
    const currentPortfolioItem = portfolioItems[currentIndex];
    iframe.src = portfolioItems[currentIndex].url;
    descriptionContainer.textContent = portfolioItems[currentIndex].description;
    portfolioLink.href = currentPortfolioItem.url;
}

// Function to cycle to the next portfolio item
function nextPortfolio() {
    currentIndex = (currentIndex + 1) % portfolioItems.length;
    updatePortfolio();
}

// Add a click event listener to the "Next Portfolio" button
nextButton.addEventListener("click", nextPortfolio);

// Initialize the iframe and description with the first portfolio item
updatePortfolio();

// Function to show/hide the portfolio iframe
function togglePortfolioIframe() {
    const portfolioIframe = document.getElementById("portfolio-iframe");

    if (portfolioIframe.style.display === 'none') {
        portfolioIframe.style.display = 'block';
    } else {
        portfolioIframe.style.display = 'none';
    }
}

// Add a click event listener to the "Toggle Portfolio Iframe" button
const toggleIframeButton = document.getElementById("toggle-iframe-button");
toggleIframeButton.addEventListener("click", togglePortfolioIframe);
