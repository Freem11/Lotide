
const flatten = function(actual) {
 
  let newArr = []
  for (i=0; i< actual.length; i++){
    if (Array.isArray(actual[i])) {
      for (j = 0; j< actual[i].length; j++){
          newArr.push(actual[i][j])
    }
  } else {
    newArr.push(actual[i])
  }

  console.log(newArr)
}
}

flatten([1, 2, [3, 4], 5, [6]]) 