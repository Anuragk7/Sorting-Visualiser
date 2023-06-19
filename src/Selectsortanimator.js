const Selectsortanimator = (t) => {
    const animations = [];
    let c = 0;
    for (let i = 0; i < t.length; i++)
    {  
        let idx = i;
        animations[c] = {task:"compare1", value : [idx]};
        c++;

        for (let j = i + 1; j < t.length; j++) {
            animations[c] =  {task: "compare1",
            value: [j]};
        c++
        animations[c] =  {task: "compare2",
            value: [j]};
        c++
            if (t[j].h < t[idx].h){
              
              animations[c] = {task:"compare2", value : [idx]};
               c++;
              idx = j;
              animations[c] = {task:"compare1", value : [idx]};
               c++;
             
            }
        }
            
       
      
        
        for (let a = idx; a>i; a--){
            animations[c] =  {task: "swap",
            value: [a,a-1]}
            c++
            const temp = t[a];
            t[a] = t[a-1]
            t[a-1] = temp
        }
  
        
        animations[c] = {task: "done",
        value: [i]}
        c++
        // const temp = t[idx]
        // t[idx] = t[i]
        // t[i] = temp
      
        
        
    }
    console.log(t);
    return animations;
}
export default Selectsortanimator;