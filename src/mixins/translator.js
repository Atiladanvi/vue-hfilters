import i18n from '../i18n.js'

export default{
  methods: {
    '$t': function (key) {
      return i18n.tc(key)
    }
  }
}
