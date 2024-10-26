
//1  if you get getItem ('job-application') to localStorage , then parse to json. and return. of don't get return empty array []
const getStoredJobApplication=()=>{
    const storedJobApplication=localStorage.getItem('job-applications');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}

 // 2 save
const saveJobApplication=(id)=>{
   
    const storedJobApplication=getStoredJobApplication();
    const exists=storedJobApplication.find(jobId => jobId === id);
    if(!exists){
        storedJobApplication.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplication))
    }
}
export{saveJobApplication, getStoredJobApplication }



