<template>
  <div class="salon-info">
    <div class="all-info">
        <div class="headin-info">
            <h1 data-aos="fade-down"  data-aos-duration="800"><span class="text-white">Formez</span>-vous, <br> prenez votre <span class="text-white">avenir en main</span> </h1>
        </div>

        <div class="badges-info">
            <p data-aos="fade-down"  data-aos-duration="800"> "L'avenir ne se prévoit pas, il se prépare." <br> <small>Maurice Bondel </small></p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">

.salon-info{
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.85);
  
}

.all-info{
  position: relative;
  margin: 65px auto;
}

.all-info h1{
  margin: 40px auto;
  letter-spacing: .2rem;
  line-height: 1.3em;
  font-size: 5vw;
  font-weight: 1000;
  color: #FF4555;
}

.badges-info {
  display: flex;
  justify-content: space-around;
  margin: 30px auto;
}

.badges-info a{
  margin: 0 auto;
  text-decoration: none;
  padding: 10px 10px;
  background: linear-gradient(rgba(255, 255, 255, 0.096) 0%, rgba(255, 255, 255, 0.05) 100%);
  box-shadow: rgb(0 0 0 / 25%) 0px 10px 30px, rgb(255 255 255 / 25%) 1px 1px 0px inset, rgb(0 0 0 / 25%) 0px -1px 0px inset;
  backdrop-filter: blur(5px);
  border-radius: 5rem;
  color: #EEE5E9;
  font-size: 20px;
  font-weight: 400;
  
}

@media only screen and (max-width: 1000px){
.all-info h1{
  margin: 8% auto;
  letter-spacing: .2rem;
  line-height: 1.3em;
  font-size: 6vw;
}
}
@media only screen and (max-width: 600px){
.all-info h1{
  margin: 6% auto;
  letter-spacing: .2rem;
  line-height: 1.3em;
  font-size: 6vw;
}

.badges-info a{

  font-size: 15px;
  font-weight: 400;
  
}

}

</style>
