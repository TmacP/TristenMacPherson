// Define an array of portfolio site URLs and descriptions
const portfolioItems = [
    {
        url: "https://pagecake.pages.dev",
        description: "A small webdesign company I started.",
    },
    {
        url: "https://beatburritochef.ca",
        description: "A page built for a local producer to connect their social media accounts.",
    },
    {
        url: "https://cst.cs.usask.ca",
        description: "Am currently responsible for maintaining and updating this site as part of my executive member role.",
    },
    {
        url: "https://infinite-abyss.pages.dev",
        description: "A Unity game built for cmpt306 with a team of 6.",
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
