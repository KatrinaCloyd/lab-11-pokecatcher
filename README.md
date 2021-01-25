# EDIT-THIS-README
FOLDER STRUCTURE:
    -data - copy to poke list file 
    -utils file 
    -app js - landing stuff to fire right away 

HTML: 
    -Main page
        -div for game instructions
        -div for images

JS:
    -function to set info to storage 
        -same as get by ID from ecom page 

    -function to get info from storage 
        -same as get by ID from ecom page 

    -find item by id
        -same as get by ID from ecom page 

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

    -function to generate three rando poke 
            -three new pokemon
            -check if unique 
            -if no generate three more 
            -once they are - render to page 
                -when rendering add them as a button to listen for click 
            -call increment seen on these three 

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
    