// Define an array of portfolio site URLs and descriptions
const portfolioItems = [
    {
        url: "https://beatburritochef.ca",
        description: "Links to my music production. Check out my music!.",
    },
    {
        url: "https://infinite-abyss.pages.dev",
        description: "A Unity game built by our team of 7 for Computer Science 306 at the University of Saskatchewan. I was in charge of the audio design, and did a large amount of the programming, game design, and playtesting. I also assumed a portion of the project management role.",
    },
    {
        url: "https://infiniteabyss.pages.dev/",
        description: "This project is so I could test out how Defold compares to Unity. Click the screen to move, and travel through the pipes on the sides of the map.",
    },
    {
        url: "https://discarded-whisker.pages.dev/",
        description: "This project was created to experiment with using Defold. The intention is to be a single player, pixel art, card collecting game.",
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
