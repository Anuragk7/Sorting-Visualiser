import { useState, useEffect} from "react";
import Selectsortanimator from "./Selectsortanimator";
import Merger from "./Merger";
function Visualiser2 () { 

const [array,setarray] = useState([]);
const[len,setlen] = useState(25);
const[speed,setspeed] = useState(5);


const gendivs = () => {
    let nums = [];
    for (let i=0; i<len; i++ ){
      let x = Math.floor(Math.random()*300 + 5);
      let obj = {
        h: x,
        color: "turquoise"
      }
      nums[i] = obj;
    }
    setarray(nums);
}
useEffect (gendivs,[len]);

const handlespeed = (e) => {
  const x = (e.target.value);
  setspeed(x);
}

function mergeSort () {
  const animations = []
  let arr = [...array]
  
  let l = 0;
  let r = len-1;
  Merger(l,r, animations,arr);
  console.log(arr);
  var sorted = arr
  sorted.sort((a,b) => {return a.h - b.h})
  console.log(sorted)
  for (let i=0; i<animations.length; i++){
    setTimeout( () => {
      setarray((prev)=> {
        let a = [...prev]
        if (animations[i].type === 'compare1') {
          let x =0;
          let y= 1;
          let in1 = animations[i].value[x]
          let in2 = animations[i].value[y]
          
          a[in1].color = "red"
          a[in2].color = "red"
        }
        else if (animations[i].type === 'back'){
          let x = 0;
          let in1 = animations[i].value[x];
          a[in1].color = "turquoise"

        }
        else if (animations[i].type === 'swap') {
          let x =0;
          let y= 1;
          let in1 = animations[i].value[x]
          let in2 = animations[i].value[y]
          a[in2].h = in1;
         
        }
        else if (animations[i].type === 'block') {
          let x =0;
          let y= 1;
          let in1 = animations[i].value[x]
          let in2 = animations[i].value[y]
          for (let x=in1; x<=in2; x++){
            a[x].color = "blue";
          }
         
        }

        return a;
      } ) }
  ,i*100/(1*speed))
  }
  console.log(array)
}






const selectsort = () => {

   
  let t = [...array]
  
  const animations = Selectsortanimator(t);
  
  for (let i=0; i<animations.length; i++ ){
    setTimeout( ()=> {
        setarray( (prev) => {
        const nums = [...prev]
            if (animations[i].task === "compare1"){
                let x =0
                let b1 = animations[i].value[x]
                nums[b1].color = "red"
            }
            else if (animations[i].task === "compare2"){
                let x =0
               
    
                let b1 = animations[i].value[x]
                nums[b1].color = "turquoise"
                
            }
            else if (animations[i].task === "swap"){
                let x =0
                let y =1
    
                let b1 = animations[i].value[x]
                let b2 = animations[i].value[y]
                const temp = nums[b2];
                nums[b2] = nums[b1];
                nums[b1] = temp;
                
            }
            else if (animations[i].task === "done"){
                let x =0
                
    
                let b1 = animations[i].value[x]
                
                nums[b1].color = "pink"
          
                
            }
            else if (animations[i].task === "find"){
              let b1 = animations[i].value;
              if (nums[b1].color === "pink"){
                 nums[b1].color = "turquoise";
              }
              else {
                nums[b1].color = "pink";
              }
              
             }
            
            return nums}
            )
        
    }, i*200/(Math.pow(2,speed)));
   
  }
  console.log(array)
}
 const handlelen = (e) => {
  const x = e.target.value*50
  setlen(x);

 }
    

let divs =   array.map((ar, index) => {
  const h = ((ar.h)/9).toString()+ "vw"
  const clr = ar.color
  return <div className="bars" key={index} style = {{backgroundColor: clr, margin: "1px", height: h, width: "3px"}}></div>})
  

  return (
  <div>
    
    <div className= "tab">
   
     {/* <div className="controls"> */}
     <div  className="controls">
     <div>
     <label >Array Size</label>
      <input type={"range"}  min = {"1"} max= {"5"} onChange={handlelen} defaultValue = {len/25}/>
      {len}
      </div>
      <div >
      <label>Sorting speed</label>
      <input type={"range"} min = "1" max= "10" onChange={handlespeed} defaultValue = {speed}/>
      {speed}
     </div>
     </div>
    
     

     {/* </div> */}
    
    
     
      <div className="btns"> 
     <button onClick={gendivs}><label className="blabel">Generate Array</label> </button>
     <button onClick={selectsort}> <label className="blabel">Selection Sort</label></button>
     <button onClick={mergeSort}><label className="blabel">Merge Sort</label></button>
      </div>
     
      
     
    
    </div>
    
      <div className="d">
      {divs}
      </div>
    
    
     </div>
     );

  
}
export default Visualiser2;