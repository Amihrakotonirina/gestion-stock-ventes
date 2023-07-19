<template>
  <div class="main-content">
    <div class="">
      <!--div
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
            >Ajouter une expérience</b-button
          >

          <b-modal id="modal-1" centered title="Ajouter une expérience professionnelle" hide-footer>
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
              <b-form-group id="input-group-3" label-for="input-3">
                <b-form-select :value="null" id="input-3" :options="foods">
                  <template v-slot:first>
                    <option :value="null">Select Developer/Designer...</option>
                  </template>
                </b-form-select>
              </b-form-group>

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
      </div-->


          <i
            class="nav-icon i-Align-Justify-All text-25 ul-contact-mobile-icon mr-2"
            @click="isOpenMobileMenu = !isOpenMobileMenu"
          ></i>

          <b-row class="mb-30">
            <b-col cols="9">
              <h3 class="font-weight-bolder text-center">Liste des expériences professionnelles</h3>
            </b-col>

            <b-col>
              <b-button v-b-modal.modal-1 block variant="primary mb-30">
                <i class="i-Add"></i> Ajouter une expérience
              </b-button>
            </b-col>
          </b-row>

          <b-modal id="modal-1" centered title="Ajouter une expérience professionnelle" hide-footer>
            <b-form @submit.prevent="experienceFormSubmit('primary')">
              <h5>ny projets no asiana liens</h5>
              <b-row>
                           <b-form-group
                              label="Poste :"
                              label-for="input-post"
                              class="col-md-12"
                            >
                              <b-form-input
                                type="text"
                                required
                                placeholder="Poste occupé"
                                name="input-post"
                                v-model="experienceForm.jobTitle"
                              ></b-form-input>
                            </b-form-group>
                              <b-form-group
                              label="Employeur :"
                              label-for="input-employer"
                              class="col-md-6"
                            >
                              <b-form-input
                                type="text"
                                required
                                placeholder="Employeur"
                                name="input-employer"
                                v-model="experienceForm.employerEnterprise"
                              ></b-form-input>
                            </b-form-group>
                              <b-form-group
                              id="input-group-1"
                              label="Adresse :"
                              label-for="input-employer-address"
                              class="col-md-6"
                            >
                              <b-form-input
                                type="text"
                                required
                                placeholder="Adresse de l'employeur"
                                name="input-employer-address"
                                v-model="experienceForm.employerAdress"
                              ></b-form-input>
                            </b-form-group>
                          </b-row>
                            <b-form-group>
                              <label class="checkbox checkbox-primary">
                                <input type="checkbox" v-model="experienceForm.isCurrentJob" />
                                <span>C'est mon poste actuel</span>
                                <span class="checkmark"></span>
                              </label>
                            </b-form-group>

                          <b-row>
                              <b-form-group
                              label="Date de début :"
                              label-for="begin-date"
                              class="col-md-6"
                            >
                              <b-form-input
                                type="date"
                                required
                                name="begin-date"
                                v-model="experienceForm.beginDate"
                              ></b-form-input>
                            </b-form-group>
                              <b-form-group
                              label="Date de fin :"
                              label-for="end-date"
                              class="col-md-6"
                            >
                              <b-form-input
                                type="date"
                                required
                                name="end-date"
                              v-model="experienceForm.endDate"
                              ></b-form-input>
                            </b-form-group>
                          </b-row>


                          <b-form-group
                              label="Description du poste :"
                              label-for="post-decription"
                            >
                              <b-form-textarea
                                required
                                rows="5"
                                placeholder="Ajouter une courte description"
                                name="post-decription"
                                v-model="experienceForm.description"
                              ></b-form-textarea>
                          </b-form-group>
                  <!--b-form-group>
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
                  <b-form-group id="input-group-3" label-for="input-3">
                    <b-form-select :value="null" id="input-3" :options="foods">
                      <template v-slot:first>
                        <option :value="null">Select Developer/Designer...</option>
                      </template>
                    </b-form-select>
                  </b-form-group-->
                <b-row>
                  <b-col>
                    <b-button class="btn-block" type="submit" variant="primary"> Ajouter l'expérience </b-button>
                  </b-col>
                  <b-col>
                    <b-button class="btn-block" type="reset" variant="outline-danger"> Effacer les champs </b-button>
                  </b-col>
                </b-row>
              </b-row>
            </b-form>
          </b-modal>


          <vue-good-table
            :columns="columns"
            :search-options="{
              enabled: false,
              placeholder: 'Rechercher une expériences',
            }"
            :pagination-options="{
              enabled: true,
              mode: 'records',
            }"
            styleClass="tableOne vgt-table"
            :rows="rows"
          >
            <template slot="table-row" slot-scope="props">
              <b-card>
                <!-- <pre>
                  {{ props.row }}
                </pre> -->
                <span v-if="props.column.field == 'name'">
                  <div class="d-flex0">

                    <div> <!--Test { { props.row.name }} -->
                        <h5 class="font-weight-bolder">Titre du poste : {{ props.row.jobTitle }} | Entreprise : {{ props.row.employerEnterprise }}
                          <span class="float-right pull-right mr-0">
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
                                >Modifier
                              </b-dropdown-item>

                              <b-dropdown-item>
                                <a class="dropdown-item" @click="deleteExperience(props.index)">
                                  <i
                                    class="nav-icon i-Close-Window text-danger font-weight-bold mr-2"
                                  ></i
                                  >Supprimer
                                </a>
                              </b-dropdown-item>
                            </b-dropdown>
                          </span>
                        </h5>
                        <p><span> Du {{ props.row.beginDate }} </span> 
                          <span v-if="props.row.isCurrentJob"> jusqu'à aujourd'hui </span> 
                          <span v-else> au {{ props.row.endDate }} </span> 
                        </p>
                        <p>{{ props.row.description }}</p>
                    </div>
                  </div>
                </span>
              </b-card>

            </template>

          </vue-good-table>
        <!-- edit-modal  -->

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

            <b-button type="submit" variant="outline-primary">Ajouter</b-button>
            <b-button type="reset" variant="outline-danger">Reset</b-button>
          </b-form>
        </b-modal>
      </div>
    </div>
  </div>
</template>
<script>
//import tagInputVue from "../form/tagInput.vue";
export default {
	name: 'ProfessionalExperience',
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

      experienceForm: [
        {
          jobTitle: "",
          employerEnterprise: "",
          employerAdress: "",
          beginDate: new Date(),
          endDate: new Date(),
          description: "",
          isCurrentJob : false
        }
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
        /*{
          label: " ",
          field: this.profileAction,
          width: "150px",
        },
        {
          field: "action",
        },*/
      ],
      rows: [
        {
          id: 1,
          jobTitle: "Responsable communication digitale et marketing",
          employerEnterprise: "Amikal Project",
          employerAdress: "Tsaralalàna",
          beginDate: "2019-10-18",
          endDate: "2019-10-18",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          isCurrentJob: true
        },        
        {
          id: 2,
          jobTitle: "Community Manager",
          employerEnterprise: "Amikal Project",
          employerAdress: "Tsaralalàna",
          beginDate: "2017-10-18",
          endDate: "2019-10-18",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          isCurrentJob: false
        },        
        {
          id: 3,
          jobTitle: "Stagiaire community manager",
          employerEnterprise: "Amikal Project",
          employerAdress: "Tsaralalàna",
          beginDate: "2016-10-18",
          endDate: "2017-10-18",
          description: "Lorem ipsum dolor sit amet, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          isCurrentJob: false
        },
      ],



      rows0: [
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

    experienceFormSubmit(variant = null){
      let inputjobTitle = this.experienceForm.jobTitle;
      let inputEmployerEnterprise= this.experienceForm.employerEnterprise;
      let inputEmployerAdress = this.experienceForm.employerAdress;
      let inputBeginDate = this.experienceForm.beginDate;
      let inputEndDate = this.experienceForm.endDate;
      let inputDescription = this.experienceForm.description;
      let isCurrentJob = this.experienceForm.isCurrentJob;

      this.rows.push({
        id: this.rows.length + 1,
        jobTitle: inputjobTitle,
        employerEnterprise: inputEmployerEnterprise,
        employerAdress: inputEmployerAdress,
        beginDate: inputBeginDate,
        endDate: inputEndDate,
        description: inputDescription,
      });

      this.$swal({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        type: "success",
        title: "Expérience ajoutée avec succès",
      });
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
    deleteExperience(data) {
      // console.log(data);

      this.$swal({
        title: "Confirmation de suppression",
        text: "Veuillez confirmer la suppression de l'expérience sélectionnée",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "Annuler",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Je confirme",
      }).then((result) => {
        if (result.value) {
          this.$delete(this.rows, data);
          this.$swal("Confirmée!", "L'expérience a été supprimée avec succès.", "success");
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
