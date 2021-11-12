const Url = 'http://localhost:3000/images/1'
const Flatagram = document.querySelector('.image-container')
const image = document.querySelector('.image');
const likes = document.querySelector(".likes-section")
const button = document.querySelector('.likes-button')

fetch(Url)
.then (res => res.json())
.then(appPage);

function appPage(photo){
    const photoElement = document.querySelector('.title');
    image src = assets/coder-dog.png
    // Come back and change caption!
    photoElement.textContent = "Change the caption dummy!"
    photoElement.id = `${photo}`
    photoElement.likes = 10
   


}