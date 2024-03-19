const app_id = '1a9d1a79'
const app_key ='2dbf4425905d61feea0b92f872f13ef7'


async function fetchData(){
    try{
        const category = document.getElementById('category').value.toLowerCase();
        const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=c2310fd8&app_key=ff0083f9fbed1c0b703eb8e0f66ad3b3%09&nutrition-type=logging&category=fast-foods&brand=mcdonald's`,
        {
            method: 'GET',
            headers : {
                'Content-Type' : 'application/json'
            }
        })

        if(!response.ok){
            throw new Error('try again')
        }
        const data = await response.json();

        for (let i = 0; i = data.length; i++){
        
        const display = data.hints[i].food[category]
        const displayElement = document.getElementById("display")  
        
        displayElement.innerHTML = display
        console.log(display)
        
        }

    }
    catch(error) {
        console.error(error);
    }

}





