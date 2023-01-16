<template>
    <header class="header-container">
        <div class="logo-wrapper">
            <h1 class="title">VUE CISTEM TABLE</h1>
            <sup class="version">v{{ VERSION_APP }}</sup>
        </div>
        <div class="menu-wrapper">
            <RouterLink :to="{ name: 'products' }" class="menu-link">Products</RouterLink>
            <RouterLink :to="{ name: 'users' }" class="menu-link">Users</RouterLink>
        </div>
    </header>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'HeaderComponent',
    setup () {
        
        const VERSION_APP = ref( import.meta.env.VITE_VERSION_APP );

        return {
            VERSION_APP
        }
    }
}
</script>

<style scoped>
    .header-container {
        background-color: #293277;
        width: 100%;
        height: 60px;
        padding: 10px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo-wrapper, .menu-wrapper {
        display: flex;
        gap: 10px;
    }

    .menu-link {
        color: #fbfbfb;
    }
    .menu-link:hover {
        color: #8b99ff;
        transition: color .5s ease-in;
    }

    .title {
        font-size: 16px;
        font-weight: bold;  
        letter-spacing: 4px;
        color: #fbfbfb;
    }

    .version {
        color: #fbfbfb;
    }

    .router-link-active {
        color: #8b99ff;
    }

</style>