<template>
  <div>
    <form>
      <h2>Expériences professionnelles</h2>
      <div v-for="(experience, index) in experiences" :key="index">
        <label>
          Entreprise :
          <input type="text" v-model="experience.company" />
        </label>
        <label>
          Poste :
          <input type="text" v-model="experience.position" />
        </label>
        <label>
          Description :
          <textarea v-model="experience.description"></textarea>
        </label>
      </div>
      <button @click.prevent="addExperience">Ajouter une expérience</button>

      <h2>Formations</h2>
      <div v-for="(education, index) in educations" :key="index">
        <label>
          Établissement :
          <input type="text" v-model="education.school" />
        </label>
        <label>
          Diplôme :
          <input type="text" v-model="education.degree" />
        </label>
        <label>
          Description :
          <textarea v-model="education.description"></textarea>
        </label>
      </div>
      <button @click.prevent="addEducation">Ajouter une formation</button>

      <button @click="submitCV">Soumettre le CV</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        { company: '', position: '', description: '' }
      ],
      educations: [
        { school: '', degree: '', description: '' }
      ]
    }
  },
  methods: {
    addExperience() {
      this.experiences.push({ company: '', position: '', description: '' });
    },
    addEducation() {
      this.educations.push({ school: '', degree: '', description: '' });
    },
    submitCV() {
      // Envoyer les données vers un serveur ou une fonction de sauvegarde
      console.log(JSON.stringify({ experiences: this.experiences, educations: this.educations }))
    }
  }
}
</script>
