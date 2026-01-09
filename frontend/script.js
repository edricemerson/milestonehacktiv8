const links = document.querySelectorAll(".navbar-custom a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

document.getElementById("reviewForm").addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("reviewMsg").classList.remove("d-none");
  this.reset();
});


// profile-page
// Create fake user if none exists
if (!localStorage.getItem("user")) {
  localStorage.setItem("user", JSON.stringify({
    username: "edric_emerson",
    email: "edric@email.com",
    type: "Personal User"
  }));
}

const user = JSON.parse(localStorage.getItem("user"));

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const typeInput = document.getElementById("type");
const form = document.getElementById("profileForm");
const msg = document.getElementById("profileMsg");
const deleteBtn = document.getElementById("deleteBtn");

// Load profile
if (user) {
  usernameInput.value = user.username;
  emailInput.value = user.email;
  typeInput.value = user.type;
}

// Save changes
form.addEventListener("submit", function (e) {
  e.preventDefault();

  user.username = usernameInput.value;
  localStorage.setItem("user", JSON.stringify(user));

  msg.classList.remove("d-none");

  setTimeout(() => {
    msg.classList.add("d-none");
  }, 2500);
});

// Delete profile
deleteBtn.addEventListener("click", function () {
  const confirmDelete = confirm("Are you sure you want to delete your profile?");

  if (confirmDelete) {
    localStorage.removeItem("user");
    alert("Profile deleted.");
    window.location.href = "login.html";
  }
});



