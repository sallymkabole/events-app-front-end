<template>
  <div class="container">
    <div class="row">
      <div class="hero-image">
        <div class="row hero-text-0">
          <button type="button" class="btn btn-outline-light mr-4">
            Log Out
          </button>
          <button type="button" class="btn btn-info">Dash</button>
        </div>
        <div class="row hero-text"></div>
        <img
          class="hero-image"
          alt="Vue logo"
          src="/../../assets/banner.jpg"
        />
        <div class="search-row"><h1>The right Events Aggregator for you</h1>
        <h3 class="mt-4">from genres like comedy, art, food to festivals; you</h3>
        <h3>can find your pick and have the best time of your life. </h3></div>
      </div>
    </div>
      <div class="row search-div">
      <h2 class= "">Upcoming Events</h2>
       <form class="form-inline ">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
      <div class="row xyz">
        <div class="col-4">
          <div class="card crd" style="width: 20rem">
            <img
              class="card-img-top img-card"
              src="../../assets/xpo.jpeg"
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="text-left card-title font-weight-bold">
                Safaricom Jazz Festival.
              </p>
              <p class="text-left font-weight-light">
                Five-time Grammy winner Diane Reeves set to grace the stage
              </p>
              <span class="row">
                <p class="text-left font-weight-italic col-6">
                  <small>29th Jan 2022</small>
                </p>
                <p class="text-right font-weight-light col-6">
                  <small> Msa Sports Club</small>
                </p></span
              >
              <a href="#" class="btn book-btn btn-block">Book</a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card crd" style="width: 20rem">
            <img
              class="card-img-top img-card"
              src="../../assets/xpo.jpeg"
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="text-left card-title font-weight-bold">
                Safaricom Jazz Festival.
              </p>
              <p class="text-left font-weight-light">
                Five-time Grammy winner Diane Reeves set to grace the stage
              </p>
              <span class="row">
                <p class="text-left font-weight-italic col-6">
                  <small>29th Jan 2022</small>
                </p>
                <p class="text-right font-weight-light col-6">
                  <small> Msa Sports Club</small>
                </p></span
              >
              <a href="#" class="btn book-btn btn-block">Book</a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card crd" style="width: 20rem">
            <img
              class="card-img-top img-card"
              src="../../assets/xpo.jpeg"
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="text-left card-title font-weight-bold">
                Safaricom Jazz Festival.
              </p>
              <p class="text-left font-weight-light">
                Five-time Grammy winner Diane Reeves set to grace the stage
              </p>
              <span class="row">
                <p class="text-left font-weight-italic col-6">
                  <small>29th Jan 2022</small>
                </p>
                <p class="text-right font-weight-light col-6">
                  <small> Msa Sports Club</small>
                </p></span
              >
              <a href="#" class="btn book-btn btn-block">Book</a>
            </div>
          </div>
        </div>
      </div>
    <div class="row">
    </div>
  </div>
</template>
<style scoped>
body,
html {
  height: 100%;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.hero-image {
  display: block;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}
.hero-text-0 {
  z-index: 1;
  text-align: right;
  position: absolute;
  top: 10%;
  right: 2%;
  transform: translate(-50%, -50%);
  color: white;
}
.hero-text {
  z-index: 1;
  text-align: left;
  position: absolute;
  top: 20%;
  left: 15%;
  transform: translate(-50%, -50%);
  color: white;
  display: block;
}
.xyz {
  margin-top: 100px;
}
.img-card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 15px 15px 0 0;
  transition: 0.3s;
}
.crd {
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.book-btn {
  background: #f2b920;
  border-radius: 8px;
  color: #000;
  text-decoration: none;
  font-size: 18px;
}
.container {
  height: 100vh;
}
.search-row {
  position: absolute;
  margin: 0 auto;
  top: 140px;
  color: #fff;
  height: 70px;
  width: 800px;
  border-radius: 8px;
}
.search-div {
  margin-top: 900px;
  justify-content: space-between;
}
</style>
