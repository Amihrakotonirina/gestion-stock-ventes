<template>
    <div class="first-accueil">
    <img class="fond-img" src="@/assets/images/fondfond.png" alt="">
    <img class="mobil-img" src="@/assets/images/mobil.png" alt="">
    <div data-aos="fade-up-left" data-aos-delay="600" data-aos-duration="2000">
        <img class="stand-img" src="@/assets/images/expo.png" alt="">
    </div>
        

        <div class="all-fix">
        <div class="top-header">
        <div class="link">
            <p></p>
            
            <ul class="nav__links">
                <li><a href="https://erohy.com">Contact</a></li>
                <li><a href="https://erohy.com/login">Espace Exposant</a></li>
            </ul>
            
        </div>
        </div>
        <div class="info-look">
            
            <h1 class="first-look">  
                <div  class="look-1"> <div data-aos="fade-down-right" data-aos-duration="2000"   class="shadow-1"></div> <div data-aos="fade-down-right" data-aos-duration="1000" class="shadow-info"> Bienvenue </div> </div> 
                <div class="look-1"> <div data-aos="fade-down-right" data-aos-duration="2000" data-aos-delay="300"  class="shadow-2"> </div> <div data-aos="fade-down-right" data-aos-duration="1000" class="shadow-info"> sur </div> </div>
                 <div class="look-1"> <div data-aos="fade-down-right" data-aos-delay="600" data-aos-duration="2000"   class="shadow-3"> </div> <div data-aos="fade-down-right" data-aos-duration="1000" class="shadow-info"> e-rohy </div> </div> </h1>
            <p data-aos="fade-up" data-aos-delay="650" data-aos-duration="1500" class="info-head">salon digital de l'orientation, de l'emploi <br> et de l'entrepreneuriat</p>
            <div class="btn-go-forum"> <div data-aos="zoom-in-up" data-aos-delay="800" data-aos-duration="1000" class="shadow-go-forum"></div>
            <div class='container'>
                <a class="pulsingButton" data-aos="" data-aos-delay="700" data-aos-duration="1000" ><router-link to="/" class="go-forum">Visiter le salon</router-link></a>
            </div>
  </div> 
            <nav class="look"></nav>
        
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MastHead',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.first-accueil{
    background: linear-gradient(#FF9DA0,#ffffff);
    /*background-image: url('@/assets/images/fondfond.png');*/
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    position: relative;
    background-color: #EEE5E9;
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.all-fix{
    position: relative;
    height: 100vh;
}

.modif{

}

.first-accueil .stand-img{
    position: absolute;
    width: 32%;
    top: 19vh;
    right: 11%;
    
}

.first-accueil .fond-img{
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    
    
}  

.first-accueil .mobil-img{
    visibility: hidden;
    position: absolute;
     width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    
}

.top-header{
    position: relative;
    justify-content: space-between;
    display: flex;
    
    
    
}
        
.link{
    position: relative;
    justify-content: space-between;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 8vh 7vw;
}

.link p {
    font-size: 24px;
    font-weight: 550;
    color: #EFC88B;
}

.nav__links{
    position: relative;
    background-color: rgba(250, 250, 250, 0.25);
    display: flex;
    flex-direction: row;
    padding-right: 30px;
    padding-left: 10px;
    padding-top: 7px;
    padding-bottom: 7px;
    border-radius: 3rem;
    
    list-style: none;
    
}
.nav__links{
    position: relative;
    background-color: rgba(90, 90, 90, 0.25);
    
}

.nav__links li {
    display: inline-block;

    margin-left: 30px;
}

.nav__links li, a{
    font-weight: 400;
    font-size: 16px;
    
    color:  #FF4555;
    text-decoration: none;

}

.info-look {
    margin-right: 10px;
    margin: 3vh 10vw;
    position: relative;

    align-content: initial;
    color: #FF4555;
}

.first-look{
    
    width: 59%;
    margin-bottom: 40px;
    margin-top: 20px;
    font-size: 3.8vw;
    font-weight: 800;
}
.look-1{
    position: relative;
    
 }

 .shadow-info{
     position: relative;
 }

 .shadow-1{
     top: 28px;
     left: 20px;
    position: absolute;
    width: 18vw;
    height: 40px;
    border-radius: 50px;

    background-color: #ffffff41;
    background-repeat:no-repeat;

 }

   .shadow-2{
     top: 28px;
     left: 20px;
    position: absolute;
    width: 8vw;
    height: 40px;
    border-radius: 50px;

    background-color: #ffffff41;
    background-repeat:no-repeat;
 }

   .shadow-3{
     top: 28px;
     left: 20px;
    position: absolute;
    width: 13.5vw;
    height: 40px;
    border-radius: 50px;

    background-color: #ffffff41;
    background-repeat:no-repeat;

 }

.info-look p{
     margin-bottom: 20px;
    color: white;
    font-size: 28px;
    font-weight: 200;
}
.btn-go-forum{
    position: relative;
    width: 59%;
}
.go-forum{
    position: relative;
    padding: 14px 10px;
    outline: none;
    background-color: #FF4555;
    color: #EEE5E9;
    border-radius: 3rem;
    border: none;
    font-size: 13.5px;
    font-weight: 200;
}

.shadow-go-forum{
    
    top: 10px;
     left: 16px;
    position: absolute;
    width: 205px;
    height: 40px;
    border-radius: 50px;

    background-color: #ffffff41;
    background-repeat:no-repeat;

}

@media only screen and (max-width: 1024px){
.first-accueil .stand-img{
    position: absolute;
    width: 32%;
    top: 35%;
    right: 11%;
    
}

.first-look{
    
    width: 59%;
    margin-bottom: 40px;
    margin-top: 20px;
    font-size: 3.8vw;
    font-weight: 800;
    line-height: 1.8;
}

.shadow-go-forum{
    
    top: 17px;
     left: 20px;
    position: absolute;
    width: 21vw;
    height: 40px;
    border-radius: 50px;

    background-color: #ffffff41;
    background-repeat:no-repeat;

}

}

@media only screen and (max-width: 600px){
.first-accueil .fond-img{
    visibility: hidden;
}

.first-accueil .mobil-img{
    visibility: initial;
    
    
}

.first-accueil .stand-img{
    position: absolute;
    width: 35vh;
    top: 15vh;
    right: 10%;
    
}



.link p {
    font-size: 16px;
    font-weight: 550;
    color: #262730;
}

.link{
    position: relative;
    justify-content: space-between;
    display: flex;
    align-items: center;
    width: 100vw;
    margin: 5vh 7vw;
}

.nav__links li {
    display: inline-block;

    margin-left: 20px;
}

.nav__links li, a{
    font-weight: 400;
    font-size: 14px;
    
    color:  #FF4555;
    text-decoration: none;

}

.info-look {
    margin-right: 0px;
    margin: 10vh 9vw;
    top: 25%;
    position: relative;

    align-self: center;
    color: #FF4555;
}

.first-look{
    
    width: 59%;
    margin-bottom: 20px;
    margin-top: 20px;
        font-size: 4vw;


}


 .shadow-1{
     top: 10px;
     left: 10px;
    position: absolute;
    width: 45vw;
    height: 30px;
    

    
    

 }

   .shadow-2{
     top: 10px;
     left: 10px;
    position: absolute;
    width: 41vw;
    height: 30px;
    

    
    
 }

   .shadow-3{
     top: 10px;
     left: 10px;
    position: absolute;
    width: 14vw;
    height: 30px;
    

    
    

 }

 .info-look p{
     margin-bottom: 5px;
    color: #262730;
    font-size: 28px;
    font-weight: 300;
}
.btn-go-forum{
    position: relative;
    width: 59%;
}
.go-forum{
    position: relative;
    padding: 14px 10vw;
    outline: none;
    background-color: #FF4555;
    color: #EEE5E9;
    border-radius: 3rem;
    border: none;
    font-size: 14px;
    font-weight: 300;
}

.shadow-go-forum{
    
    top: 17px;
     left: 20px;
    position: absolute;
    width: 212px;
    height: 40px;
    border-radius: 50px;

    background-color: #3f3f3f41;
    

}

}

@media only screen and (max-width: 500px){

.first-look{
    
    width: 80%;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 5.2vw;
    font-weight: 800;
    line-height: 1.8;
}

 .shadow-1{
     top: 10px;
     left: 10px;
    position: absolute;
    width: 60vw;
    height: 30px;
    

    
    

 }

   .shadow-2{
     top: 10px;
     left: 10px;
    position: absolute;
    width: 55vw;
    height: 30px;
    

    
    
 }

   .shadow-3{
     top: 10px;
     left: 10px;
    position: absolute;
    width: 19vw;
    height: 30px;
    

    
    

 }

  .info-look p{
     margin-bottom: 5px;
    color: #EEE5E9;
    font-size: 24px;
    font-weight: 300;
}

.shadow-go-forum{

visibility: hidden;

}

.go-forum{
    position: relative;
    padding: 14px 10vw;
    outline: none;
    background-color: #FF4555;
    color: #EEE5E9;
    border-radius: 3rem;
    border: none;
    font-size: 18px;
    font-weight: 500;
}

}

@media only screen and (max-width: 400px){
.nav__links{
    align-content: center;
    padding:4px 5px ;
    margin-left: 20px;
}
.nav__links li {
    justify-content: space-between;
    margin:0 5px;
    
}

.nav__links li, a{
    font-weight: 400;
    font-size: 10px;
    
    color:  #FF4555;
    text-decoration: none;

}

.go-forum{
    position: relative;
    padding: 14px 5vw;
    outline: none;
    background-color: #FF4555;
    color: #EEE5E9;
    border-radius: 3rem;
    border: none;
    font-size: 14px;
    font-weight: 300;
}




}
</style>
