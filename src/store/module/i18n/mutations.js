import i18n from '../../../lang/i18n'
export default {
  SET_LANG (state, payload) {
    state.local = payload
    localStorage.setItem('i18n', JSON.stringify(payload))
    i18n.locale = payload.code
  }
}
