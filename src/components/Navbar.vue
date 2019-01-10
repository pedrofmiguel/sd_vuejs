<template>
<b-navbar toggleable="md" class="navigation">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand href="#">
    <img src="@/assets/logoMin.png">
  </b-navbar-brand>
  <b-navbar-item>Bem-vindo ao Prk!</b-navbar-item>
  <b-collapse is-nav id="nav_collapse">
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input class="mr-sm-2" type="text" placeholder="Username"></b-form-input>
          <b-form-input class="mr-sm-2" type="password" placeholder="Password"></b-form-input>
          <b-button class="my-2 my-sm-0" type="submit">Entrar</b-button>
        </b-nav-form>
        <!--<b-navbar-nav id="1">
            <b-nav-item href="#">
              <img src="@/assets/userIcon.png">
              {{ username }}
            </b-nav-item>
            <b-nav-item href="#">Sair</b-nav-item>
        </b-navbar-nav> -->
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
//import entrar from "/Entrar";

export default {
  // components: {
  //   entrar
  // }
};
</script>

<style lang="scss" scoped>
.navigation {
  overflow: hidden;
  top: 0;
  width: 100%;
  background-color: black;
  color:rgb(230, 184, 0);
}
.navbar-brand {
  margin-left: 25px;
}
.form-control{
  border: 1.5px solid rgb(38, 38, 38);
  font-family: "Avenir", Helvetica, sans-serif;
  font-size: 16px;
  margin: -5px;
  color: black;
}
.form-control:focus{
  border: 1.5px solid rgb(230, 184, 0);
}
.btn{
  background-color: rgb(38, 38, 38);
  border:1.5px solid rgb(230, 184, 0);
  color: rgb(230, 184, 0);
}
</style>
