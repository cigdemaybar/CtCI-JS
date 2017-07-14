function isValid(s){
    // Complete this function
    var hash1 = {};
    for(var i = 0; i < s.length; i++){
        if(hash1[s[i]]){
            hash1[s[i]]++;
        } else {
            hash1[s[i]] = 1;
        }
    }
    var hashValues = {};
    for(var key in hash1){
        if(hashValues[hash1[key]]){
            hashValues[hash1[key]]++;
        } else {
          hashValues[hash1[key]] = 1;
        }
    }

    var valuesKeys = Object.keys(hashValues)
    if(valuesKeys.length === 1){
        console.log('YES')
    } else if (valuesKeys.length > 2){
        console.log('NO')
    } else if (valuesKeys.length === 2){
      var smallerKey, biggerKey, smallerValue, biggerValue;
      if (+valuesKeys[0] > +valuesKeys[1]){
        smallerKey = +valuesKeys[1]
        smallerValue = hashValues[valuesKeys[1]]
        biggerKey = +valuesKeys[0]
        biggerValue = hashValues[valuesKeys[0]]
      } else {
        smallerKey = +valuesKeys[0]
        smallerValue = hashValues[valuesKeys[0]]
        biggerKey = +valuesKeys[1]
        biggerValue = hashValues[valuesKeys[1]]
      }

      if(smallerKey === 1 && smallerValue === 1){
        console.log('YES')
      } else if ((biggerValue === 1) && (smallerValue === 1)) {
        console.log('YES')
      } else if (biggerValue === 1 && (biggerKey===smallerKey+1)) {
        console.log("YES")
      } else {
        console.log('NO')
      }
    }
}

isValid('hfchdkkbfifgbgebfaahijchgeeeiagkadjfcbekbdaifchkjfejckbiiihegacfbchdihkgbkbddgaefhkdgccjejjaajgijdkd')

