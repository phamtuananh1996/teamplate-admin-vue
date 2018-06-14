<template>
  <b-nav-item-dropdown right no-caret>
    <template slot="button-content">
      {{local.name}}
    </template>
    <b-dropdown-item v-for="lang in languages" :key="lang.code" @click="selectLanguage(lang)">{{lang.name}}</b-dropdown-item>
  </b-nav-item-dropdown>
</template>
<script>
  export default {
    name: 'language',
    data: () => {
      return {}
    },
    computed: {
      languages() {
        return this.$store.state.I18n.languages
      },
      local() {
        return this.$store.state.I18n.local
      }
    },
    created() {
      var lang = localStorage.getItem('i18n') ? JSON.parse(localStorage.getItem('i18n')) : this.$store.state.I18n.local
      this.$store.dispatch('setLang', lang)
    },
    methods: {
      selectLanguage(lang) {
        this.$store.dispatch('setLang', lang)
      }
    }
  }
</script>