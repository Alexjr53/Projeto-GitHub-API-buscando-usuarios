const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="foto de perfil do usuario" /> 
                                        <div class="data">
                                            <h1>${user.name ?? 'nÃ£o possui nome cadastrado ð¢'}</h1>
                                            <p>${user.bio ?? 'nÃ£o possui bio cadastrado ð¢'}</p>
                                            <p>ð¥ Seguindo: ${user.following}</p>
                                            <p>ð¥ Seguidores: ${user.followers}</p>
                                        </div>
                                      </div>`
    },

    renderRepositories(user) {
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href="${repo.html_url}" target="_blank"> 
                                                                        ${repo.name}
                                                                        <ul class="repositories-stats">
                                                                            <li class="stats">ð´${repo.forks_count}</li>
                                                                            <li class="stats">â­${repo.stargazers_count}</li>
                                                                            <li class="stats">ð${repo.watchers_count}</li>
                                                                            <li class="stats">ð¨âð»${repo.language ?? 'sem linguagem'}</li>
                                                                        </ul>
                                                                    </a>
                                                                </li>`)
        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>RepositÃ³rios</h2>
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
                eventsItens += `<li><span>${events.repo.name}</span> -${events.payload.description ?? 'Sem descriÃ§Ã£o'}</li>`
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
        this.userProfile.innerHTML = "<h3>UsuÃ¡rio nÃ£o encontrado</h3>"
    }
}

export { screen }