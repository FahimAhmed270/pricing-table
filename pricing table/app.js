let priceToggler = document.querySelector('.price-toggle');
let price = document.querySelectorAll('.price');
let duration = document.querySelectorAll('.duration');

priceToggler.onclick=()=>{
    priceToggler.classList.toggle('active');

    if(priceToggler.classList.contains('active')){
        for(let i = 0; i <duration.length; i++){
            duration[i].innerText='/yr'
        }
        for(let p = 0; p <price.length; p++){
            price[p].innerText=  price[p].innerText * 10;
        }
    }else{
        for(let i = 0; i <duration.length; i++){
            duration[i].innerText='/mo';
        }
        for(let p = 0; p <price.length; p++){
            price[p].innerText = price[p].innerText / 10;
        }
    }
    
}
  