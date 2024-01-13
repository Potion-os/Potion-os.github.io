function populateSettings(profile){
    document.getElementById("settings-profile").innerText = profile.display_name;
}

populateSettings(globalVariable.profile);