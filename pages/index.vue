

<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
      </div>
      <v-card>
        <v-card-title class="headline">Heights Fitness & Strength Training Studio</v-card-title>
        <v-card-text>
          <p>Join a fitness community that is passionate, determined, and supportive. Whether you’re here for a day or committed to years, we’ve got exactly what you need. Join a fitness community that is passionate, determined, and supportive. Whether you’re here for a day or committed to years, we’ve got exactly what you need. Are you starting to feel like sticking to your workout routine isn’t worth it anymore? Maybe you’re disappointed because it seems like you aren’t getting the results you want as fast as you’d like. Or perhaps you’re tired of fighting with your body day in and day out.</p>

          <p>
            I’m here to tell you that everyone feels this way from time to time. It’s natural to have doubts and fears – and to even think about quitting.
            However, the way you deal with this feeling makes all the difference, and it’s what separates those who achieve their goals from those who never quite make it. Are you going to recognize the feeling for what it is – a temporary blip – and push through it, or are you going to give in and give up? Before you give up, consider the fact that you may just need a little motivation and inspiration. Getting a little reinforcement for all the reasons you work out and live a healthy lifestyle in the first place may be all you need to keep pushing.
          </p><br>
          <img src="/gym.jpg" alt="Vuetify.js" class="mb-5">

          <hr class="my-3">
          
          <div class='float-left'><p><b>About us</b></p><p>We are the best fitness trainer in this city. <br>Come and enjoy experience of our trainers.</p></div>

          <div class='float-right'><p><b>Contact us</b></p><p>Drop email at: abc@test.com</p></div>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="primary" flat nuxt to="/blog">Read Blog</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style>
.float-left {
  float: left
}
.float-right {
  margin-left: 300px
}
</style>
