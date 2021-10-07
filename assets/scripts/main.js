// Get root element in css
let root = document.querySelector(":root");

// Function to switch Bulma tabs based on https://codepen.io/t7team/pen/ZowdRN
// and update hero-body bg color based on https://www.w3schools.com/css/css3_variables_javascript.asp
function openTab(event, tabId) {
    let i, contentTabs, tabLinks, heroBody, rootStyles;
    contentTabs = document.getElementsByClassName("content-tab");
    heroBody = document.getElementById("body");
    // Get the styles (properties and values) for the root
    rootStyles = getComputedStyle(root);

    // Remove the all content-tabs in display (invisible).
    for (i = 0; i < contentTabs.length; i++) {
        contentTabs[i].style.display = "none";
    }
    // Get all the tab headers and untoggle the active tab.
    tabLinks = document.getElementsByClassName("tab");
    for (i = 0; i < contentTabs.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" is-active", "");
    }
    // Display selected tab as a block.
    document.getElementById(tabId).style.display = "block";
    // Toggle selected tab to active.
    event.currentTarget.className += " is-active";

    heroBody.style.backgroundColor = rootStyles.getPropertyValue("--"+tabId);
}