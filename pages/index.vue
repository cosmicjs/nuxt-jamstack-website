

<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
      </div>
      <v-card>
        <v-card-title class="headline"><h2>{{title}}</h2></v-card-title>
        <v-card-text>
          <div v-html="body"></div>
          <br>
          <img
          :src="`${image}`"
          alt="Fitness"
          class="mb-5"
      >

          <hr class="my-3">
          
          <div class='float-left'><p><b>About us</b></p><div v-html="about"></div></div>

          <div class='float-right'><p><b>Contact us</b></p><div v-html="contact"></div></div>
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
<script>
import axios from "axios";
import config from '../config/config';
export default {
  asyncData (context) {
    return axios.get(config.url + config.bucket_slug + '/object-type/homes',{
            params: {
                read_key: config.read_key
            }
        })
      .then(res => {
        console.log(res)
        console.log(res.data.objects[0].metadata.image)
        // console.log(res.data.objects[0].metadata.image.url);
        return {title : res.data.objects[0].title, body: res.data.objects[0].content, image: res.data.objects[0].metadata.image, about: res.data.objects[0].metadata.about_us, contact: res.data.objects[0].metadata.contact_us}
      });
  }
};
        
</script>