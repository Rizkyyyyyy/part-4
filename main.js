


const sum1 = new Function('x','y', 'console.log(x+y)')

function sum2(x,y) {
    if(x + y == 4){
       console.log('wowwwww')
        }
    }


const sum3 = (x,y) =>{
    console.log( x + y)
}

function randomsize(){
    const randomNumber = (Math.random() * 1000)
    if (randomNumber > 200){
        console.log('wow lebih dari 200', randomNumber)
    }else{
        console.log(randomNumber)
    }
}
randomsize()
sum1(1,1)
sum2(2,2)
sum3(3,3)
