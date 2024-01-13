function populateSettings(profile){
    document.getElementById("profile").innerText = "Account: " + profile.display_name;
}

populateSettings(globalVariable.profile);