document.addEventListener("click", function(event){
	const popup = document.getElementById("login-dropdown");
	const popupCaret = document.getElementById("login-dropdown-caret");
	const popupButton = document.getElementById("login-dropdown-button");
	if (!popup.contains(event.target) && !popupCaret.contains(event.target) && !popupButton.contains(event.target)){
		popup.style.display = "none";
		popupCaret.style.display = "none";
	}
});

document.getElementById("login-dropdown-button").addEventListener("click", function(){
	document.getElementById("login-dropdown").style.display = "block";
	document.getElementById("login-dropdown-caret").style.display = "block";
});

document.getElementById("menu-button").addEventListener("click", function(){
	
});

document.getElementById("search-button").addEventListener("click", function(){
	const searchIcon = document.getElementById("search-icon");
	const searchbar = document.getElementById("searchbar");

	if (!searchIcon.classList.contains("active")){
		searchIcon.src = "../media/x.svg";
		searchIcon.classList.add("filter-white");
		searchIcon.classList.add("active");
		searchbar.style.display = "flex";
	} else {
		searchIcon.src = "../media/search_blue.svg";
		searchIcon.classList.remove("filter-white");
		searchIcon.classList.remove("active");
		searchbar.style.display = "none";
	}

});