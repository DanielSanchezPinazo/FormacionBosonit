/* Return true if the passed string looks like a valid US phone number. The user may fill out the form field any way they choose as long as it 
has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US 
phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm 
that the country code is 1. Return true if the string is a valid US phone number; otherwise return false. */

function telephoneCheck(str) {

    // if (/^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/gm.test(str)) {
    if (!str.search(/^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/gm)) {

/* 
^ asserts position at start of a line

1st Capturing Group (1\s?)?
? matches the previous token between zero and one times, as many times as possible, giving back as needed (greedy)
1 matches the character 1 with index 4910 (3116 or 618) literally (case sensitive)
\s matches any whitespace character (equivalent to [\r\n\t\f\v \u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff])
? matches the previous token between zero and one times, as many times as possible, giving back as needed (greedy)

2nd Capturing Group (\d{3}|\(\d{3}\))
1st Alternative \d{3}
\d matches a digit (equivalent to [0-9])
{3} matches the previous token exactly 3 times
2nd Alternative \(\d{3}\)
\( matches the character ( with index 4010 (2816 or 508) literally (case sensitive)
\d matches a digit (equivalent to [0-9])
{3} matches the previous token exactly 3 times
\) matches the character ) with index 4110 (2916 or 518) literally (case sensitive)

Match a single character present in the list below [\s\-]
? matches the previous token between zero and one times, as many times as possible, giving back as needed (greedy)
\s matches any whitespace character (equivalent to [\r\n\t\f\v \u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff])
\- matches the character - with index 4510 (2D16 or 558) literally (case sensitive)
\d matches a digit (equivalent to [0-9])
{3} matches the previous token exactly 3 times

Match a single character present in the list below [\s\-]
? matches the previous token between zero and one times, as many times as possible, giving back as needed (greedy)
\s matches any whitespace character (equivalent to [\r\n\t\f\v \u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff])
\- matches the character - with index 4510 (2D16 or 558) literally (case sensitive)
\d matches a digit (equivalent to [0-9])
{4} matches the previous token exactly 4 times
$ asserts position at the end of a line

Global pattern flags 
g modifier: global. All matches (don't return after first match)
m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string) */

        return true;

    }

    return false;
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("1(555)555-5555"));
console.log(telephoneCheck("555-5555"));
console.log(telephoneCheck("5555555"));
console.log(telephoneCheck("1 555)555-5555"));
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("1 456 789 4444"));
console.log(telephoneCheck("123**&!!asdf#"));
console.log(telephoneCheck("55555555"));
console.log(telephoneCheck("(6054756961)"));
console.log(telephoneCheck("2 (757) 622-7382"));
console.log(telephoneCheck("0 (757) 622-7382"));
console.log(telephoneCheck("-1 (757) 622-7382"));
console.log(telephoneCheck("2 757 622-7382"));
console.log(telephoneCheck("10 (757) 622-7382"));
console.log(telephoneCheck("27576227382"));
console.log(telephoneCheck("(275)76227382"));
console.log(telephoneCheck("2(757)6227382"));
console.log(telephoneCheck("2(757)622-7382"));
console.log(telephoneCheck("555)-555-5555"));
console.log(telephoneCheck("(555-555-5555"));
console.log(telephoneCheck("(555)5(55?)-5555"));
console.log(telephoneCheck("55 55-55-555-5"));
console.log(telephoneCheck("11 555-555-5555"));






