    document.querySelector("#button").addEventListener('click',makepayment)
    function makepayment(){
        var num = document.querySelector("#num").value
        var pass = document.querySelector("#pass").value
        var expiry = document.querySelector("#expiry").value

       if(num=="11001100" && pass=="123" && expiry=="2021-05"){
           console.log("vikas")
        window.location.href="otp.html"
       }
       else{
           alert("payment failed")
           
         
       }


    }