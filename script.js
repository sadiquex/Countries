
button = document.getElementById('btn')

// click event to call function
button.addEventListener('click', getData);

function getData(){
    xhr = new XMLHttpRequest();



    xhr.onload = function() {
        if(this.status === 200){
            resp = JSON.parse(this.responseText);
            // console.log(resp[0].name)

            resp.forEach(country => {

                // console.log(country.name)

                const storeName = document.createElement('li');
                const storeImage = document.createElement('img')
                 
                storeName.innerHTML = country.name;
                storeImage.src = country.flag;
                storeName.appendChild(storeImage);
                document.querySelector('.names').appendChild(storeName);

            })
        }else{
            console.log('An err occured')
        }
    }


    xhr.open('GET', 'https://restcountries.com/v2/all', true);

    xhr.send();

} 











// https://restcountries.eu/rest/v2/all