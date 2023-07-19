<template>


  <div class="main-content">
    <breadcumb :page="'Dashboard'" :folder="'Stands'" />

    <h3>Configuration de stand</h3>

    <div class="ul-todo-list-content">
      <div
        class="ul-todo-sidebar"
        :class="{ 'ul-todo-mobile-menu-open ': isOpenMobileMenu }"
      >
        <div class="ul-todo-sidebar-overlay"></div>
        <b-card body-class="p-2" class="h-100">
          <i
            class="todo-sidebar-close i-Close pb-3 float-right"
            @click="isOpenMobileMenu = !isOpenMobileMenu"
          ></i>
          <b-button v-b-modal.modal-1 block variant="primary mb-30"
            >Add Task</b-button
          >

          <b-modal id="modal-1" centered title="Add Task" hide-footer>
            <b-form @submit.prevent="todoFormSubmit('primary')">
              <b-form-group id="input-group-1" label-for="input-1">
                <b-form-input
                  id="input-1"
                  type="text"
                  v-model="todoForm.name"
                  placeholder="task name...."
                ></b-form-input>
              </b-form-group>

              <b-form-group>
                <b-form-input id="input-1" type="date" v-model="todoForm.date">
                </b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-textarea
                  id="textarea"
                  v-model="todoForm.description"
                  placeholder="Description..."
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
      </div>
      <p class="ul-todo-content-right">
        <b-card class="wrapper">
          <i
            class="nav-icon i-Align-Justify-All text-25 ul-contact-mobile-icon mr-2"
            @click="isOpenMobileMenu = !isOpenMobileMenu"
          ></i>
          <vue-good-table
            :columns="columns"
            :search-options="{
              enabled: true,
              placeholder: 'Search this table',
            }"
            :pagination-options="{
              enabled: true,
              mode: 'records',
            }"
            styleClass="tableOne vgt-table"
            :rows="rows"
          >
            <template slot="table-row" slot-scope="props">
              <!-- <pre>
                {{ props.row }}
              </pre> -->
              <span v-if="props.column.field == 'name'">
                <div class="ul-todo-area d-flex">
                  <div>
                    <label class="checkbox checkbox-primary">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div>{{ props.row.name }}</div>
                </div>
              </span>
              <span v-else-if="props.column.field == profileAction">
                <!-- <p>{{props.row.profileAction[0].age}}</p> -->

                <div
                  class="ul-todo-tags d-flex  justify-content-end align-items-center"
                >
                  <span
                    class="d-flex align-items-center ml-2"
                    v-for="(badge, key) in props.row.tags"
                    :key="key"
                  >
                    <b-badge class="badge mr-2" :class="badge.badgeColor">{{
                      badge.text
                    }}</b-badge>

                    <p class="ul-widget4__img mt-2 mb-2 todo-img">
                      <img :src="badge.img" class="rounded-circle" />
                    </p>
                  </span>
                </div>
              </span>
              <span v-else-if="props.column.field == 'action'">
                <b-dropdown
                  id="dropdown-left"
                  variant="link"
                  text="Left align"
                  toggle-class="text-decoration-none"
                  size="sm"
                  dropleft
                  no-caret
                >
                  <template v-slot:button-content class="_r_btn border-0">
                    <span class="_dot _r_block-dot bg-dark"></span>
                    <span class="_dot _r_block-dot bg-dark"></span>
                    <span class="_dot _r_block-dot bg-dark"></span>
                  </template>
                  <b-dropdown-item
                    class="dropdown-item"
                    @click="editTodo(props.row)"
                    v-b-modal.contact-list-table-modal-2
                  >
                    <i
                      class="nav-icon i-Pen-2 text-success font-weight-bold mr-2"
                    ></i
                    >Edit
                  </b-dropdown-item>

                  <b-dropdown-item>
                    <a class="dropdown-item" @click="deleteTodo(props.index)">
                      <i
                        class="nav-icon i-Close-Window text-danger font-weight-bold mr-2"
                      ></i
                      >Delete
                    </a>
                  </b-dropdown-item>
                </b-dropdown>
              </span>
            </template>
          </vue-good-table>
        </b-card>
        <!-- edit-modal  -->
      </p>

      <div class="edit-modal">
        <b-modal
          ref="my-modal"
          id="contact-list-table-modal-2"
          centered
          title="BootstrapVue"
          hide-footer
        >
          <b-form @submit.prevent="onUpdateTodoList">
            <b-form-group id="input-group-1" label-for="input-1">
              <b-form-input
                id="input-1"
                type="text"
                v-model="editTodoList.name"
                placeholder="task name...."
              ></b-form-input>
            </b-form-group>
            <b-form-group></b-form-group>
            <b-form-group>
              <b-form-textarea
                id="textarea"
                placeholder="Description..."
                v-model="editTodoList.description"
                rows="3"
              ></b-form-textarea>
            </b-form-group>
            <b-form-group>
              <b-form-input
                id="input-1"
                type="date"
                v-model="editTodoList.date"
              >
              </b-form-input>
            </b-form-group>
            <b-form-group>
              <vue-tags-input
                class="border text-15"
                v-model="editedTag"
                :autocomplete-items="filteredItems"
                :tags="editTodoList.tags"
                @tags-changed="(newTags) => (editTodoList.tags = newTags)"
                placeholder="Type Developer Category"
              />
            </b-form-group>

            <!-- end::edit-modal -->

            <b-button type="submit" variant="outline-primary">Submit</b-button>
            <b-button type="reset" variant="outline-danger">Reset</b-button>
          </b-form>
        </b-modal>
      </div>
    </div>
            <div id="informations" class="container">
                <div>
                    <b-card no-body class="contenu-card">
                      <b-tabs content-class="mt-3" align="center" justified pills card vertical variant="light">
                        <b-tab class="fade" active>
                            <template slot="title">
                              <strong>
                                <i class="icon-regular i-Home1 mr-2"></i>
                                <span class="titre-liste"> Information générale </span>
                              </strong>
                            </template>
                            <h3><strong>Information générale</strong></h3>
                            <hr>
                            <div style="text-align:left">
                                
                              <div class="contenu">
                                <p><strong>Nom :</strong> user.Nom}}</p>
                                <p><strong>Prénom(s) :</strong> user.Prenom}}</p>
                                <p><strong>Ville :</strong> user.ville}}</p>
                                <p><strong>Fonction :</strong> user.metier}}</p>
                                <p><strong>Entité :</strong> user.nomEntite}}</p>
                                <p><strong>Type d'organisation :</strong> user.typeOrganisation.type}}</p>
                                <p><strong>Secteur d'activité :</strong> user.secteurActivite.secteur}}</p>
                              </div>


                              <div class="contenu">
                                <h5>Contacts</h5>
                                <hr>
                                <p><strong>Téléphone :</strong> user.contact}}</p>
                                <p><strong>Email :</strong> user.email}}</p>
                                <p><strong>Facebook :</strong> user.facebook}}</p>
                                <p><strong>Linkedin :</strong> user.linkedin}}</p>
                              </div>
                            </div>
                        </b-tab>

                        <b-tab class="fade">
                            <template slot="title">
                              <strong>
                                <i class="icon-regular i-Newspaper mr-2"></i>
                                <span class="titre-liste"> Documents </span>
                              </strong>
                            </template>
                            <p><strong>Documents </strong></p>
                        </b-tab>

                        <b-tab class="fade">
                            <template slot="title">
                              <strong>
                                <i class="icon-regular i-Landscape mr-2"></i>
                                <span class="titre-liste"> Images </span>
                              </strong>
                              
                            </template>
                            <h3><strong>Images </strong></h3>

                        </b-tab>

                        <b-tab class="fade">
                            <template slot="title">
                              <strong>
                                <i class="icon-regular Video-4 mr-2"></i>
                              <span class="titre-liste"> Vidéos</span> </strong>
                            </template>
                            <p><strong>Vidéos</strong></p>
                        </b-tab>

                        <b-tab class="fade">
                            <template slot="title">
                              <strong>
                                <i class="icon-regular i-Link-2 mr-2"></i>
                              <span class="titre-liste">Liens externes</span>
                            </strong>
                            </template>
                            <h3><strong>Liens externes</strong></h3>

                        </b-tab>

                        <b-tab class="fade">
                            <template slot="title">
                              <strong>
                                <i class="icon-regular i-Find-User mr-2"></i>
                              <span class="titre-liste">Design stand </span> <i class="far fa-images"></i></strong>
                            </template>
                            <p><strong>Design de stand, Banners et roll-up </strong></p>
                        </b-tab>

                        <b-tab class="fade">
                            <template slot="title">
                              <strong>
                                <i class="icon-regular i-Find-User mr-2"></i>
                              <span class="titre-liste">Offres d'emploi </span> <i class="fas fa-info"></i></strong>
                            </template>
                            <p><strong>Offres d'emploi</strong></p>
                        </b-tab>

                      </b-tabs>
                    </b-card>
                </div>
            </div>

   <b-col md="4" class="mb-30">
        <b-card class="h-100" title="Placement">
          <b-card-text>
              Set the <strong class="text-danger">right</strong> prop to  <strong class="text-danger">true</strong>  
          </b-card-text>
          <b-button variant="primary ripple m-1" v-b-toggle.sidebar-right>Toggle Sidebar</b-button>
          <b-sidebar id="sidebar-right" title="Sidebar" bg-variant="white" right backdrop shadow>
            <div class="px-3 py-2">
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <img

                src="@/assets/images/photo-long-2.jpg"
                alt=""
                >
              </div>
           </b-sidebar>
        </b-card>
      </b-col>

  </div>
</template>
<script>

  import StandDescription from "@/modules/back/stand/components/setting/general_information/StandDescription"
export default {
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
