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
    state: () => ({
        posts: [],
        filter: "posts",
        loading: true,
        ordered: false,
        descOrder: true,
        row: ""
    }),
    actions: {
        getPosts() {
            this.loading = true
            api.get(`/${this.filter}`)
                .then(({ data }) => {
                    this.posts = data
                    this.loading = false
                })
        },
        orderRow(row) {
            console.log(row);

            this.row = row
            const data = this.posts[0][row]
            if (typeof data == "string") {
                this.posts.sort((a, b) => {
                    return this.descOrder ? a[row].localeCompare(b[row]) : b[row].localeCompare(a[row])
                })

            } else {
                this.posts.sort((a, b) => {
                    return this.descOrder ? a[row] - b[row] : b[row] - a[row]
                })
            }


            this.descOrder = !this.descOrder
            console.log(this.posts);

            const paginator = usePaginatorStore()
            paginator.paginateItems(this.posts, 10)

        }
    }
})

export const usePaginatorStore = defineStore("paginator", {
    state: () => ({
        currentPage: 1,
        paginatedItems: [],
        totalPages: 0
    }),
    actions: {
        changePage(n) {
            if (n >= 1 && n <= this.totalPages) {
                this.currentPage = n
            }
        },
        resetPage() {
            this.changePage(1)
        },
        paginateItems(items, perPage) {
            this.totalPages = Math.ceil(items.length / perPage)
            const start = (this.currentPage - 1) * perPage
            this.paginatedItems = items.slice(start, start + perPage)

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