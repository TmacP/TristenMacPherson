// Define an array of portfolio site URLs and descriptions
const portfolioItems = [
    {
        url: "https://pagecake.pages.dev",
        description: "A small webdesign company I started. Currently we consist of 2 people, Myself and our designer.",
    },
    {
        url: "https://beatburritochef.ca",
        description: "A page we built for a local producer to connect their social media accounts.",
    },
    {
        url: "https://cst.cs.usask.ca",
        description: "We are currently responsible for maintaining and updating these pages.",
    },
    {
        url: "https://infinite-abyss-crossing-of-worlds-underwater.pages.dev",
        description: "A prototype of a game built for cmpt306. Mouse to shoot, and WASD to move.",
    }

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
