<template>
    <div id="app">
    	<h1>Documents</h1>
        <b-row>  
	       <b-col class="col-md-3">  
		    	<b-card body-class="p-2" class="h-100">
		          <i
		            class="todo-sidebar-close i-Close pb-3 float-right"
		            @click="isOpenMobileMenu = !isOpenMobileMenu"
		          ></i>
		          <b-button v-b-modal.modal-1 block variant="primary mb-30"
		            >Ajouter un document</b-button
		          >

		          <b-modal id="modal-1" centered title="Ajouter un document" hide-footer>
		            <b-form @submit.prevent="todoFormSubmit('primary')">
	                    <b-form-group
	                      label="Document :"
	                      label-for="input-1"
	                    >
	                      <b-form-file
	                        placeholder="Ajouter un document ou placer ici"
	                        drop-placeholder="Placer votre image ici"
	                        ></b-form-file>
	                    </b-form-group>

		              <b-form-group id="input-group-1" label-for="input-1">
		                <b-form-input
		                  id="input-1"
		                  type="text"
		                  v-model="todoForm.name"
		                  placeholder="Ajouter un titre...."
		                ></b-form-input>
		              </b-form-group>

		              <!--b-form-group>
		                <b-form-input id="input-1" type="date" v-model="todoForm.date">
		                </b-form-input>
		              </b-form-group-->

		              <b-form-group>
		                <b-form-textarea
		                  id="textarea"
		                  v-model="todoForm.description"
		                  placeholder="Ajouter une courte description..."
		                  rows="3"
		                ></b-form-textarea>
		              </b-form-group>
		              <b-form-group>
		                <vue-tags-input
		                  v-model="tag"
		                  class="border text-15"
		                  :autocomplete-items="filteredItems"
		                  :tags="todoForm.autocompleteTag"
		                  @tags-changed="
		                    (newTags) => (todoForm.autocompleteTag = newTags)
		                  "
		                  placeholder="Type Developer Category"
		                />
		              </b-form-group>
		              <!-- <b-form-group id="input-group-3" label-for="input-3">
		                <b-form-select :value="null" id="input-3" :options="foods">
		                  <template v-slot:first>
		                    <option :value="null">Select Developer/Designer...</option>
		                  </template>
		                </b-form-select>
		              </b-form-group>-->

		              <b-button type="submit" variant="outline-primary"
		                >Submit</b-button
		              >
		              <b-button type="reset" variant="outline-danger">Reset</b-button>
		            </b-form>
		          </b-modal>

		          <b-list-group>
		            <b-list-group-item class="border-0" href="#">
		              <a href>
		                <i class="icon-regular i-Find-User mr-2"></i>
		                Find
		              </a>
		            </b-list-group-item>
		            <b-list-group-item class="border-0" href="#">
		              <a href>
		                <i class="icon-regular i-Favorite-Window mr-2"></i>
		                Favourite
		              </a>
		            </b-list-group-item>
		            <b-list-group-item class="border-0" href="#">
		              <a href>
		                <i class="icon-regular i-Delete-File mr-2"></i>
		                Deleted
		              </a>
		            </b-list-group-item>
		          </b-list-group>
		        </b-card>
	        </b-col>  
	        <b-col class="col-md-9"> 
        		<b-card>
	        		Liste
        		</b-card>
	        </b-col>  
		</b-row>

    </div>
</template>

<script>
    


export default {
    name: 'StandDocuments',
    components: {
        
    },

    data() {
    return {
      isBadge: true,
      isOpenMobileMenu: false,
      editTodoList: "",
      // tagInput
      tag: "",
      editedTag: "",
      tags: [],

      autocompleteTags: [
        {
          text: "Vue",
        },
      ],
      autocompleteItems: [
        {
          text: "Vue",
          badgeColor: "badge-success",
          img: require("@/assets/images/faces/1.jpg"),
        },
        {
          text: "Angular",
          badgeColor: "badge-danger",
          img: require("@/assets/images/faces/2.jpg"),
        },
        {
          text: "React",
          badgeColor: "badge-info",
          img: require("@/assets/images/faces/3.jpg"),
        },
        {
          text: "Jquery",
          badgeColor: "badge-danger",
          img: require("@/assets/images/faces/4.jpg"),
        },
        {
          text: "JS",
          badgeColor: "badge-warning",
          img: require("@/assets/images/faces/5.jpg"),
        },
      ],
      // tagInput
      todoForm: [
        {
          name: "",
          description: "",
          autocompleteTag: "",
          date: new Date(),
        },
      ],
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      columns: [
        {
          label: "",
          field: "name",
        },
        {
          label: " ",
          field: this.profileAction,
          width: "150px",
        },
        {
          field: "action",
        },
      ],
      rows: [
        {
          id: 1,
          name:
            "Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          date: "2019-10-18",
          tags: [
            {
              text: "Vue",
              badgeColor: "badge-success",
              img: require("@/assets/images/faces/1.jpg"),
            },
            {
              text: "React",
              badgeColor: "badge-info",
              img: require("@/assets/images/faces/3.jpg"),
            },
          ],
        },
        {
          id: 2,
          name: "Bluetooth Headphone",
          name: "Bluetooth V4.0 Portable Speaker with HD Sound and Bass",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          date: "2019-10-18",
          tags: [
            {
              text: "Jquery",
              badgeColor: "badge-danger",
              img: require("@/assets/images/faces/4.jpg"),
            },
            {
              text: "JS",
              badgeColor: "badge-warning",
              img: require("@/assets/images/faces/5.jpg"),
            },
          ],
        },
        {
          id: 3,
          name: "Bluetooth Headphone",
          name: "Monitor V4.0 Portable Speaker with HD Sound and Bass",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          date: "2019-10-18",
          tags: [
            {
              text: "Angular",
              badgeColor: "badge-danger",
              img: require("@/assets/images/faces/2.jpg"),
            },
            {
              text: "Jquery",
              badgeColor: "badge-danger",
              img: require("@/assets/images/faces/4.jpg"),
            },
          ],
        },
        {
          id: 4,
          name:
            "Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          date: "2019-10-18",
          tags: [
            {
              text: "Vue",
              badgeColor: "badge-success",
              img: require("@/assets/images/faces/1.jpg"),
            },
            {
              text: "React",
              badgeColor: "badge-info",
              img: require("@/assets/images/faces/3.jpg"),
            },
          ],
        },
        {
          id: 5,
          name: "Bluetooth Headphone",
          name: "Bluetooth V4.0 Portable Speaker with HD Sound and Bass",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          date: "2019-10-18",
          tags: [
            {
              text: "Jquery",
              badgeColor: "badge-danger",
              img: require("@/assets/images/faces/4.jpg"),
            },
            {
              text: "JS",
              badgeColor: "badge-warning",
              img: require("@/assets/images/faces/5.jpg"),
            },
          ],
        },
        {
          id: 6,
          name: "Bluetooth Headphone",
          name: "Monitor V4.0 Portable Speaker with HD Sound and Bass",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          date: "2019-10-18",
          tags: [
            {
              text: "Angular",
              badgeColor: "badge-danger",
              img: require("@/assets/images/faces/2.jpg"),
            },
            {
              text: "Jquery",
              badgeColor: "badge-danger",
              img: require("@/assets/images/faces/4.jpg"),
            },
          ],
        },
        {
          id: 7,
          name: "Bluetooth Headphone",
          name: "Bluetooth V4.0 Portable Speaker with HD Sound and Bass",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          date: "2019-10-18",
          tags: [
            {
              text: "Jquery",
              badgeColor: "badge-danger",
              img: require("@/assets/images/faces/4.jpg"),
            },
            {
              text: "JS",
              badgeColor: "badge-warning",
              img: require("@/assets/images/faces/5.jpg"),
            },
          ],
        },
      ],
    };
  },
  methods: {
    profileAction(data) {
      return data;
    },
    todoFormSubmit(variant = null) {
      let inputName = this.todoForm.name;
      let description = this.todoForm.description;

      let inputTag = this.todoForm.autocompleteTag;
      let date = this.todoForm.date;

      this.rows.push({
        id: this.rows.length + 1,
        name: inputName,
        tags: inputTag,
        description: description,
        date: date,
      });

      this.$swal({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        type: "success",
        title: "Data Inserted Successfully",
      });
    },
    deleteTodo(data) {
      // console.log(data);

      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.$delete(this.rows, data);
          this.$swal("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    editTodo(data) {
      this.editTodoList = data;
    },
    onUpdateTodoList() {
      let modifiedList = this.rows.map((row) => {
        this.$refs["my-modal"].hide();
        this.$swal({
          position: "top-end",
          type: "warning",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1000,
        });

        if (row.id == this.editTodoList.id) {
          return this.editTodoList;
        } else {
          return row;
        }
      });

      this.rows = modifiedList;
    },
  },
  computed: {
    filteredItems() {
      return this.autocompleteItems.filter((i) => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    },
  },
};
</script>
