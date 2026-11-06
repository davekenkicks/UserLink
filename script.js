class Platform 
{
    name;
    description;
    coolfontsIcon;
    link;

    profileUrl(username)
    {
        return `${this.link}/${username}`;
    }
}

const Facebook = new Platform()
{
    Facebook.name = "Facebook";
    Facebook.description = "A social networking platform that allows users to connect with friends and family.";
    Facebook.coolfontsIcon = "fa-brands fa-facebook-f";
    Facebook.link = "https://www.facebook.com";
};

const Instagram = new Platform()
{
    Instagram.name = "Instagram";
    Instagram.description = "A photo and video sharing social networking service.";
    Instagram.coolfontsIcon = "fa-brands fa-instagram";
    Instagram.link = "https://www.instagram.com";
};

const X = new Platform()
{
    X.name = "X";
    X.description = "A social media platform for sharing short messages, images, and videos.";
    X.coolfontsIcon = "fa-brands fa-x";
    X.link = "https://www.x.com";
}

const LinkedIn = new Platform()
{
    LinkedIn.name = "LinkedIn";
    LinkedIn.description = "A professional networking platform for connecting with colleagues and industry professionals.";
    LinkedIn.coolfontsIcon = "fa-brands fa-linkedin-in";
    LinkedIn.link = "https://www.linkedin.com/in";
}

const Youtube = new Platform()
{
    Youtube.name = "YouTube";
    Youtube.description = "A video sharing platform where users can upload, view, and share videos.";
    Youtube.coolfontsIcon = "fa-brands fa-youtube";
    Youtube.link = "https://www.youtube.com";
}

const TikTok = new Platform()
{
    TikTok.name = "TikTok";
    TikTok.description = "A social media platform for creating and sharing short videos.";
    TikTok.coolfontsIcon = "fa-brands fa-tiktok";
    TikTok.link = "https://www.tiktok.com";
    TikTok.profileUrl = (username) => `${TikTok.link}/@${username}`; // Override the profileUrl method for TikTok to include '@' before the username
}

const Reddit = new Platform()
{
    Reddit.name = "Reddit";
    Reddit.description = "A social news aggregation, web content rating, and discussion website.";
    Reddit.coolfontsIcon = "fa-brands fa-reddit-alien";
    Reddit.link = "https://www.reddit.com/user";
}

const Github = new Platform()
{
    Github.name = "GitHub";
    Github.description = "A web-based version control system for tracking changes in source code during software development.";
    Github.coolfontsIcon = "fa-brands fa-github";
    Github.link = "https://www.github.com";
}

const Snapchat = new Platform()
{
    Snapchat.name = "Snapchat";
    Snapchat.description = "A social media platform for sharing photos and videos that disappear after being viewed.";
    Snapchat.coolfontsIcon = "fa-brands fa-snapchat";
    Snapchat.link = "https://www.snapchat.com/add";
}


const platforms = [Facebook, Instagram, X, LinkedIn, Youtube, TikTok, Reddit, Github, Snapchat];

const searchForm = document.querySelector(".search");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault(); //prevent the form from submitting and refreshing the page by putting a preventDefault() method on the event object in the event listener callback function.
    let username = document.querySelector("#username").value; // Get the value of the input field with id "username"
    console.log("username is:", username);
    
    let resultsContainer = document.querySelector(".results"); // Get the results container element
    resultsContainer.innerHTML = ""; // Clear the previous results by setting the innerHTML of the results container to an empty string

    // Loop through the platforms array and log each platform's details
    for (let i = 0; i < platforms.length; i++) 
    {
        
        let platformName = platforms[i].name; // Get the name of the platform
        let platformDescription = platforms[i].description; // Get the description of the platform
        let platformCoolFontsIcon = platforms[i].coolfontsIcon; // Get the CoolFonts icon class of the platform
        let platformProfileUrl = platforms[i].profileUrl(username); // Get the profile URL (TikTok overrides profileUrl to add '@')
        
        let resultItem = document.createElement("a");
        resultItem.classList.add("result-item"); // Add a class to the result item for styling
        resultItem.href = platformProfileUrl;
        resultItem.target = "_blank"; // Open the link in a new tab
        resultItem.rel = "noopener noreferrer"; // Security measure to prevent the new page from accessing the window.opener property
        
        resultItem.innerHTML = `
            <i class="icon ${platformCoolFontsIcon}" aria-hidden="true"></i> 
            <div class="result-item__content">
                <h3 class="result-item__name">${platformName}</h3>
                <p class="result-item__description">${platformDescription}</p>
                <a id="platformProfileUrl" href="${platformProfileUrl}" target="_blank" rel="noopener noreferrer" class="result-item__link">${platformProfileUrl}</a>
            </div>
        `;
        resultsContainer.appendChild(resultItem); // Append the result item to the results container
    }
    
});




