
module.exports = getDate;


function getDate(){
    var today = new Date();
  
    var options = {
     weekday: "long", 
     day: "numeric",
     month: "long"
    };
 
    let day = today.toLocaleDateString("en-JS", options);
    return day;
}

