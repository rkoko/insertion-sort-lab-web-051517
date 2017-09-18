//in selection sort - inner loops is over teh unsorted elements
//in insertion sort, each pass of the inner loop iterates over the sorted elements

function findMinAndRemove(array){
  let smallest = array[0]
  let index = 0

  for(let i=0; i<array.length; i++){
    if(array[i] < smallest){
      smallest = array[i]
      index = i
    }
  }
  array.splice(index, 1)
  return smallest
}


function insertionSort(array){
  let sortedArray = []
  while (array.length > 0){
    sortedArray.push(findMinAndRemove(array))
  }
  return sortedArray
}
