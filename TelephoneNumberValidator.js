function telephoneCheck(str) {
    const regex = /^1? ?(( ?\d{3}[- ]*)|(\( ?\d{3}[- ]*\) *))\d{3}[- ]?\d{4}$/;

    // OR 
    // const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/

    return regex.test(str);

}

// Regex tester websites
// https://www.regexpal.com/
// regex101.com

// Better process explanation

/* function telephoneCheck(str) {

    const validPatterns = [
        // test 555-555-5555
        /^\d{3}-\d{3}-\d{4}$/,

        // test 1 555-555-555
        /^1 \d{3}-\d{3}-\d{4}$/,

        // test 1 (555) 555-5555
        /^1 \(\d{3}\) \d{3}-\d{4}$/,

        // test 5555555555
        /^\d{10}$/,

        // test (555)555-5555
        /^\(\d{3}\)\d{3}-\d{4}$/,

        // test 1 555 555 5555
        /^1 \d{3} \d{3} \d{4}$/,

        // test 1(555)555-5555
        /^1\(\d{3}\)\d{3}-\d{4}$/

    ]

    return validPatterns.some((pattern) => pattern.test(str));
} */