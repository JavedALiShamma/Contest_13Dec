/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
   
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i].profession=="developer"){
    //         console.log(arr[i]);
    //     }
        
    // }
    // This is printed using a for Loop
    //   will try using the Map function
    // let r=arr.map(e=>{
    //     if(e.profession=="developer"){
    //         console.log(e);
    //     };
    // })
    const rslt=arr.filter(e=>{
        return e.profession=="developer";
    });
    rslt.map(e=>{
        console.log(e);
    })
    
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    // const r1=arr.forEach(e=>{
    //     if(e.profession=="developer") {
    //         console.log(e);
    //         // return e;
    //     };
    // })
    // console.log(r1);
    const rslt=arr.filter(e=>{
        return e.profession=="developer";
    });
    rslt.forEach(e=>{
        console.log(e);
    });
  }
  
  function addData() {
    // Write your code here, just console.log
    arr.push({id:4,name:"susan",age:"20",profession:"intern"});
    console.log(arr);
    // const newObj=[{
    //     id:4,name:"susan",age:"20",profession:"intern"
    // }];
    // arr.push(newObj);
    // console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i].profession=="admin"){
    //         arr.pop();
    //     }
    // }
    // console.log(arr);
    const result=arr.filter(e=>{
        return e.profession!="admin";
    });
    console.log(result);
    
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    // Here we will try to concatenate two arr elements
    let arr1=[
        { id: 21, name: "javed", age: "28", profession: "MIS Engineer" },
        { id: 22, name: "Sanjay", age: "30", profession: "Coumputer Operator" },
        { id: 23, name: "Lovish", age: "25", profession: "oyo customercare" },
    ];
    let result=arr.concat(arr1);
    console.log(result);
  }