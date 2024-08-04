const images = [
    { src: "images/customer1.png", label: "Edward Newgate" },
    { src: "images/customer2.jpg", label: "Jane Doe" },
    { src: "images/customer3.jpg", label: "John Smith" }
];
let currentIndex = 0;

const prevImageButton = document.getElementById("prevImageButton");
const nextImageButton = document.getElementById("nextImageButton");
const customerImage = document.getElementById("customer");
const customerLabel = document.getElementById("customerLabel");
const dots = document.querySelectorAll(".arrow-nav .dot");

function updateCustomer() {
    if (customerImage && customerLabel) {
        customerImage.src = images[currentIndex].src;
        customerLabel.textContent = images[currentIndex].label;

        // Update dot visibility
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add("active");
                dot.classList.remove("inactive");
            } else {
                dot.classList.remove("active");
                dot.classList.add("inactive");
            }
        });
    }
}

if (prevImageButton && nextImageButton && customerImage && customerLabel) {
    updateCustomer();

    nextImageButton.onclick = () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCustomer();
    };

    prevImageButton.onclick = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCustomer();
    };
}