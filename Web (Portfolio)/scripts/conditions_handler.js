document.addEventListener('DOMContentLoaded', function () {
    // Reference the dropdown and the sections to toggle
    const reasonForChatDropdown = document.getElementById('intent');
    const intentSections = document.querySelectorAll('.intent_change, .intent_cancel, .intent_name_correction');

    // Function to show or hide sections based on the selected reason
    function toggleIntentSections() {
        const selectedValue = reasonForChatDropdown.value;

        // Hide all sections and clear their input values by default
        intentSections.forEach(hideAndClearSection);

        // Show specific sections based on the selected option
        const sectionsToShow = document.querySelectorAll(`.${selectedValue}`);
        sectionsToShow.forEach(section => {
            section.style.display = 'block';
        });
    }

    // Helper function to hide a section and clear its input values
    function hideAndClearSection(section) {
        section.style.display = 'none';
        const inputs = section.querySelectorAll('input');
        inputs.forEach(input => {
            input.value = ''; // Clear each input field's value
        });
    }

    // Initial toggle on page load
    toggleIntentSections();

    // Event listener for dropdown changes
    reasonForChatDropdown.addEventListener('change', toggleIntentSections);
});