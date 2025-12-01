const button = document.querySelector("button")
const main = document.querySelector("main")
button.addEventListener("click", searchKrakens)

async function searchKrakens () {
   const persons = await fetch("http://localhost:3333").then(response => response.json())
    
   persons.map(person => {
    main.innerHTML += `
    <section>
            <h2>Nome: ${person.name}</h2>
            <p>Email: ${person.email}</p>
            <p>Idade: ${person.age} anos</p>
            <p>Apelido: ${person.nickname}</p>
    </section>
    <hr>
    `
   })
}