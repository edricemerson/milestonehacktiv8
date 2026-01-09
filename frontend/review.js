
document.addEventListener("DOMContentLoaded", function () {

    const reviewForm = document.getElementById("reviewForm");
    const reviewList = document.getElementById("reviewList");
    const reviewMsg = document.getElementById("reviewMsg");

    const nameInput = document.getElementById("username");
    const reviewInput = document.getElementById("reviewText");

    reviewForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = nameInput.value;
        const reviewText = reviewInput.value;
        const ratingInput = document.querySelector('input[name="rating"]:checked');

        if (!ratingInput) {
            alert("Please select a rating!");
            return;
        }

        const rating = ratingInput.value;

        const cardWrapper = document.createElement("div");
        cardWrapper.className = "container d-flex justify-content-center";

        const card = document.createElement("div");
        card.className = "form-content card shadow rounded-4 p-4 w-100 text-light";
        card.style.maxWidth = "820px";


        let stars = "";
        for (let i = 0; i < rating; i++) {
            stars += "⭐";
        }

        card.innerHTML = `
            <div class="d-flex justify-content-between align-items-start">
                <div>
                    <h5 class="mb-1">${name}</h5>
                    <div class="mb-2">${stars}</div>
                    <p class="mb-0">${reviewText}</p>
                </div>
                <button class="btn btn-sm btn-danger delete-btn">Delete</button>
            </div>
        `;

        card.querySelector(".delete-btn").addEventListener("click", function () {
            card.remove();
        });

        cardWrapper.appendChild(card);
        reviewList.prepend(cardWrapper);


        reviewMsg.classList.remove("d-none");
        setTimeout(() => reviewMsg.classList.add("d-none"), 2000);

        reviewForm.reset();
    });

});




