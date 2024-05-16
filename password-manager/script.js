//logic to fill the passs table.....




console.log("working")

document.querySelector(".btn").addEventListener("click", (e)=>{
    e.preventDefault()
    console.log("clicked....")
    console.log(username.value, password.value)

    let passwordsss = localStorage.getItem("passwordsss")
    console.log(passwordsss)

    if(passwordsss == null){
        let json = []
        json.push({username: username.value, password: password.value })
        alert("PASSWORD SAVED");
        localStorage.setItem("passwordsss", JSON.stringify(json)) 
        
        // setItem took key and value together, here password is key and value taken from json array //
    }
    else{
        let json = JSON.parse(localStorage.getItem("passwordsss"))
        json.push({username: username.value, password: password.value})
        alert("PASSWORD SAVED");
        localStorage.setItem("passwordsss", JSON.stringify(json)) 
    }
})