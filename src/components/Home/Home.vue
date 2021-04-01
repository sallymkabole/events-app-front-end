<template>
  <div>
    <div class="sidenav text-left">
      <h2 class="ml-2 text-white text-center">Event Finder</h2>
      <div class="links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
    <div class="main">
      <h1 class="text-left">Dashboard</h1>
      <hr />
      <alert :message=message v-if="showMessage"></alert>
      <div class="centered">
        <div class="row">
          <div class="col-12">
            <div class="div-outline">
              <div class="row center">
                <h3 class="">Events</h3>
                <button
                  type="button"
                  class="btn btn-rounded btn-sm"
                  v-b-modal.event-modal
                >
                  <b-icon icon="plus"></b-icon>
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
                      <button type="button" v-b-modal.event-update-modal
        @click="editEvent(event)"  class="btn btn-warning btn-sm">
                        Update
                      </button>
                      <button type="button" class="btn btn-danger btn-sm"
                       @click="onDeleteEvent(event)">
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
    <b-modal
      ref="addEventModal"
      id="event-modal"
      title="Add a new event"
      hide-footer
    >
      <b-form @submit="onSubmit" @reset="onReset" class="w-100">
        <b-form-group
          id="form-name-group"
          label="Name:"
          label-for="form-name-input"
        >
          <b-form-input
            id="form-name-input"
            type="text"
            v-model="addEventForm.name"
            required
            placeholder="Enter name"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="form-location-group"
          label="Location:"
          label-for="form-location-input"
        >
          <b-form-input
            id="form-location-input"
            type="text"
            v-model="addEventForm.location"
            required
            placeholder="Enter location"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="form-date-group"
          label="Date:"
          label-for="form-date-input"
        >
          <b-form-input
            id="form-date-input"
            type="text"
            v-model="addEventForm.date"
            required
            placeholder="Enter date"
          >
          </b-form-input>
        </b-form-group>
          <b-form-group
            id="form-time-group"
            label="Time:"
            label-for="form-time-input"
          >
            <b-form-input
              id="form-time-input"
              type="text"
              v-model="addEventForm.time"
              required
              placeholder="Enter time"
            >
            </b-form-input>
        </b-form-group>
        <b-button type="submit" class="mr-2" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-modal>
    <b-modal
      ref="editEventModal"
      id="event-update-modal"
      title="Update"
      hide-footer
    >
      <b-form @submit="onSubmitUpdate" @reset="onResetUpdate" class="w-100">
        <b-form-group
          id="form-title-group"
          label="Name:"
          label-for="form-title-input"
        >
          <b-form-input
            id="form-title-input"
            type="text"
            v-model="editForm.name"
            required
            placeholder="Enter name"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="form-location-group"
          label="Location:"
          label-for="form-location-input"
        >
          <b-form-input
            id="form-location-input"
            type="text"
            v-model="editForm.location"
            required
            placeholder="Enter location"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="form-date-group"
          label="Date:"
          label-for="form-date-input"
        >
          <b-form-input
            id="form-date-input"
            type="text"
            v-model="editForm.date"
            required
            placeholder="Enter date"
          >
          </b-form-input>
          <b-form-group
            id="form-time-group"
            label="Time:"
            label-for="form-time-input"
          >
            <b-form-input
              id="form-time-input"
              type="text"
              v-model="editForm.time"
              required
              placeholder="Enter time"
            >
            </b-form-input>
          </b-form-group>
        </b-form-group>
        <b-button type="submit" class="mr-2" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios';
import Alert from '../Alert.vue';

export default {
  name: 'Home',
  components: {
    alert: Alert,
  },
  data() {
    return {
      events: [],
      addEventForm: {
        name: '',
        location: '',
        date: '',
        time: '',
      },
      editForm: {
        name: '',
        location: '',
        date: '',
        time: '',
      },
      message: '',
      showMessage: false,
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
    addEvent(payload) {
      const path = 'http://localhost:5000/events';
      axios
        .post(path, payload)
        .then(() => {
          this.getEvents();
          this.message = 'Event added!';
          this.showMessage = true;
        })
        .catch((error) => {
          console.log(error);
          this.getEvents();
        });
    },
    updateEvent(payload, eventID) {
      const path = `http://localhost:5000/events/${eventID}`;
      axios
        .put(path, payload)
        .then(() => {
          this.getEvents();
          this.message = 'Event updated!';
          this.showMessage = true;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
          this.getEvents();
        });
    },
    removeEvent(eventID) {
      const path = `http://localhost:5000/events/${eventID}`;
      axios.delete(path)
        .then(() => {
          this.getEvents();
          this.message = 'Event removed!';
          this.showMessage = true;
        })
        .catch((error) => {
          console.error(error);
          this.getEvents();
        });
    },
    onDeleteEvent(event) {
      this.removeEvent(event.id);
    },

    editEvent(event) {
      this.editForm = event;
    },
    initForm() {
      this.addEventForm.name = '';
      this.addEventForm.location = '';
      this.addEventForm.date = '';
      this.addEventForm.time = '';
      this.editForm.name = '';
      this.editForm.location = '';
      this.editForm.date = '';
      this.editForm.time = '';
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.$refs.addEventModal.hide();
      const payload = {
        name: this.addEventForm.name,
        location: this.addEventForm.location,
        date: this.addEventForm.date,
        time: this.addEventForm.time,
      };
      this.addEvent(payload);
      this.initForm();
    },
    onReset(evt) {
      evt.preventDefault();
      this.$refs.addEventModal.hide();
      this.initForm();
    },
    onSubmitUpdate(evt) {
      evt.preventDefault();
      this.$refs.editEventModal.hide();
      const payload = {
        name: this.editForm.name,
        location: this.editForm.location,
        date: this.editForm.date,
        time: this.editForm.time,

      };
      this.updateEvent(payload, this.editForm.id);
    },
    onUpdate(evt) {
      evt.preventDefault();
      this.$refs.editEventModal.hide();
      const payload = {
        name: this.editForm.name,
        location: this.editForm.location,
        date: this.editForm.date,
        time: this.editForm.time,
      };
      this.updateEvent(payload, this.editForm.id);
    },
    onResetUpdate(evt) {
      evt.preventDefault();
      this.$refs.editEventModal.hide();
      this.initForm();
      this.getEvents();
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
  background-color: #33313b;
  overflow-x: hidden;
  padding-top: 20px;
  border-right: 2px solid #f5f5f5;
}

.sidenav a {
  padding: 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  text-transform: uppercase;
}
.sidenav a:hover {
  color: #f1f1f1;
  background-color: #818181;
  border-radius: 50px;
}
.links {
  margin-top: 40px;
}

.main {
  margin-left: 400px; /* Same as the width of the sidenav */
  padding: 0px 10px;
}
.card-outer {
  /* Add shadows to create the 'card' effect */
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
.btn {
  border-radius: 8px;
  color: #fff;
}
.center {
  padding-bottom: 20px;
  justify-content: space-between;
  width: 900px;
  margin: 0 auto;
  padding: 15px;
  background-color: #f0f2f5;
}
.centered {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  width: 900px;
  margin: 0 auto;
}
</style>
