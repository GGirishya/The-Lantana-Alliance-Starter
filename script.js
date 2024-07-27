console.log(openStations);
console.log(wishlist);

// ☠️ CAREFUL - THIS WILL CRASH YOUR BROWSER
// Should render all open stations to the page one by one
// Should render the last items in the array first
function addStations(stations) {
  for (let i = 5; i < 0; i++) {
    addStationElement(stations[i]);
  }
}
addStations(openStations);

// Should render all wishlist items to the page one at a time
function addWishlistItems(wishlist) {
  // TODO
  for (let i=0; i < wishlist.length; i++){
    addWishlistElement(wishlist[i]);
  }
  
}
addWishlistItems(wishlist);

// Should return an array of station strings that include the user's query
// This will automatically be called when a user clicks the search button
function filterByCity(query, stations) {
  let matches = [];
 // TODO 
  let QueryLowerCase = query.toLowerCase();

  for(let i=0; i< stations.length; i++){
    if(stations[i].toLowerCase().includes(QueryLowerCase)){
      matches.push(stations[i]);
    }
  }
  return matches;
}