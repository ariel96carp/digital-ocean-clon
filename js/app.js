Vue.component('panel-card', {
    template: `
        <article class="rounded-md shadow-lg hover:shadow-2xl transition-shadow duration-75 bg-white overflow-hidden font-medium md:text-sm cursor-pointer h-[360px] dark:bg-gray-600">
            <div class="h-[40%]">
                <slot name="image"></slot>
            </div>
            <div class="px-7 pt-8 pb-4 h-[calc(100%-40%)] flex flex-col">
                <header class="mb-4 text-gray-400 tracking-widest">
                    <slot name="type"></slot>
                </header>
                <main class="font-semibold dark:text-gray-300">
                    <slot name="title"></slot>
                </main>
                <footer class="flex justify-between items-center text-gray-400 mt-auto">
                    <span>
                        <slot name="date"></slot>
                    </span>
                    <div v-if="this.$slots.views" class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>
                            <slot name="views"></slot>
                        </span>
                    </div>
                </footer>
            </div>
        </article>
    `
})

Vue.component('submenu-item', {
    template: `
        <li class="hover:bg-sky-100 px-3 py-4 rounded-lg group w-fit">
            <a href="#">
                <h3 class="font-semibold text-xl mb-2 group-hover:text-do-blue-light">
                    <slot name="title"></slot>
                </h3>
                <p class="text-gray-400 text-md">
                    <slot name="body"></slot>
                </p>
            </a>
        </li>
    `
})

Vue.component('submenu-item-v2', {
    template: `
        <li class="hover:bg-sky-200 px-3 py-4 rounded-xl group w-full">
            <a href="#">
                <h3 class="font-semibold text-xl mb-2 group-hover:text-do-blue-light">
                    <slot name="title"></slot>
                </h3>
                <p class="text-gray-400 text-md">
                    <slot name="body"></slot>
                </p>
            </a>
        </li>
    `
})

Vue.component('submenu-item-card', {
    template: `
        <li>
            <h3 class="font-semibold tracking-wider mb-4">
                <slot name="title"></slot>
            </h3>
            <ul class="text-gray-500 font-medium subitem-card-list">    
                <slot name="list"></slot>
            </ul>
        </li>
    `
})

Vue.component('list-card', {
    template: `
        <li class="group">
            <a href="#">
                <div class="flex items-center gap-4">
                    <div class="rounded-md overflow-hidden h-20 basis-36 shrink-0">
                        <slot name="image"></slot>
                    </div>
                    <p class="group-hover:text-gray-700">
                        <slot name="title"></slot>
                    </p>
                </div>
            </a>
        </li>
    `
})

new Vue ({
    el: '#app',
    data:{
        mode: 'light'
    },
    methods:{
        setDarkMode(){
            this.mode = 'dark'
            const appWrapper = document.getElementById('app')
            if (appWrapper.classList.contains('light')){
                appWrapper.classList.remove('light')
            }
            appWrapper.classList.add('dark')
        },
        setLightMode(){
            this.mode = 'light'
            const appWrapper = document.getElementById('app')
            if (appWrapper.classList.contains('dark')){
                appWrapper.classList.remove('dark')
            }
            appWrapper.classList.add('light')
        }
    }
})
