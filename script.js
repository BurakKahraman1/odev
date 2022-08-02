const searchBar=document.querySelector('#searchBar');

searchBar.addEventListener('keypress',()=>{
    console.log(document.getElementsByTagName('p'));
})


axios('https://jsonplaceholder.typicode.com/photos?_limit=50')
.then(({data})=>{
    console.log(data)
    const bodyDiv=document.querySelector('.cardContent')
       
    data.forEach((e)=>{
        const li = document.createElement('li');
        const a = document.createElement('button');
        const img = document.createElement('img');
        const p = document.createElement('p');
        li.className = 'card';
        li.id=e.id
   
        a.classList = 'delete';
        a.addEventListener('click', removing); 
        function removing() { li.remove(); } 
        a.innerHTML='X'

        img.classList='cardImg'
        img.setAttribute('src',e.thumbnailUrl)

        p.classList='titles'
        p.innerHTML=e.title

        li.appendChild(a);
        li.appendChild(img)
        li.appendChild(p)

        bodyDiv.appendChild(li);
     
     
        // bodyDiv.innerHTML+=`
        //     <li class='card' id="${e.id}">
        //     <button class='delete'>X</button>
        //         <img class='cardImg' src="${e.thumbnailUrl}"/>
        //         <p> ${e.title}</p>
        //     </li>
        // `
     
    })
  
})


const Add=document.querySelector('#add');
Add.addEventListener('click',e=>{
    e.preventDefault()
   
    const ID=document.querySelector('#id')
    const title=document.querySelector('#title')
    const bodyDiv=document.querySelector('.cardContent')
    const url=document.querySelector('#url')
    const li = document.createElement('li');
    const a = document.createElement('button');
    const img = document.createElement('img');
    const p = document.createElement('p');
   
    if(title.value!==''){
    
        li.className = 'card ordered';
        li.id=ID.value
   
        a.classList = 'delete';
        a.addEventListener('click', removing); 
        function removing() { li.remove(); } 
        a.innerHTML='X'

        img.classList='cardImg'
        img.setAttribute('src','https://via.placeholder.com/150/92c952')

        p.classList='titles'
        p.innerHTML=title.value

        li.appendChild(a);
        li.appendChild(img)
        li.appendChild(p)

        bodyDiv.appendChild(li);
     


ID.value=' '
title.value=' '
url.value=' '
}
})

document.querySelector('#searchBar').addEventListener('input',searchIt);

function searchIt(){
   const searchB=document.querySelector('#searchBar')
   const filtering= searchB.value.toLowerCase()
   const titles=document.querySelectorAll('.titles')
   titles.forEach((e)=>{
    let text=e.textContent
    if(text.toLowerCase().includes(filtering.toLowerCase())){
        e.parentElement.style.display='flex'
    }else{
        e.parentElement.style.display='none'
    }
   })

}