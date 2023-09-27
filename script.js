//turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll(".nextprev-btn");

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute("data-page");
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains("turn")) {
            pageTurn.classList.remove("turn");
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        } else {
            pageTurn.classList.add("turn");
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    };
});

//contact me button when click
const pages = document.querySelectorAll(".book-page.page-right");
const contactMeBtn = document.querySelector(".btn.contact-me");

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add("turn");
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
};

//create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

//back profile button when click
const backProfileBtn = document.querySelector(".back-profile");

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove("turn");
            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
};

//opening book animation
const coverRight = document.querySelector(".cover.cover-right");
const pageLeft = document.querySelector(".book-page.page-left");

//opening animation (cover right animation)
setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);

setTimeout(() => {
    coverRight.classList.add("turn");
}, 2100);

//opening animation (page left or profile page animation)
setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200);

//opening animation (all page right animation)
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove("turn");
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500);
    }, (index + 1) * 200 + 2100);
});

// email responses
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission and page reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // If all fields are valid, construct the email
    const subject = "Contact Form Submission from " + name;
    const body = "Name: " + name + "\nEmail: " + email + "\nMessage:\n" + message;

    const mailtoLink = "mailto:recipient@example.com" + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;
});
