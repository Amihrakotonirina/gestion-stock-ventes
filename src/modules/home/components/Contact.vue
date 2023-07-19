<template>
  <div class="contact">
    <div class="head-contact">
        <p data-aos="fade-down" data-aos-duration="1500" data-aos-anchor-placement="top-bottom"> Nous contacter </p>
        <h2 data-aos="fade-down" data-aos-duration="900" data-aos-delay="200"> Pour plus d'information<br>Veuillez contacter </h2>
        <hr data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
    </div>

    <div class="body-contact">
        <div class="contact-content">
            <div class="contact-info">
                <img data-aos="fade-up" data-aos-duration="1100" src="@/assets/images/user.png" alt="">
                <h5 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">Amikal Project</h5>
                <p data-aos="fade-up" data-aos-duration="1600" data-aos-delay="200">amikalproject@gmail.com</p>
            </div>

            <div class="contact-info">
                <img data-aos="fade-up" data-aos-duration="1100" src="@/assets/images/email.png" alt="">
                <h5 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">E-rohy</h5>
                <p data-aos="fade-up" data-aos-duration="1600" data-aos-delay="200">contact.erohy@gmail.com</p>
            </div>

            <div class="contact-info">
                <img data-aos="fade-up" data-aos-duration="1100" src="@/assets/images/phone_1.png" alt="">
                <h5 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100"></h5>
                <p data-aos="fade-up" data-aos-duration="1600" data-aos-delay="200">+261 34 33 777 14</p>
                <p data-aos="fade-up" data-aos-duration="1600" data-aos-delay="200">+261 34 33 777 63</p>
            </div>

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--style scoped lang="scss"-->
<style scoped lang="scss">

.contact{
    overflow: hidden;
    background-color: #ffff;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;

}

.head-contact{
    margin: 30px auto;
    align-items: center;
}

.head-contact h2{
    margin: 30px auto;
    font-weight: 500;
    font-size: 30px;
    color: #262730;
}

.head-contact p{
    margin: 20px auto;
    margin-bottom: -15px;
    font-weight: 300;
    font-size: 25px;
    color: #5E6472;
}

.head-contact hr{
    width: 25vw;
    height: 2px;
    border-radius: 10rem;
    margin: 0 auto;
    background-color: #FF4555;
}

.body-contact{
margin: 30px 0;
}

.contact-content{
    display: flex;
    flex-direction: row;
    margin: 0 15vw;
    align-items: center;

    margin-bottom: 20px;
}

.contact-info{
    
    align-content: center;  
    flex: 1; 

}

.contact-info h5{
    margin-top: 20px;
    font-weight: 500;
    font-size: 24px;
    color: #262730;
}

.contact-info p{

    font-size: 17px;
    color: #5E6472;
}

@media only screen and (max-width: 1000px){
.contact-info h5{
    margin-top: 20px;
    font-weight: 500;
    font-size: 20px;
    color: #262730;
}

.contact-info p{
    margin: 0 20px;
    font-size: 15px;
    color: #5E6472;
}
}

@media only screen and (max-width: 600px){




.head-contact h2{
    margin: 30px auto;
    font-weight: 500;
    font-size: 7vw;
    color: #262730;
}

.head-contact p{
    margin: 20px auto;
    margin-bottom: -15px;
    font-weight: 300;
    font-size: 6.5vw;
    color: #5E6472;
}

.head-contact hr{
    width: 40vw;
    height: 2px;
    border-radius: 10rem;
    margin: 0 auto;
    background-color: #FF4555;
}

.body-contact{
margin: 30px 0;
}

.contact-content{
    display: flex;
    flex-direction: column;
    margin: 0 15vw;
    justify-content: space-around;
    margin-bottom: 20px;
}

.contact-info{
    margin: 20px 0;
    align-content: center;  
     justify-content: space-around;
}


.contact-info h5{
    margin-top: 20px;
    font-weight: 500;
    font-size: 24px;
    color: #262730;
}

.contact-info p{

    font-size: 17px;
    color: #5E6472;
}
}

</style>
