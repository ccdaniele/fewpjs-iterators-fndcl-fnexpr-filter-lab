function findMatching(drivers, name) {
   return  drivers.filter(driver =>
        driver.toLowerCase() == name.toLowerCase()
   ) 
};

function fuzzyMatch(drivers, name) {
    return  drivers.filter(driver =>
         driver === name
    ) 
 };

 function matchName(drivers, name) {
    return  drivers.filter(driver =>
         driver === name
    ) 
 };