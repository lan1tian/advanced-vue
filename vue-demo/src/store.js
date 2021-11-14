import Vue from 'vue'
import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

Vue.use(vuex)

export default new vuex.Store({
    state: {
        list: [],
        inputValue: '',
        nextId: 5,
        viewkey: 'all'
    },
    mutations: {
        initList(state, list) {
            state.list = list;
        },
        // 为store中的inputValue赋值
        setInputValue(state, val) {
            state.inputValue = val
        },
        addItem(state) {
            const obj = {
                id: state.nextId++,
                info: state.inputValue.trim(),
                done: false
            }
            state.list.push(obj);
            state.inputValue = '';
        },
        removeItem(state, id) {
            const idx = state.list.findIndex(x => x.id === id);
            if (idx !== -1) {
                state.list.splice(idx, 1);
            }
        },
        changeStatus(state, param) {
            const idx = state.list.findIndex(x => x.id === param.id);
            if (idx !== -1) {
                state.list[idx].done = param.status
            }
        },
        cleanDone(state) {
            state.list = state.list.filter(x => x.done === false);
        },
        changeViewKey(state, key) {
            state.viewkey = key;
        }
    },
    actions: {
        getList(context) {
            axios.get('../../static/list.json').then(({ data }) => {
                console.log(data);
                context.commit('initList', data);
            })
        }
    },
    getters: {
        unDoneLength(state) {
            return state.list.filter(x => x.done === false).length
        },

        viewDataList(state) {
            if (state.viewkey === 'all') {
                return state.list;
            } else if (state.viewkey === 'undone') {
                return state.list.filter(x => !x.done)
            } else {
                return state.list.filter(x => x.done)
            }
        }

    },

})
