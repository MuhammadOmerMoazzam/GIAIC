var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// making an array of favourite places
var favourite_places = ["Pakistan", "Macca", "Madina", "Qatar", "Oman"];
console.log("List of favourite palces (original order):\n", favourite_places);
/* sorting in alphabatical order (Pass By Value--without modifying original array)
making sorted copy of the array using the spread operator ([...favourite_places])
and the sort() method
*/
var sorted_list = __spreadArray([], favourite_places, true).sort();
console.log("\nSorted in alphabatical order(By value Not by reference, So original list is Not affected):\n", sorted_list);
// displaying that list is in original order
console.log("\nOriginal List:\n", favourite_places);
// reverse alphabetical order
console.log("\nIn Reverse Alphabetical Order:\n", sorted_list.reverse());
// again displaying that list is in original order
console.log("\nOriginal List:\n", favourite_places);
// Reverse the order of original list
console.log("\nChanging order of original list using reverse() \n", favourite_places.reverse());
// displaying that original list has been changed
console.log("\nOriginal List:\n", favourite_places);
// again using reverse() method to bring the list to it's original state
console.log("\nAgain reversing the order to bring the list back to it's original state:\n", favourite_places.reverse());
// displaying that the list is back to it's original state
console.log("\nOriginal List:\n", favourite_places);
// sorting array (Pass By Reference)
var sorted_array = favourite_places.sort();
console.log("\nArray sorted by reference:\n", sorted_array);
// displaing original array
console.log("\nOriginal Array:\n", favourite_places);
// Sorting array in reverse alphabetical order, by reference
console.log("\nArray sorted in reverse order by reference:\n", sorted_array.reverse());
// displaing original array
console.log("\nOriginal Array:\n", favourite_places);
