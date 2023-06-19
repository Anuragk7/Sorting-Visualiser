const merge = (l,m,r, animations,arr) => { 
    var n1 = m - l + 1;
    var n2 = r - m;
    // Create temp arrays
    var L = [];
    var R = [];
    
      for (let i = 0; i < n1; i++){
        L[i] = arr[l + i];
      }
    for (let j = 0; j < n2; j++) {
        R[j] = arr[m + 1 + j];
    }
    // Copy data to temp arrays L[] and R[]
    
  
  
    // Merge the temp arrays back into arr[l..r]
  
    // Initial index of first subarray
    var i = 0;
  
    // Initial index of second subarray
    var j = 0;
  
    // Initial index of merged subarray
    var k = l;
   
    while (i < n1 && j < n2) {
      animations.push({type: "compare1", value: [l+i,j+1+m]})
      if (L[i].h <= R[j].h) {
          arr[k] = L[i];
          animations.push({type: "back", value: [l+i]})
          animations.push({type: "swap", value: [L[i].h,k]})
          

          i++;
          
          
      }
      else {
          arr[k] = R[j];
          animations.push({type: "back", value: [j+m+1]})
          animations.push({type: "swap", value: [R[j].h,k]})
          
          j++;
          
      }
      k++;
  }
  while (i < n1) {
      animations.push({type: "back", value: [i+l]})
      animations.push({type: "swap", value: [L[i].h,k]})
      arr[k] = L[i];
      i++;
      k++;
  }
  while (j < n2) {
    animations.push({type: "back", value: [j+m+1]})
    animations.push({type: "swap", value: [R[j].h,k]})
    arr[k] = R[j];
    j++;
    k++;
  }
 
}




function Merger(l,r, animations,arr){
if(l>=r){
    return;//returns recursively
}

var m = l+ parseInt((r-l)/2);

  Merger(l,m,animations,arr);
  Merger(m+1,r,animations,arr);

let obj = {type: "block",
value:[l,r]}
animations.push(obj);
merge(l,m,r,animations,arr)


}
export default Merger;