function findMinAndRemove(array){
  let smallest = array[0]
  let rmvSmallestIdx = 0

  for (let i = 0; i<array.length; i++){
    if(array[i]<smallest){
      smallest = array[i]
      rmvSmallestIdx = i
    }
  }
  array.splice(rmvSmallestIdx, 1)
  return smallest
}

function insertionSort(array){
  let sortedArray = []
  while(array.length > 0){
    sortedArray.push(findMinAndRemove(array))
  }
  return sortedArray
}
