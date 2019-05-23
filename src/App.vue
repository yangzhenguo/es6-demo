<template>
    <div>
        <ul>
            <router-link to="/" tag="li">首页</router-link>
            <router-link to="/list" tag="li">列表页</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>
<style lang="scss" scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: flex-start;

        li {
            margin: 0;
            padding: 0;
            flex: 1;
            height: 10vw;
            line-height: 10vw;
            text-align: center;
            transition: all 1s;
        }
    }
    .router-link-exact-active {
        background: #ccc;
        transition: all 1s;
    }
</style>