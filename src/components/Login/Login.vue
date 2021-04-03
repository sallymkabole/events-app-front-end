<template>
  <div class="login jumbotron">
    <div class="text-center ">
      <h2 class="">Log In to  Continue</h2>
    </div>
    <form @submit.prevent="loginSubmit">
      <input class="mb-10" type="email" placeholder="E-Mail" v-model="email" />
      <input  class="mb-8" type="password" placeholder="Password" v-model="password" />
      <button  class="mb-8" type="submit">Login</button>
    </form>
  </div>
</template>
<style scoped>
.login {
  border: 1px solid black;
  border-radius: 5px;
  padding: 1.5rem;
  width: 500px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
}
.login form {
  display: flex;
  flex-flow: column;
  margin-top: 20%;
}

.login form *:not(:last-child) {
  margin-bottom: 1rem;
}

.login form input {
  padding-top: 0.5rem;
}

.login form button {
  padding: 0.5rem;
  background-color: lightgray;
  border: 1px solid gray;
  border-radius: 3px;
  cursor: pointer;
}

.login form button:hover {
  background-color: lightslategray;
}
</style>
