const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="foto de perfil do usuario" /> 
                                        <div class="data">
                                            <h1>${user.name ?? 'não possui nome cadastrado 😢'}</h1>
                                            <p>${user.bio ?? 'não possui bio cadastrado 😢'}</p>
                                            <p>👥 <strong>Seguindo</strong>: ${user.following}</p>
                                            <p>👥 <strong>Seguidores</strong>: ${user.followers}</p>
                                        </div>
                                      </div>`
    },

    renderRepositories(user) {
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href="${repo.html_url}" target="_blank"> 
                                                                        ${repo.name}
                                                                        <ul class="repositories-stats">
                                                                            <li class="stats">🍴${repo.forks_count}</li>
                                                                            <li class="stats">⭐${repo.stargazers_count}</li>
                                                                            <li class="stats">👀${repo.watchers_count}</li>
                                                                            <li class="stats">👨‍💻${repo.language ?? 'sem linguagem'}</li>
                                                                        </ul>
                                                                    </a>
                                                                </li>`)
        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                           </div>`
        }
    },

    renderEvents(user) {
         let eventsItens = ''
        user.events.forEach(events => {
            if (events.type === "PushEvent") {
                eventsItens += `<li><span>${events.repo.name}</span> -${events.payload.commits[0].message}</li>`
            } else if (events.type === "CreateEvent") {
                eventsItens += `<li><span>${events.repo.name}</span> -${events.payload.description ?? 'Sem descrição'}</li>`
            } else {
                return
            }
        })
        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class= "events">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens}</ul>
                                           </div>`
        }
    },

    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }