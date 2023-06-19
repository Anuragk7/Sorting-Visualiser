import { useState } from "react";
function Tester (){
    
    const [arr,setarr] = useState([]);
    const create = () => {
        let a =[]
        for (let i=0; i<10; i++) {
            a[i] = 10-i;  
        }
        setarr(a)
        
    }
  

    const srt = () => {
        const x = [...arr]
        console.log(x)
        x.sort((a,b) => (a-b) )
        setarr(x);
        console.log(x)
    }
    return (<div>
        <button onClick={create}> Create Array </button>
        <div>
            {arr}
        </div>
        
        <button onClick={srt}> SORT </button>
        </div>);
}
export default Tester