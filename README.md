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
                -when rendering add them as a button to listen for click 
                -call increment seen on these three 


    -function incremenet seen 
        -for all rendered to page 
        -get from local storage 
        -if in cart ++ seen
        -if not add to cart with id and seen as 1

    -function increment caught 
        -for item clicked 
            -get from local storage 
            -if in cart ++ caught
            -if not add to cart with id and seen as 1

    OnClick 
        -track turns 
        -if turns = 10 
        -redirect to results page 

HTML: 
    -Results page 
    -div to show all caught with qty
    -div to show all seen with times 
    -clear results button 
        -clear cart function 
        -redirect to main page 

CSS
    -fix up css styling now

THEN look at stretch goals
    