# EDIT-THIS-README
X FOLDER STRUCTURE:
    X-data - copy to poke list file 
    X-utils file 
    X-app js - landing stuff to fire right away 
X HTML: 
    X-Main page
        X-div for game instructions
        X-div for images
JS:
    X-function to set info to storage 
    X-function to get info from storage 
    X -find item by id
        X-TEST
    X-function to generate three rando poke 
           X -three new pokemon
            X-check if unique 
            X-if no generate three more 
            X-once they are - render to page  
                X <-- need a function for this too..
                X -when rendering add them as a button to listen for click 
                X -call increment seen on these three 
   X -function incremenet seen 
        X-for all rendered to page 
        X-get from local storage 
        X-if in cart ++ seen
        X-if not add to cart with id and seen as 1
    X-function increment caught 
        X-for item clicked 
            X-get from local storage 
            X-if in cart ++ caught
            X-if not add to cart with id and seen as 1
    XOnClick 
        X-track turns 
        X-if turns = 10 
        X-redirect to results page 

X HTML: 
   X -Results page 
    X -div to show all caught with qty
    X -div to show all seen with times 
   
    X -render results function 
        X-get stats from local storage 
        X-get item by id to get name from original data set 
        X-render table elements with stats 
   
    X -clear results button
        X listener :  
            X -clear cart function 
            C -redirect to main page 

--Chart Day-- 
    X-get cart guts from chart.js
    X-function to get names
        X-will have to find by id to get name like rencer chart row
        X-take in array of objects return array of srings 
        X-TEST
    X-function to get caught count for each
        X-take in array of objects return array of numbers 
        X-TEST
    X-function to get seen count for each 
        X-same as above take in array of objects return array of numbers 
        X-TEST

    -add new arrays to correct parts of the chart on the page 

CSS
    -fix up css styling now

**THEN look at stretch goals
    