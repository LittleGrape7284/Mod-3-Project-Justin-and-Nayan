var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Geography/US%20National%20Parks.csv"
var parkName = getColumn(url, 1)
var image = getColumn(url, 2)
var state = getColumn(url, 3)
var birth = getColumn(url, 4)
var area = getColumn(url, 5)
var visitors = getColumn(url, 6)
var description = getColumn(url, 7)

// Function: getbigArea
// This function finds all parks that are bigger than a given area.
// Parameter:
// Acres (number) - the minimum park size in acres
// Returns:
// An array of park names that are larger than the given area.
// If no parks are found, it returns a message.
function getbigArea(Acres){
 var bigArea= [];
 
 for(i=0;i< area.length;i++){
     
     if(area[i]>Acres){
       
         bigArea.push(parkName[i])
     }
     if(bigArea.length==0)
        return "There are no parks bigger than your selected area"
 }
  return bigArea
}
console.log (getbigArea(1))



// Function: ParkNames
// This function gives a list of park names in a specific state.
// Parameter:
// States (string) - the name of the state to search for
// Returns:
// An array of park names found in that state.
function ParkNames(States){


var matchingStates= [];
for(var i=0;i< state.length;i++){
    if(state[i].toLowerCase()==States.toLowerCase()){
        matchingStates.push(parkName[i])
    }
}
return matchingStates
}
console.log(ParkNames("virginia"))


// Function: DisplayImage
// This function finds the image URL for a specific national park.
// Parameter:
// parkPic (string) - the name of the park to search for
// Returns:
// An array containing the image URL(s) for the matching park.
function DisplayImage(parkPic){


var matchingImage= [];
for(var i=0;i< image.length;i++){
    if(parkName[i].toLowerCase()==parkPic.toLowerCase()){
        matchingImage.push(image[i])
    }
}
return matchingImage
}
console.log(DisplayImage("Arches"))


