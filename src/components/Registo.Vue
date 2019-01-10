<template>
<div class="form-group">
    <h4>Ainda não tens conta?</h4>
    <h5>Cria uma aqui!</h5>
    <label for="inputLive">Username:</label>
    <b-form-input class="mr-sm-2" type="text" placeholder="Username"></b-form-input>
    <label for="inputLive">Email:</label>
    <b-form-input class="mr-sm-2" type="email" placeholder="Email"></b-form-input>
    <small id="emailHelp" class="form-text text-muted">Nunca iremos partilhar o seu email com quem quer que seja!</small>
    <label for="inputLive">Password:</label>
    <b-form-input class="mr-sm-2" type="password" placeholder="Password"></b-form-input>
    <label for="inputLive">Confirma a Password:</label>
    <b-form-input class="mr-sm-2" type="password" placeholder="Password"></b-form-input>
    <b-button class="my-2 my-sm-0" type="submit">Registar</b-button>
</div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {};
</script>

<style lang="scss" scoped>
.form-group{
  color:white;
  margin-top:50px;
  margin-left:15px;
}
.form-control{
  border: 1.5px solid rgb(38, 38, 38);
  font-family: "Avenir", Helvetica, sans-serif;
  font-size: 16px;
  color: black;
  width: 75%;
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