function minimo3(a, b, c) {
    var min2;
    var min3;

    if(a < b) 
    {
        min2 = a;
    }
    else 
    {  
        min2 = b;
    }

    if(min2 < c) 
    {
        min3 = min2;
    }
    else
    {
        min3 = c;
    }   

    return min3;
    

    // Add your logic here
}

document.write(minimo3(1, 2, 3)); // 1

// Edit your HTML in the appropriate HTML file
