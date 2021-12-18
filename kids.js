

var data=JSON.parse(localStorage.getItem("kids")) || [];

 displayitem(data);


function displayitem(data)
{

    document.querySelector(".main").innerHTML="";
data.map(function (elem) {
      var anchor=document.createElement("a")
    anchor.setAttribute("href","kidsproduct.html")

    var div = document.createElement("div");
    div.setAttribute("class", "product-box");

    var image_div = document.createElement("div");
    image_div.setAttribute("class", "image-box")

    var image = document.createElement("img");
    image.setAttribute("src", elem.img);

    var child_div = document.createElement("div");

    var brand = document.createElement("p");
    brand.innerHTML = elem.brand;
    brand.setAttribute("class", "brand-name")

    var brand_div = document.createElement("div");
    brand_div.setAttribute("class", "brand-box");

    var des = document.createElement("p");
    des.textContent = elem.description;

    var price = document.createElement("p");
    price.textContent = "₹" + elem.price;
    price.setAttribute("class", "price-bold");

    var previous_price = document.createElement("p");
    previous_price.textContent = elem.preprice

    var discount = document.createElement("p");
    discount.textContent = elem.discount;
    discount.setAttribute("class", "discount-color");
    previous_price.setAttribute("class", "line-on");

    var price_div = document.createElement("div");
    price_div.setAttribute("class", "price-box");

     anchor.append(image)
    image_div.append(anchor)

    price_div.append(price, previous_price, discount);

    brand_div.append(brand, des)

    child_div.append(image_div, brand_div, price_div);

    div.append(child_div)

    document.querySelector(".main").append(div);
});

}
 function numsort(){
     var selected = document.querySelector("#sort").value

    if(selected=="low"){
        data.sort(function(a,b){
            return Number(a.price)-Number(b.price)
               
        })    
        }
         if  (selected == "high") {
                data.sort(function (a, b) {
                    return Number(b.price) - Number(a.price)
                })
            console.log(data) 
        }

        // localStorage.setItem("data",JSON.stringify(data))
         displayitem(data)
}

//  document.querySelector("#sort").addEventListener("onchange",sortout)


 function filterbrand(){

  
            var selected=document.querySelector("#filterbrand").value
            var brand =data.filter(function(el){
                // return selected ==el.cat;
                return selected == el.brand
            })
            displayitem(brand)
}

function filterdiscount(){
    var selected=document.querySelector("#filterdiscount").value



    var discount=data.filter(function(el){
        return selected==el.discount
    })
    
    displayitem(discount)
}

    function alphasort(){
        var select=document.querySelector("#alpha").value

        console.log(select)
        if(select=="asc"){
            data.sort(function(a,b){
                    var u = a.brand.toUpperCase();
                    var w = b.brand.toUpperCase();
                    return u == w ? 0 : u > w ? 1 : -1;
            })
        }
        if (select == "dsc") {
            data.sort(function (a, b) {
                var u = a.brand.toUpperCase();
                var w = b.brand.toUpperCase();
                return u == w ? 0 : u < w ? 1 : -1;
            })
        }
        console.log(data)
        displayitem(data)
    }
 