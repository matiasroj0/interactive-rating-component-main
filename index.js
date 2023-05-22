const ratingSection = document.querySelector(".rating-section");
const thankYouSection = document.querySelector(".thank-you-section");
const submitBtn = document.querySelector(".submit-btn");
const ratingBtns = document.querySelectorAll(".rating");
const rating = document.querySelector(".rating-selection");


ratingBtns.forEach(btn => {
    btn.addEventListener("click", function(){
        rating.innerHTML = btn.innerHTML;
    })
});

submitBtn.addEventListener("click", function(){
    ratingSection.classList.add("hidden");
    thankYouSection.classList.remove("hidden");
})