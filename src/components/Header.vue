<script>
import { RouterLink } from 'vue-router';

</script>

<template>
    <header>
        <nav>
            <ul>
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about">About</RouterLink>
                </li>
                <li>
                    <RouterLink to="/count">Function</RouterLink>
                </li>
                <li>
                    <RouterLink to="/api">API</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>