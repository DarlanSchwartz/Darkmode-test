const darkModeBtn = document.querySelector(".darkmode-slider-btn");
const moonIndicator = document.querySelector(".moon");
const sunIndicator = document.querySelector(".sun");
let nightmodeStatus = true;

function ToggleNightMode()
{
    nightmodeStatus = !nightmodeStatus;
    if(nightmodeStatus == true)
    {
        moonIndicator.setAttribute('name', "moon");
        sunIndicator.setAttribute('name', "sunny-outline");
        document.querySelector('body').style.backgroundColor = "#000000";

    }
    else
    {
        
        moonIndicator.setAttribute('name', "moon-outline");
        sunIndicator.setAttribute('name', "sunny");
        document.querySelector('body').style.backgroundColor = "#FFFFFF";
    }

    darkModeBtn.classList.toggle("nightmode");
}