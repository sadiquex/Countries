// getting dom elements
const refresh = document.getElementById('btn');
const input = document.getElementById('search');

// call filter in search input
input.addEventListener('keydown', filterCountries)
// an event to refresh list
refresh.addEventListener('click', clearInput)

function clearInput() {
    input.value = '';

    getData();
}

function filterCountries(e){
    const userTyped = e.target.value.toLowerCase();
    
    document.querySelectorAll('li').forEach(
        function(country){
            const search =country.firstChild.textContent;
            // if else statement to display countries which contain letters with similar letters/index more than -1
            if(search.toLowerCase().indexOf(userTyped) > -1){
                country.style.display = 'block';
            }else{
                country.style.display = 'none';
            }
        }
    );
}

getData()

// fetch data from api with xhr
function getData(){
    xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if(this.status === 200){
            resp = JSON.parse(this.responseText);
            // console.log(resp[0].name)
            // console.log(resp)

            resp.forEach(country => {

                const ul = document.querySelector('.names-list');
                const li = ul.getElementsByTagName('li');

                // console.log(country.name)
                const storeName = document.createElement('li');
                const storeImage = document.createElement('img');
                storeImage.classList.add('flags');
                 
                storeName.innerHTML = country.name;
                storeImage.src = country.flag;
                storeName.appendChild(storeImage);
                ul.appendChild(storeName);
            })
        }else{
            console.log('An err occured');
        }
    }
    xhr.open('GET', 'https://restcountries.com/v2/all', true);

    xhr.send();

} 

// fixes to make
/* - when user types and erases last letter, the similar country doesnt show anymore,until user deletes last 2 letters
    - the input field is cleared, now the countries should be set to default
    */