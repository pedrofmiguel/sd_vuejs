<template>
  <div class="index">
    <b-row>
        <b-col>
          <b-card title="Disponiveis"class="mb-2">
            <h1>50</h1>
          </b-card>
        </b-col>
        <b-col>
          <b-card title="Ocupados"class="mb-2">
            <h1>0</h1>
          </b-card>
        </b-col>
        <b-col>
          <b-card title="Reservados"class="mb-2">
            <h1>0</h1>
          </b-card>
        </b-col>
    </b-row>
    <b-row>
      <b-col>
        <somos></somos>
      </b-col>
      <b-col>
        <registo></registo>
      </b-col>
    </b-row>
    <footer></footer>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import somos from "./Somos";
import registo from "./Registo";
import footer from "./Footer";

export default {
  components: {
    somos,
    registo,
    footer
  }
};
</script>

<style lang="scss" scoped>
// @font-face {
//   font-family: myFont;
//   src: url('@/assets/CursedTimerULiL.ttf');
// }
.index {
  background-color: rgb(38, 38, 38);
}
.card{
  margin:25px;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: black;
  color: white;
  border: 1.5px solid rgb(230, 184, 0);
  text-align: center;
}
</style>

