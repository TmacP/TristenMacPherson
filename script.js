// Define an array of portfolio site URLs and descriptions
const portfolioItems = [
    {
        url: "https://beatburritochef.ca",
        description: "Links to my music production socials",
    },
    {
        url: "https://cst.cs.usask.ca",
        description: "Am currently responsible for maintaining and updating this site as part of my executive member role.",
    },
    {
        url: "https://infinite-abyss.pages.dev",
        description: "A Unity game built by a team of 7 for Computer Science 306 at the University of Saskatchewan.",
    },
    {
        url: "https://infiniteabyss.pages.dev/",
        description: "This project is my first time using Defold. I created it so I could test out how Defold compares to Unity. This is a work in progress still in the prototype phase. The intention is to be a single player, pixel art, 2d underwater platformer. It is based off of the game Infinite Abyss I was part of the team which developed for Computer Science 306 at the University of Saskatchewan.",
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
