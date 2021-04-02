<template>
  <div>
    <div class="sidenav">
            <h2 class="ml-2 text-white text-center">Event Finder</h2>
      <a href="#home">Home</a>
    </div>
    <div class="main">
      <div class="card card-outer mx-auto">
        <div class="card-header"><p class="card-title float-left">Event</p>
          <button class="btn-outline-primary btn-rounded float-right"> Add Event</button>
        </div>
        <div class="card-body ">
          <div class="row">
            <div class="col-3">
              <img
                class="float-left img"
                alt="Vue logo"
                src="../../assets/img.jpeg"
              />
            </div>
            <div class="col-3 ">
              <p class="text-left card-title">Art in The Open.</p>
              <p class="text-left card-subtitle">
                12th March 2021
              </p>
            </div>
            <div class="col-3">
             <p class="text-left title">
                10pm-12am
              </p>
              <p class="text-left card-subtitle">
                K24 Place
              </p>
            </div>
            <div class="col-3  ">
              <div class="btn-group mt-2" role="group">
                  <button type="button" class="btn btn-warning btn-sm">Edit</button>
                  <button type="button" class="btn btn-danger btn-sm">Delete</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.sidenav {
  height: 100%;
  width: 400px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 400px; /* Same as the width of the sidenav */
  padding: 0px 10px;
}
.card-outer {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: 0.3s;
  width: 900px;
  height: 160px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.img {
  width: 100%;
  height: 60px;
}
.btn-rounded{
  border-radius: 40px;
}
</style>
