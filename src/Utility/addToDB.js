const getStoreApp =()=>{
    const StoredAppSTR = localStorage.getItem("InstallList")
    if(StoredAppSTR){
        const StoredAppData= JSON.parse(StoredAppSTR);
        return StoredAppData

    }
    else{
        return [];
    }
}





const addToStoreApp =(Id)=>{
    const StoredAppData = getStoreApp();

    if (StoredAppData.includes(Id)){
        alert ("Already Installed")

    }
    else{
        StoredAppData.push(Id)
    }
// console.log(StoredAppData) 
    const data = JSON.stringify( StoredAppData)
    localStorage.setItem("InstallList",data)
}
export {addToStoreApp,getStoreApp}