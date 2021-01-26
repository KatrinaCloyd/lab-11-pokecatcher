# EDIT-THIS-README
FOLDER STRUCTURE:
    -data - copy to poke list file 
    -utils file 
    -app js - landing stuff to fire right away 

X HTML: 
    X-Main page
        X-div for game instructions
        X-div for images

JS:
    X-function to set info to storage 

    X-function to get info from storage 

    X -find item by id
    X    -TEST

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

HTML: 
   X -Results page 
    X -div to show all caught with qty
    X -div to show all seen with times 
   
    -render cart function 
        -get stats from local storage 
        -get item by id to get name from original data set 
        -
        -render table elements with stats 
   
   
   
    X -clear results button
        listener :  
            -clear cart function 
            -redirect to main page 

CSS
    -fix up css styling now

THEN look at stretch goals
    