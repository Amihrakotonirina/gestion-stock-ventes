<template>
  <div class="features" id="features" >
    <div class="all-features" style="background-color: #fff;">
      <div  class="heading-features ">
        <h2 data-aos="fade-down" data-aos-duration="1500" >Les contenus du salon</h2>
        <p data-aos="fade-down" data-aos-duration="900" data-aos-delay="200">  <strong></strong></p>
        <hr data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
      </div>

      <div class="body-features">
        
            <div class="text-features">
                <div class="feature-item">
                  <h3 data-aos="fade-right" data-aos-duration="1200" >Stands d'exposition</h3>
                  <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200" class="text-muted"></p>
                </div>

                <div class="feature-item">
                  <h3 data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300" >Fiches métiers</h3>
                  <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400" class="text-muted"></p>
                </div>
              
                <div class="feature-item">
                  <h3 data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300" >Offres d'emploi</h3>
                  <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400" class="text-muted"></p>
                </div>
              
                <div class="feature-item">
                  <h3 data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300" >Réseau social</h3>
                  <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400" class="text-muted"></p>
                </div>
            </div>



        
            <div class="image-features">
                  <img src='@/assets/images/Iphone2.png' class="img-fluid" alt="">
            </div>


            <div class="text-features">
                <div class="feature-item">
                  <h3 data-aos="fade-left" data-aos-duration="1200" > Formations </h3>
                  <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="200" class="text-muted"></p>
                </div>


                <div class="feature-item">
                  <h3 data-aos="fade-left" data-aos-duration="1200" data-aos-delay="300">Conférences</h3>
                  <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="400"  class="text-muted"></p>
                </div>

                <div class="feature-item">
                  <h3 data-aos="fade-left" data-aos-duration="1200" data-aos-delay="300">Test d'orientation</h3>
                  <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="400" class="text-muted"></p>
                </div>

                <div class="feature-item">
                  <h3 data-aos="fade-left" data-aos-duration="1200" data-aos-delay="300">Annuaire</h3>
                  <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="400" class="text-muted"></p>
                </div>

                
            </div>
        </div>

      </div>

    <div class="cta-container">
      <div class="cta-content ">
            <h2 >Elargissez votre réseau<span > 
            </span><br> Saisissez les opportunités </h2>
            <br>     
        </div>
    </div>
  </div>

  


</template>

<script>
export default {
  name: 'Features',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
.features{
  position: relative;
  width: 100vvw;
}

.all-features{
    overflow: hidden;
    position: relative;
    display: flex;
    align-content: center;
    flex-direction: column;
    text-align: center;
}

.heading-features{
    position: relative;
    margin: 20px 30px;
    align-items: center;
}

.heading-features h2{
    margin: 20px auto;
    font-weight: 400;
    font-size: 40px;
}

.heading-features p{
    margin: 20px auto;
    font-weight: 300;
    font-size: 20px;
}

.heading-features p strong{
    font-weight: 500;
    font-size: 20px;
}

.heading-features hr{
    width: 25vw;
    height: 2px;
    border-radius: 10rem;
    margin: 20px auto;
    background-color: #FF4555;
}

.body-features{

    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 40px 0;

}
.body-features .image-features{
    display: flex;
    justify-content: center;
}

.body-features .image-features img{
    /*background-image: url("@/assets/images/back_phone.png");*/
    background-size: cover;
    margin: auto;
    align-self: center;
    vertical-align: middle;
    flex: 1;
    max-height: 45vw ;
}

.body-features .text-features{
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;

    
}

.feature-item{
    margin: 50px 0;
    padding: 0 20%;
    max-height: 88px;
}

.feature-item h3{
    margin-bottom: 15px;
    font-size: 27px;
}
.feature-item p{
    margin-bottom: 15px;
    font-size: 18px;
}

.cta-container{
    height: 416px;
    position: relative;
    display: flex;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.58);
}

.cta-content{
    display: block;
    flex-direction: column;
    justify-content: center;

    margin: auto 150px;
    padding: auto ;
}

.cta-content h2{
    /*color: #262730;*/
    font-size: 60px;
    font-weight: 500;
    
    justify-content: center;
}

.cta-content h2 span{

    justify-content: center;
    color: #FF4555;
}

.cta-content a{
    display: initial;
    margin: 0 0;
    text-decoration: none;
    padding: 10px 10px;
    background: linear-gradient(rgba(255, 255, 255, 0.438) 0%, rgba(0, 0, 0, 0.13) 100%);
    box-shadow: rgb(0 0 0 / 25%) 0px 10px 30px, rgb(255 255 255 / 25%) 1px 1px 0px inset, rgb(0 0 0 / 25%) 0px -1px 0px inset;
    margin-left: 10px;
    backdrop-filter: blur(30px);
    border-radius: 5rem;
    color: #262730;
    font-size: 20px;
    font-weight: 500;
}

@media only screen and (max-width: 1000px){



.heading-features hr{
    width: 25vw;
    height: 2px;
    border-radius: 10rem;
    margin: 0 auto;
    background-color: #FF4555;
}

.feature-item{
    margin: 21px 0;
    padding: 0 10%;
    max-height: 88px;
}

.feature-item h3{
    margin-bottom: 15px;
    font-size: 23px;
}
.feature-item p{
    margin-bottom: 15px;
    font-size: 15px;
}

.cta-content h2{
    color: #262730;
    font-size: 50px;
    font-weight: 500;
}

.cta-content{
    display: block;
    flex-direction: column;
    justify-content: center;

    margin: auto 120px;
    padding: auto ;
}

}

@media only screen and (max-width: 600px){
.heading-features h2{
    margin: 20px auto;
    font-weight: 500;
    font-size: 5.2vw;
}

.heading-features p{
    margin: 20px auto;
    font-weight: 300;
    font-size: 3.5vw;
}

.heading-features p strong{
    font-weight: 500;
    font-size: 3.6vw;
}

.heading-features hr{
    width: 40vw;
    height: 2px;
    border-radius: 10rem;
    margin: 20px auto;
    background-color: #FF4555;
}

.body-features{

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px 0;

}
.body-features .image-features img{
    margin: 40px auto;
    align-self: center;
    vertical-align: middle;
    flex: initial;
    max-height: 50vw ;
}

.body-features .text-features{
    height: 100%;
    flex: 3;
    display: flex;
    flex-direction: column;

    
}


.feature-item{

    margin: auto 0;
    padding: 0 20%;
    max-height: 88px;
}

.feature-item h3{
    margin-bottom: 5px;
    font-size: 19px;
}
.feature-item p{
    margin-bottom: 20px;
    font-size: 14px;
}

.cta-container{
    height: 325px;
    position: relative;
    display: flex;
    
    background-color: rgba(255, 255, 255, 0.158);
}

.cta-content{
    display: block;
    flex-direction: column;
    justify-content: center;

    margin: auto 150px;
    padding: auto ;
}

.cta-content h2{
    color: #262730;
    font-size: 8vw;
    font-weight: 500;
}

.cta-content{
    display: block;
    flex-direction: column;
    justify-content: center;

    margin: auto 40px;
    padding: auto ;
}

}

</style>
