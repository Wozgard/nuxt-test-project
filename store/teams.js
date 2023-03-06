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
            const team = await this.$axios.$get("http://localhost/api/team/index");
            commit('updateUsers', team);
        } catch (e) {
            console.error(e);
            throw e;
        }
    },
    async addEmployee({ commit }, body) {
        try {
            const team = await this.$axios.$post("http://localhost/api/team/add", body);
            commit('updateUsers', team);
        } catch (e) {
            console.error(e);
            throw e;
        }
    },
    async delEmployee({ commit }, element) {
        try {
            const team = await this.$axios.$post("http://localhost/api/team/del", element);
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