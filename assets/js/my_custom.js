$(document).ready(function () {
    const steps = $(".step-content");
    let currentStep = 0;

    $(".nav-link").on("click", function () {
        const clickedIndex = $(this).index();
        if (clickedIndex !== currentStep) {
            goToStep(clickedIndex);
        }
    });

    $(".next-step").on("click", function () {
        if (currentStep < steps.length - 1) {
            goToStep(currentStep + 1);
        }
    });

    $(".prev-step").on("click", function () {
        if (currentStep > 0) {
            goToStep(currentStep - 1);
        }
    });

    $(".submit-btn").on("click", function () {
        // Handle submission logic here
        alert("Form submitted successfully!");
    });

    // Add the following lines to handle the new step
    $(".add-step").on("click", function () {
        // Assuming you have a button with class "add-step"
        // You can customize this logic to fit your needs
        const newStep = $("<div class='step-content'>New Step Content</div>");
        steps.removeClass("show active");
        steps.parent().append(newStep);
        steps = $(".step-content"); // Update the steps variable
        goToStep(steps.length - 1); // Go to the newly added step
    });

    function goToStep(index) {
        steps.eq(currentStep).removeClass("show active");
        currentStep = index;
        steps.eq(currentStep).addClass("show active");
        $('.full-page--step .nav').removeClass().addClass("nav tab-" + (currentStep + 1));

        // Scroll to the top of the form with class "parent_form"
        const parentForm = steps.eq(currentStep).find('.parent_form');
        if (parentForm.length > 0) {
            $('html, body').animate({
                scrollTop: parentForm.offset().top
            }, 'fast');
        }
    }


    // for selectpicker
    $('#your-selector').picker();
    $('.select_picker .picker .pc-select .pc-element').addClass('form-control');

    //for showing new address form.
    $(".address_btn").on("click", function () {
        $(".add_detailform").slideToggle("slow");
    });

    // for datepicker
    $('#datepicker').datepicker({
        uiLibrary: 'bootstrap5'
    });

});