<template>
    <header>
        <nav class="navbar">
            <div class="container">
                <div class="logo">
                    <h3>
                        BlogNews
                        <strong>Java Script</strong>
                    </h3>
                </div>
                <ul class="navbar-list">
                    <li class="navbar-item" v-for="link in navbar" :key="link.title">
                        <router-link :to="link.url" class="navbar-link">
                            {{ link.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>

export default {
    data() {
        return {
            navbar: [
                { url: 'name:/home', title: 'Home' },
                { url: 'name:/about', title: 'About Us' },
                { url: 'name:/register', title: 'Sign up' }
            ]
        }
    }
}
</script>

<style lang="scss">
.navbar {
    padding: .6%;
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .navbar-list {
            display: flex;
            .navbar-item {
                padding-left: 25px;
                .navbar-link {
                    color: #0075ee;
                    font-weight: 700;
                    &:hover {
                        color: #2c3e50;
                    }
                    &.active {
                        border-bottom: 2px solid #73ff00;
                    }
                }
            }
        }
    }
}
</style>