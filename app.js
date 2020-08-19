            //iphone plus button handler
        const iphonePlusBtn = document.querySelector("#iphonePlus");
            iphonePlusBtn.addEventListener("click",function(){
                document.querySelector("#phoneAmount").value = 1+updateBtn("#phoneAmount")
                document.querySelector("#phonePrice").innerHTML= 1219+updatePrice("#phonePrice")
        })
            //iphone minus button handler
        const iphoneMinusBtn = document.querySelector("#iphoneMinus");
            iphoneMinusBtn.addEventListener("click",function(){
        const iMinusBtn = document.querySelector("#phoneAmount").value 
            if(iMinusBtn <= 0){
                alert("This number is not valid")
            }else{
            document.querySelector("#phoneAmount").value = -1+updateBtn("#phoneAmount")
            document.querySelector("#phonePrice").innerHTML= -1219 + updatePrice("#phonePrice")
            }
            
        })
             //case Minus button handler
       const caseMinusBtn = document.querySelector("#caseMinusBtn");
             caseMinusBtn.addEventListener("click",function(){
       const cMinusBtn=document.querySelector("#caseAmount").value 
                if(cMinusBtn <= 0){
                    alert("This number is not valid")
                }else{
             document.querySelector("#caseAmount").value = -1+updateBtn("#caseAmount")
             document.querySelector("#casePrice").innerHTML= -59 + updatePrice("#casePrice")
                }
        })
             //case plus button handler
        const casePlusBtn = document.querySelector("#casePlusBtn");
        casePlusBtn.addEventListener("click",function(){
        document.querySelector("#caseAmount").value = 1+updateBtn("#caseAmount")
        document.querySelector("#casePrice").innerHTML= 59 + updatePrice("#casePrice")
        }) 
         // chech out  button handler
        const checkOutBtn = document.querySelector("#checkOutBtn");
              checkOutBtn.addEventListener("click",function(){
                const phoneP = updatePrice("#phonePrice")
                const caseP = updatePrice("#casePrice")
                const totalPrice = phoneP + caseP
                document.querySelector("#subTotal").innerHTML = totalPrice   
                document.querySelector("#totalPrice").innerHTML = totalPrice
              })
        function updateBtn(id){
            const phoneAmount = document.querySelector(id).value
            const phoneQuantity = parseInt(phoneAmount);
                return phoneQuantity;
        }
       function updatePrice(id){
            const phonePrice = document.querySelector(id).innerHTML
            const iPhonePrice = parseInt(phonePrice);
            return iPhonePrice ;
        }
         