document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Fetch form data
    const formData = new FormData(event.target);

    // Construct object from form data
    const formDataObj = {};
    formData.forEach((value, key) => {
        formDataObj[key] = value;
    });

    // Here, you can send formDataObj to your server for processing, like saving to a database
    console.log(formDataObj);
    
    // Optionally, you can display a success message or redirect the user to a thank you page
    alert("Thank you for pre-booking! We will notify you once the product is available.");
});
