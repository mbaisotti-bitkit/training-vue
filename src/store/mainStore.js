import api from "@/services/api";
import { defineStore } from "pinia";
// import { createStore } from "vuex";

// Vue.use(Vuex);


export const useMainStore = defineStore("main", {
    state: () => ({
        numb: 1,
        str: "stringa",
        arr: [1]
    }),
    getters: {
        numbDiv: (state) => Math.floor(state.numb * 2)
    },
    actions: {
        conc() {
            this.str += "Con"
        },
        pushArr() {
            this.arr.push(this.numb)
        }
    }
})

export const useJsonStore = defineStore("json", {
    state: () =>({
        posts: [],
        filter: "posts",
        loading: true
    }),
    actions: {
        getPosts(){
            this.loading = true
            api.get(`/${this.filter}`)
            .then(({data}) =>{
                this.posts = data
                this.loading = false
            })
        }
    }
})


// const bookingStore = createStore({
//     state: {
//         books: [],
//         ids: []
//     },
//     mutations: {
//         fillBooks(result) {
//             result.forEach(book => {
//                 this.ids.push(book.bookingid)
//             });
//         },
//         fillIds(result) {
//             this.ids = result
//         }
//     },
//     actions: {
//         async getIds(context) {

//             api.get("")
//                 .then(({ data }) => {
//                     context.commit("fillIds", data)
//                 })

//         }
//     }
// })

// export default bookingStore