var cart= JSON.parse(localStorage.getItem("cart"))
console.log(cart)






 var sum=0
    document.querySelector(".mybag").innerHTML="";
    cart.map(function (elem,ind) {
    var anchor=document.createElement("a")
    anchor.setAttribute("href",elem.url)

    var div = document.createElement("div");
    div.setAttribute("class", "product-box");

    var image_div = document.createElement("div");
    image_div.setAttribute("class", "image-box")

    var image = document.createElement("img");
    image.setAttribute("src", elem.img);

    var child_div = document.createElement("div");
    child_div.setAttribute("class", "child-box")

    var brand = document.createElement("p");
    brand.innerHTML = elem.brand;
    brand.setAttribute("class", "brand-name")

    var price_div = document.createElement("div");
    price_div.setAttribute("class", "price-box");

    var des = document.createElement("p");
    des.setAttribute('class',"des")
    des.textContent = elem.description;

    var price = document.createElement("p");
    price.textContent = "₹  "+ elem.price;
    price.setAttribute("class", "price-bold");

    var previous_price = document.createElement("p");
    previous_price.textContent = elem.preprice

    var discount = document.createElement("p");
    discount.textContent = elem.discount;
    discount.setAttribute("class", "discount-color");
    previous_price.setAttribute("class", "line-on");

    // image_div.append(image)


   

    // var child_2=document.createElement("div")
    var del=document.createElement("img")

    del.setAttribute("src","https://pantaloons.imgix.net/img/app/brands/pantaloons/icons/deleteBlack.svg")
   del.style.width="5%"
   del.style.marginLeft="30%"
   del.style.marginTop="-6%"

    
    image_div.append(image)

    
    price_div.append(price,previous_price,discount)
    child_div.append(brand,des,price_div)
 
    div.append(image_div,child_div,del)
    document.querySelector(".mybag").append(div);
    // document.querySelector(".mybag").append(child_div)


    pricetotal= elem.price
    sum += pricetotal;
   

   var totalprice= document.querySelector(".order-summary")
totalprice.innerHTML= "Sub total of cart   :"+sum
totalprice.style.fontWeight="bold"
totalprice.style.marginLeft="5%"
totalprice.style.fontSize="20px"

// document.querySelector(".length").append(cart.length)
   
del.addEventListener('click',function(){
    deleteitem(ind)
    console.log(ind)
})


console.log(sum)

});


var couponbutton=document.createElement('button')
couponbutton.innerHTML="Apply Coupon"
var coupon=document.createElement('h5')
coupon.innerHTML="Coupons: "
var coupontext=document.createElement('input')
coupontext.setAttribute("placeholder","APPLY COUPON CODE")
document.querySelector(".order-summary").append(coupon,coupontext,couponbutton)
couponbutton.addEventListener('click',checkpromo)


function checkpromo(){
               
    var promo=coupontext.value
    console.log(promo)
                 if (promo === "PANTALOON20") {
                     
                   var final = sum - (sum*20/100)
                   var para = document.createElement('h2')
                   para.innerHTML = "Final Amount:"+Math.floor(final);
                   document.querySelector(".order-summary").append(para)
                   
                     
                   

                }
                else{
                    var final= sum
                    var para = document.createElement('h2')
                     para.innerHTML = "Final Amount:" + final;
                     document.querySelector(".order-summary").append(para)
                      
                }

            }






function deleteitem(ind){
    cart.splice(ind,1);
    localStorage.setItem("cart",JSON.stringify(cart))
}


