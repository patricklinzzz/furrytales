function openTab(event, tabName) {
    let i, tabcontent, tabbuttons;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active"); 
    event.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function() {
    const activeButton = document.querySelector(".tab-button.active");
    if (!activeButton) {
        const firstButton = document.querySelector(".tab-button");
        if (firstButton) {
            firstButton.click(); 
        }
    } else {
        const activeTabId = activeButton.getAttribute('onclick').match(/'([^']+)'/)[1];
        if (activeTabId) {
            document.getElementById(activeTabId).style.display = "block";
            document.getElementById(activeTabId).classList.add("active");
        }
    }
});