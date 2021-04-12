<template>
    <header>
        <nav>
            <ul>
                <!-- logo -->
                <li><img src="../assets/images/Anachak_logo.svg" alt=""></li>
                <li><a href="./Homepage.vue" :class="selectedHeader">HOME</a></li>
                <li><a href="">ABOUT US</a></li>
                <li><a href="">STORE</a></li>
                <li><a href="">NEWS</a></li>
                <li><a href="">FAQ</a></li>
                <div class="line">

                </div>
                <div :class="Hightlight" class="position">

                </div>
            </ul>
            <div class="Log-in">
                <i class="far fa-user"></i>
                <a href="">{{msg}}</a>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name:"Header",
    data(){
        return{
            
        }
    },
    props:{
        msg:String,
        selectedHeader:String,
        Hightlight:String,
    },
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
header{
    position: sticky;
    top: 0;
    background:linear-gradient(0deg, #3A4750, #3A4750);
    font-family: 'Ubuntu',sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #FFFFFF;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
    z-index: 1;
}
nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    min-height: 6rem;
    margin: auto;
}
nav ul{
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
}
ul a{
    color: #FFFFFF;
    text-decoration: none;
}
ul hr{
    color: white;
}
.Log-in a{
    color: #FFFFFF;
    text-decoration: none;
}
nav div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 6.5%;
}
.line{
    position: absolute;
    top: 4rem;
    left: 8rem;
    height: 0.3rem;
    width: 34rem;
    background-color: white;
}
img{
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    box-sizing: border-box; 
}
.position{
    position: absolute;
}
.highlight_line{
    height: 0.3rem;
    width: 7rem;
    top: 4rem;
    left: 8rem;
    background-color:#D72323;
}
.selected-header{
    color: #D72323;
}
</style>