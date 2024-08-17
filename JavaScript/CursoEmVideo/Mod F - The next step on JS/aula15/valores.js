let valores= [1,3,5,2,7,8,6,9] 

valores.sort()

/* Com FOR
for (var pos = 0; pos < valores.length; pos++){
    console.log(`Na Posição ${pos} o valor é ${valores[pos]}`)
}
    */

// Com FOR...IN

for (let pos in valores){
    console.log(`Na Posição ${pos} o valor é ${valores[pos]}`)
}