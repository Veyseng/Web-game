<template>
<div>
    <header>
        <nav>
            <ul>
                <!-- logo -->
                <li><img src="../assets/Anachak_logo.svg" alt=""></li>
                <li><a href="" style="color:#D72323">HOME</a></li>
                <li><a href="">ABOUT US</a></li>
                <li><a href="">STORE</a></li>
                <li><a href="">NEWS</a></li>
                <li><a href="">FAQ</a></li>
                <div class="line">

                </div>
                <div class="highlight_line">

                </div>
            </ul>
            <div class="Log-in">
                <i class="far fa-user"></i>
                <a href="">LOG IN</a>
            </div>
        </nav>
    </header>
    <main>
        <section>
            <span>TRENDING NOW</span>
            <div class="mainboard" >
                <div class="main-billboard" :style="{'background-image': `url(${require('../assets/Valorant_full.jpg')})`}" >
                    <div class="sub-title">
                        <h3>TITLE</h3>
                        <div>
                            <p>decription decription decription </p>
                            <p>decription decription decription </p>
                        </div>
                        <div>
                            <button class="btn btn-light button">EXPLORE MORE <i class="fas fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>
                <div >
                    <div class="sub-billboards select">
                        <div class="sub-img" :style="{'background-image': `url(${require('../assets/Valorant.jpg')})`}">
                            
                        </div>
                        <div>
                            <p>For Honor</p>
                        </div>
                    </div>
                    <div class="sub-billboards">
                        <div class="sub-img" :style="{'background-image': `url(${require('../assets/Call_of_Duty.jpg')})`}">

                        </div>
                        <div >
                            <p>Call of Duty</p>
                        </div>
                    </div>
                    <div class="sub-billboards" >
                        <div class="sub-img" :style="{'background-image': `url(${require('../assets/God_of_War.jpg')})`}">

                        </div>
                        <div >
                            <p>God of War</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        <section>
            <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-light category" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">POPULAR GAME <i class="fas fa-angle-down"></i></button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <a class="dropdown-item" href="#">POPULAR GAME</a>
                    <a class="dropdown-item" href="#">TOP FREE GAME</a>
                    <a class="dropdown-item" href="#">TOP PAID GAME</a>
                    <a class="dropdown-item" href="#">NEWEST GAME</a>
                    </div>
                </div>
            </div>
            <div class="game">
                <div>
                    <!-- img -->
                    <div class="sub-game">

                    </div>
                    <ul class="game-detail">
                        <li>GAME TITLE</li>
                        <li><p>Game description Game description</p></li>
                        <li><div class="red-line"></div></li>
                        <li>20,000 RIELS</li>
                        <li class="discount">40,000 RIELS</li>
                        <li><button class="btn btn-danger">BUY NOW</button></li>
                    </ul>
                    <ul class="rating">
                        <li><i class="far fa-star"></i></li>
                        <li><i class="far fa-star"></i></li>
                        <li><i class="far fa-star"></i></li>
                        <li><i class="far fa-star"></i></li>
                        <li><i class="far fa-star"></i></li>
                    </ul>
                </div>
                <div>
                    <div class="sub-game" :style="{'background-image': `url(${require('../assets/Vainglory.jpg')})`}">

                    </div>
                    <ul class="game-detail">
                        <li>GAME TITLE</li>
                        <li><p>Game description Game description</p></li>
                        <li><div class="red-line"></div></li>
                        <li>20,000 RIELS</li>
                        <!-- <li>40,000 RIELS</li> -->
                        <li><button class="btn btn-danger">BUY NOW</button></li>
                    </ul>
                    <ul class="rating">
                        <li><i class="far fa-star"></i></li>
                        <li><i class="far fa-star"></i></li>
                        <li><i class="far fa-star"></i></li>
                        <li><i class="far fa-star"></i></li>
                        <li><i class="far fa-star"></i></li>
                    </ul>
                </div>
                <div >
                    <div class="sub-game" :style="{'background-image': `url(${require('../assets/Battlefleld1.jpg')})`}">

                    </div>
                    <ul class="game-detail">
                        <li>GAME TITLE</li>
                        <li><p>Game description Game description</p></li>
                        <li><div class="red-line"></div></li>
                        <li>20,000 RIELS</li>
                        <li class="discount">40,000 RIELS</li>
                        <li><button class="btn btn-danger ">BUY NOW</button></li>
                    </ul>
                    <ul class="rating">
                        <li><i class="far fa-star"></i></li>
                        <li><i class="far fa-star"></i></li>
                        <li><i class="far fa-star"></i></li>
                        <li><i class="far fa-star"></i></li>
                        <li><i class="far fa-star"></i></li>
                    </ul>
                </div>
                <div >
                    <div class="sub-game" :style="{'background-image': `url(${require('../assets/Red_Dead.jpg')})`}" >

                    </div>
                    <ul class="game-detail">
                        <li>GAME TITLE</li>
                        <li><p>Game description Game description</p></li>
                        <li><div class="red-line"></div></li>
                        <li>20,000 RIELS</li>
                        <li class="discount">40,000 RIELS</li>
                        <li><button class="btn btn-danger">BUY NOW</button></li>
                    </ul>
                    <ul class="rating">
                        <li><i class="far fa-star "></i></li>
                        <li><i class="far fa-star "></i></li>
                        <li><i class="far fa-star "></i></li>
                        <li><i class="far fa-star "></i></li>
                        <li><i class="far fa-star "></i></li>
                    </ul>
                </div>
            </div>
        </section>
        <div class="cross-line">

        </div>
        <section>
            <div class="News">
                <div>
                    <span>NEWS</span>
                </div>
                <div>
                    <a href="" class="color-seeall">SEE ALL</a>
                </div>
            </div>
            <div class="game">
                <div>
                    <div class="News-img">

                    </div>
                    <div >
                            <ul class="game-detail">
                                <ul class="News-detail">
                                    <li><h6>NEWS</h6></li>
                                    <li><p>DATE: 31-02-2021</p></li>
                                </ul>
                                <li>GET TO KNOW OUR STREAMERS</li>
                            </ul>
                    </div>
                </div>
                <div>
                        <div class="News-img">

                        </div>
                        <div>
                            <ul class="game-detail">
                                <ul class="News-detail">
                                    <li><h6>NEWS</h6></li>
                                    <li><p>DATE: 31-02-2021</p></li>
                                </ul>
                                <li>GET TO KNOW OUR STREAMERS</li>
                            </ul>
                        </div>
                </div>
                
            </div>
        </section>
    </main>
    <footer>
        <div class="policy">
            <ul class="game-detail">
                <ul class="list-policy">
                    <li>PRIVACY POLICY</li>
                    <li>REFUND</li>
                    <li>TERM & CONDITION</li>
                    <li>HELP</li>
                </ul>
                <li><div class="white-line"></div> </li>
                <li>@2021 ANACHAK GAME ALL RIGHT RESERVED</li>
            </ul>
        </div>
        <div class="channels">
            <img src="../assets/FacebookLogo.svg" alt="">
            <img src="../assets/DiscordLogo.svg" alt="">
            <img src="../assets/InstagramLogo.svg" alt="">
        </div>
    </footer>
</div>
</template>

<script>

export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
header{
    /* position: sticky;
    top: 0; */
    background:linear-gradient(0deg, #3A4750, #3A4750);
    font-family: 'Ubuntu',sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #FFFFFF;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
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
.highlight_line{
    position: absolute;
    height: 0.3rem;
    width: 7rem;
    top: 4rem;
    left: 8rem;
    background-color:#D72323;
}
main{
    color: white;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    background-color:  #303841;
}
main section{
    display: block;
    align-items: center;
    padding: 2rem 10rem 2rem 10rem;
}
.mainboard{
    display: flex;
    padding: 2rem 0 2rem 0;
}
.main-billboard{
    width: 45rem;
    height: 24rem;
    font-weight: normal;
    background: #C6C0C0;
    color: #000000;
    
    background-size:100%;
    background-repeat: no-repeat;
}
.sub-billboards{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: 13rem;
    height: 8rem; 
    font-weight: normal;
    border: 1px solid #EEEEEE;
    box-sizing: border-box;
}
.sub-billboards p{
    font-size:0.9rem;
}
.sub-img{
    width: 4rem;
    height: 5rem;
    background-size:100%;
    background-repeat: no-repeat;
}
.sub-title{
    padding-left: 3rem;
    padding-top: 15rem;
    color: white;
}
.button{
    border: 2px solid #303841;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 11rem;
}
.select{
    background-color: #D72323;
    opacity: 50%;
}
.category{
    border: 2px solid white;
    color: white;
    background-color:  #303841;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 11rem;
    border-radius: 0;
}
.game{
    display: flex;
    justify-content: space-between;
    padding: 2rem 0 2rem 0;
}
.sub-game{
    width: 11rem;
    height: 13rem; 
    background-size:100%;
    background-repeat: no-repeat;
}
.game-detail{
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
}
.game-detail p{
    font-size: 9px;
    line-height: 22px;
    color: #C4C4C4;
}
.rating{
    display: flex;
    justify-content: space-between;
    list-style: none;
}
.red-line{
    width: 11rem;
    height: 0.2rem;
    background: #D72323;
    margin-bottom: 0.3rem;
}
.discount{
    text-decoration-line: line-through;
    color: #C4C4C4;
}
li button{
    margin-top: 0.3rem;
    border-radius: 30rem;
}
.cross-line{
    width: 100%;
    height: 0.5rem;
    background-color: #D72323;
}
.News{
    display: flex;
    justify-content: space-between;
}
.News a{
    color: #D72323;
    text-decoration: none;
}
.News-img{
    width: 28rem;
    height: 15rem;
    background: #C4C4C4;  
}
.News-detail{
    list-style: none;
    display: flex;
    align-items: center;
    padding-bottom: 0.2rem;
}
.News-detail h6{
    background-color: #D72323;
    padding: 0.2rem;
}
.News-detail p{
    padding-left: 1.2rem;
    font-size: 12px;
    color: #FFFFFF;
}
footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    width: 100%;
    height: 10rem; 
    background-color: #3A4750;
    margin: 0;
    color: #EEEEEE;
    padding: 2rem;
}
.channels{
    width: 20%;
    display: flex;
    justify-content: space-between;
}
.white-line{
    margin: 1rem 0 1rem 0;
    width: 100%;
    height: 0.2rem;
    background-color: #EEEEEE;
}
.policy{
    width: 50%;
    padding: 2rem;
}
.list-policy{
    display: flex;
    justify-content: space-between;
    list-style: none;
    align-items: center;
}
.channels img{
    border: 0;
    background: 0;
}
</style>