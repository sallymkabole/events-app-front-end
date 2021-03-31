<template>
  <div>
    <div class="sidenav">
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#clients">Clients</a>
      <a href="#contact">Contact</a>
    </div>
    <div class="main">
      <h1 class="text-left ">Events/Dashboard</h1>
      <hr>
      <div class="centered">
        <div class="row">
          <div class=" col-12">
            <div class="div-outline">
              <div class="row center">
                <h3 class="">Events</h3>
                <button type="button" class="btn btn-rounded btn-sm">
                  Add Event
                </button>
              </div>
            </div>
            <table class="card-outer table table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Location</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(event, index) in events" :key="index">
                  <td>{{ event.name }}</td>
                  <td>{{ event.date }}</td>
                  <td>{{ event.time }}</td>
                  <td>
                    {{ event.location }}
                  </td>
                  <td>
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-warning btn-sm">
                        Update
                      </button>
                      <button type="button" class="btn btn-danger btn-sm">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      events: [],
    };
  },
  methods: {
    getEvents() {
      const path = 'http://localhost:5000/events';
      axios
        .get(path)
        .then((res) => {
          this.events = res.data.events;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created() {
    this.getEvents();
  },
};
</script>
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
  margin: 0 auto;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.img {
  width: 100%;
  height: 60px;
}
.btn-rounded {
  border-radius: 8px;
  background-color: #f2b920;
  color: #fff;
}
.center {
  padding-bottom: 20px;
  justify-content: space-between;
  width: 900px;
  margin: 0 auto;
  padding: 15px;
  background-color: #F0F2F5;
}
.centered {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    width: 900px;
    margin: 0 auto
}
</style>
