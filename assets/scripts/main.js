// Function to switch Bulma tabs based on https://codepen.io/t7team/pen/ZowdRN
function openTab(event, tabId) {
    var i, contentTabs, tabLinks;
    contentTabs = document.getElementsByClassName("content-tab");
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
  }