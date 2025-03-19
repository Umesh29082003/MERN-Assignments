// Immediately Invoked Function EXPRESSION (IIFE)
(function chai(){       //named IIFE
    console.log('DB Connected')
}
)();  //Give semi colon as the IIFe doesnt know 
//when to stop so there will be error if there another IIFe is there

((name)=>{          //not named IIFE with parameters
    console.log(`DB Connected, Hello ${name}`)
}
)("Umesh")