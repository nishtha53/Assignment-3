// answer 1
function validateCreditCard(ccNumberNoDashes) {

            //Remove dashes from creditCardNum string
            var ccNumberNoDashes = '';
            for (var i = 0; i < creditCardNum.length; i++) {
                if (creditCardNum[i] !== '-') {
                    ccNumberNoDashes += creditCardNum[i];
                }
            }

            // The credit card number must be 16 digits in length
            if (ccNumberNoDashes.length !== 16) {
                return false;
            }

            // All of the digits must be numbers
            for (var i = 0; i < ccNumberNoDashes.length; i++) {
                // store the current digit
                var currentNumber = ccNumberNoDashes[i];

                // turn the digit from a string to an integer (if the digit is in fact a digit and not anther char)
                currentNumber = Number.parseInt(currentNumber);

                // check that the digit is a number
                if (!Number.isInteger(currentNumber)) {
                    return false;
                }
            }

            // The credit card number must be composed of at least two different digits (i.e. all of the digits cannot be the same)
            var obj = {};
            for (var i = 0; i < ccNumberNoDashes.length; i++) {
                obj[ccNumberNoDashes[i]] = true;
            }
            
        //answe2
            var date_diff_indays = function (date1, date2) {
            dt1 = new Date(date1);
            dt2 = new Date(date2);
            return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
        }
        console.log(date_diff_indays('04/02/2014', '11/04/2014'));
        console.log(date_diff_indays('12/02/2014', '11/04/2014'));

            if (Object.keys(obj).length < 2) {
                return false;
            }

            // The final digit of the credit card number must be even
            if (ccNumberNoDashes[ccNumberNoDashes.length - 1] % 2 !== 0) {
                return false;
            }

            // The sum of all the digits must be greater than 16
            var sum = 0;
            for (var i = 0; i < ccNumberNoDashes.length; i++) {
                sum += Number(ccNumberNoDashes[i]);
            }
            if (sum <= 16) {
                return false;
            }

            return true;
        };

        
        console.log(validateCreditCard('9999-7777-8888-0000')); //true
        console.log(validateCreditCard('6666-6666-6666-1666')); //true
        console.log(validateCreditCard('a923-3211-9c01-1112')); //false
        console.log(validateCreditCard('4444-4444-4444-4444')); //false
        console.log(validateCreditCard('1211-1111-1111-1112')); //true
// answer3
   function three_digit_armstrong_number() {
            for (var i = 1; i < 10; ++i) {
                for (var j = 0; j < 10; ++j) {
                    for (var k = 0; k < 10; ++k) {
                        var pow = (Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3));
                        var plus = (i * 100 + j * 10 + k);
                        if (pow == plus) {
                            console.log(pow);
                        }
                    }
                }
            }
        }
        three_digit_armstrong_number();

//answer3
function lcm_two_numbers(x, y) {
            if ((typeof x !== 'number') || (typeof y !== 'number'))
                return false;
            return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
        }

        function gcd_two_numbers(x, y) {
            x = Math.abs(x);
            y = Math.abs(y);
            while (y) {
                var t = y;
                y = x % y;
                x = t;
            }
            return x;
        }
        console.log(lcm_two_numbers(3, 15));
        console.log(lcm_two_numbers(10, 15));
