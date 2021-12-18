    document.querySelector("#button").addEventListener('click',payment)

    function payment(){
        var otp = document.querySelector("#pass").value

        if( otp=="1234"){
            alert("payment sucessful")

            var head=document.createElement('h1')

            head.textContent="Thanks for shopping with us"
            
            document.querySelector(".container").append(head)

            
        }
        else{
            alert("wrong otp")
        }

    }