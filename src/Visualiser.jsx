import { useState } from "react";
function Visualiser () {
const [array,setarray] = useState([]);

const gendivs = () => {
    var nums = [...array];
    for (let i=0; i<250; i++ ){
      let x = Math.floor(Math.random()*600 + 10);
      nums[i] = x;
    }
    setarray(nums)
}
const merge = (l,m,r) => { 
  setTimeout(()=>{
    setarray((prev) => {
      const arr = [...prev]
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
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
    return arr;
    
    


    })

  }, 10)
   
   
}




function merger(l,r){
  if(l>=r){
      return;//returns recursively
  }
  var m =l+ parseInt((r-l)/2);
  
    merger(l,m);
    merger(m+1,r);

  
  setTimeout(merge,10,l,m,r)
 
 
}
function mergeSort () {
  let l = 0;
  let r = 249;
  merger(l,r);
}



const selectsort = () => {

   
  let t = [...array]
    // One by one move boundary of unsorted subarray
    for (let i = 0; i < 250; i++)
    {  
      
        // Find the minimum element in unsorted array
        let idx = i;
        for (let j = i + 1; j < 250; j++) {
        if (t[j] < t[idx])
            idx = j;
        }
        var temp1 = t[i];
        t[i] = t[idx];
        t[idx] = temp1
        // Swap the found minimum element with the first element
        setTimeout(()=> {
          setarray( (prev) => {
          
            let arr = [...prev]
            const temp = arr[i]
            arr[i] = arr[idx]
            arr[idx] = temp
            return arr
   
           })
        },i*50)
        


       
        
       
        
        
    }
   
    
}



const divs = array.map((ar, index) =>{
  const h = ar.toString()+ "px"
  return <div key={index} style = {{backgroundColor:"turquoise", margin: "1px", height: h, width: "3px"}}></div>
})
 
 return (
 <div>
   <div className="btns">
   <button onClick={gendivs}> Generate Array </button>
   <button onClick={selectsort}> Selection Sort</button>
  <button onClick={mergeSort}> Merge Sort</button>

   </div>
 
   <div className="d"> {divs} </div>
  
 
  </div>
  );
}
export default Visualiser;