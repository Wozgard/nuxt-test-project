export const state = () => ({
    team: []
})
export const mutations = {
    updateUsers(state, team) {
        state.team = team
    }
}
export const actions = {
    async fetchTeam({ commit }) {
        try {
            const team = await this.$axios.$get("/api/team/index");
            commit('updateUsers', team);
        } catch (e) {
            console.error(e);
            throw e;
        }
    }
}
export const getters = {
    team: s => s.team
}