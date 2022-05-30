// Add the coffee to local storage with key "coffee"
let container=document.getElementById('menu')
  let coffee=JSON.parse(localStorage.getItem('coffee')) || []
  let coffeeCount=document.getElementById('coffee_count')
  coffeeCount.innerText=coffee.length;
  async function allCoffee(){
    let url='https://masai-mock-api.herokuapp.com/coffee/menu';
    try {
      let res=await fetch(url)
      let data=await res.json()
      console.log(data.menu.data)
      append(data.menu.data)
    } catch (error) {
      console.log(error)
    }
  }
  allCoffee()
  function append(data){
    data.forEach(function(el){
      let div=document.createElement('div')

      let image=document.createElement('img')
      image.src=el.image;

      let type=document.createElement('h2')
      type.innerText=el.title;

      let price=document.createElement('h3')
      price.innerText=el.price;

      let button=document.createElement('button')
      button.innerText='Add to Bucket'
      button.setAttribute('id','add_to_bucket')
      button.addEventListener('click',function(){
        addToBucket(el)
      })

      div.append(image,type,price,button)
      container.append(div)
    })
  }

  function addToBucket(el){
    coffee.push(el)
    localStorage.setItem('coffee',JSON.stringify(coffee))
    window.location.reload()
  }