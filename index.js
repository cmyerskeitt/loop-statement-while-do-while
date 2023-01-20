function padIt(str,n){
    let result = str 
    let count = 0 
    
    while (count < n ){
      if (count % 2 == 0){
        result = `*${result}`
      } else {
        result =`${result}*`
      }
      count++
     }
    return result
}