const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    following: 0,
    followers: 0,
    repositories: [],
    events: [],
    
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.following = gitHubUser.following
        this.followers = gitHubUser.followers
    },

    setRepositories(repositories){
        this.repositories = repositories
    },

    setEvents(events){
        this.events = events 
    }
}
export { user }