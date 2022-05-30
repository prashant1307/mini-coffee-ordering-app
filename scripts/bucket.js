// On clicking remove button the item should be removed from DOM as well as localstorage.
let addedCoffee=JSON.parse(localStorage.getItem('coffee'))
let bucket=document.getElementById('bucket')
let totalPrice=document.getElementById('total_amount')

let sum=addedCoffee.reduce(function(sum,el,index){
  return sum+el.price
},0)
console.log(sum)
totalPrice.innerText=sum

function ordered(){
  addedCoffee.forEach(function(el,index){
     let div=document.createElement('div')

    let image=document.createElement('img')
    image.src=el.image;

    let type=document.createElement('h2')
    type.innerText=el.title;

    let price=document.createElement('h3')
    price.innerText=el.price;

    let remove=document.createElement('button')
    remove.innerText='Remove';
    remove.setAttribute('id','remove_coffee')
    remove.addEventListener('click',function(){
      removeCoffee(el,index)
    })
    
    div.append(image,type,price,remove)
    bucket.append(div)
  })
}
ordered()
function removeCoffee(el,index){
  addedCoffee.splice(index,1)
  localStorage.setItem('coffee',JSON.stringify(addedCoffee))
  window.location.reload()
}