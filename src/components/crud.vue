<template>
<div id="app" class="container">
  <!-- Add ann entry-->
  <h1>Vue.js, Vuefire &amp; Firebase</h1>
  <p>&nbsp;</p>
  <div id="addEntry">
    <label>Name</label>
    <input type="text" v-model="name" class="form-control">
    <br>
    <button @click="submitName" class="btn btn-success">
    Add
    </button>
  </div>
  <p>&nbsp;</p>

  <!-- Display list of Entries -->
  <ul>
    <li v-for="personName in names" :key="personName['.key']">
      <!-- Remove Entry -->
      <div v-if="!personName.edit">
        <h4>{{ personName.name }}</h4>
        <p>
          <button @click="removeName(personName['.key'])"
          class="btn btn-danger">Remove</button>
          <!-- Update Edit  Entry -->
          <button @click="setEditName(personName['.key'])"
          class="btn">Edit</button>
        </p>
      </div>

      <!-- Save Edit Entry -->
      <div v-else>
        <input type="text" v-model="personName.name"
        class="form-control">
        <button @click="saveEdit(personName)"
        class="btn">
          Save
        </button>

        <!-- Cancel Edit  Entry-->
        <button @click="cancelEdit(personName['.key'])"
        class="btn btn-primary">
          Cancel
        </button> <!-- End cancelEdit -->
      </div> <!-- End v-else -->
    </li> <!-- End li v-for-->
  </ul> <!-- End ul -->
</div> <!-- End #app .container-->
</template> <!--  End Template-->

<script>
import {namesRef} from '../firebase'; // Import namesRef from file src/firebase.js
import toastr from 'toastr' // Import toastr for notifications
export default {
  name: 'crud',
  data() {
    return {
      name: ' ' // Instantiate name variable
    }
  },
  firebase: {
    names: namesRef
  }, // Firebase object to set names variable to namesRef in firebase database
  methods: {
    submitName: function () {
      namesRef.push({
        name: this.name,
        edit: false
      });
      this.name = ' '; // Reset name field to empty
      toastr.success("Name has been Added!") // notification
    }, // Submit name to firebase database

    // Remove name entry from firebase database
    removeName: function (key) {
      namesRef.child(key).remove();
      toastr.success("Name Removed!") // notification
    },

    // Set Edited Entry
    setEditName: function (key) {
      namesRef.child(key).update({
        edit: true
      });
    },

    // Cancel Editing
    cancelEdit: function (key) {
      namesRef.child(key).update({
        edit: false
      });
    },

    // Save Edited Entry
    saveEdit: function (person) {
      const key = person['.key'];
      namesRef.child(key).set({
        name: person.name,
        edit: false
      });
      toastr.success("Name has been Edited!") // notification
    } // End Save Entry
  } // End methods
} // End Export Class
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  label {
    font-size: 22px;
  }
</style>
