function update(inputElement) {
    // Get the value or text based on the element type
    const inputValue = inputElement.tagName.toLowerCase() === 'select'
        ? inputElement.options[inputElement.selectedIndex].textContent
        : inputElement.value;

    // Mapping of input element ids to corresponding class names
    const fieldMappings = {
        'your_name': '.yourname',
        'interactionid': '.interactionid',
        'c_first_name': '.firstname',
        'c_last_name': '.lastname',
        'relationship': '.relationship',
        'order_number': '.ordernumber',  // No update needed for this field
        'intent': '.intent',
        'add_request': '.additionalrequest',
        'chat_disconnected': '.chatdisconnect',
        'email_sent': '.emailsent',
        'add_ghost_line': '.addghostline',
        'yy_rl_provided': '.yyrlprovided',
        'validator': '.validator',
        'resolution': '.resolution',
        'change_total_amount': '.change_total_amount',
        'airline_change_fee': '.airline_change_fee',
        'change_handling_fee': '.change_handling_fee',
        'change_fare_difference': '.change_fare_difference',
        'change_new_flight_details': '.change_new_flight_details',
        'cancel_total_amount': '.cancel_total_amount',
        'airline_cancel_fee': '.airline_cancel_fee',
        'cancel_handling_fee': '.cancel_handling_fee',
        'cancel_void_handling_fee': '.cancel_void_handling_fee',
        'name_correction_new_name': '.name_correction_new_name',
        'airline_name_correction_fee': '.airline_name_correction_fee',
        'name_correction_handling_fee': '.name_correction_handling_fee',
        'errands_flow': '.errandsflow'
    };

    // Update the corresponding element if it exists in the mapping
    const className = fieldMappings[inputElement.id];
    if (className) {
        document.querySelector(className).textContent = inputValue;
    } else {
        console.log('Unknown input element: ' + inputElement.id);
    }
}
