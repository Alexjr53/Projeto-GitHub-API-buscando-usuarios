const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="foto de perfil do usuario" /> 
                                        <div class="data">
                                            <h1>${user.name ?? 'não possui nome cadastrado 😢'}</h1>
                                            <p>${user.bio ?? 'não possui bio cadastrado 😢'}</p>
                                            <p>👥 Seguindo: ${user.following}</p>
                                            <p>👥 Seguidores: ${user.followers}</p>
                                        </div>
                                      </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens +=  `<li>
                                                                    <a href="${repo.html_url}" target="_blank">
                                                                        ${repo.name}
                                                                        <ul class="repositories-stats">
                                                                            <li class="stats">🍴${repo.forks_count}</li>
                                                                            <li class="stats">⭐${repo.stargazers_count}</li>
                                                                            <li class="stats">👀${repo.watchers_count}</li>
                                                                            <li class="stats">👨‍💻${repo.language ?? '-'}</li>
                                                                        </ul>
                                                                    </a>
                                                                </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML +=  `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        let eventsItens = ''
        user.events.forEach(events => eventsItens += `<li><span>${events.repo.name}</span> - ${events.payload.commits[0].message}</li>`)
        if (user.events.length > 0){
            this.userProfile.innerHTML += `<div class= "events">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens}</ul>
                                            </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export {screen}