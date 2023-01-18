function palindrome(myString){

    /* remove special characters, spaces and make lowercase*/
    var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    
    /* reverse removeChar for comparison*/
    var checkPalindrome = removeChar.split('').reverse().join('');
    
    /* Check to see if myString is a Palindrome*/
    if(removeChar === checkPalindrome){
      
      document.write("<div>"+ myString + " is a Palindrome <div>");

    }else{
      
      document.write("<div>" + myString + " is not a Palindrome </div>");
    }
    }
    palindrome('"Malayalam"')
    palindrome('"8,10,7,8,8"')
    palindrome('"Madam"')
    palindrome('"Star Wars"')
    palindrome('"5,7,4,7,5"')
