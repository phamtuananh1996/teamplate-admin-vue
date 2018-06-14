// import { HTTP } from '@/CallAPI'
// import Helper from '@/Helper'
export default {
  name: 'app-login',
  props: [],
  data () {
    return {
      errors: [],
      message: '',
      user: {},
      btn_dangnhap: false
    }
  },
  // beforeRouteEnter (to, from, next) {
  //   HTTP.get('/getuser').then(res => {
  //     next({path: '/'})
  //   }).catch(err => {
  //     console.log(err)
  //     next()
  //   })
  // },
  created () {
  },
  computed: {

  },
  mounted () {
  },
  methods: {
    login () {
      this.$loading.start()
      this.$router.go(-1)
      this.$loading.complete()
      // HTTP.post('/login', this.user).then(res => {
      //   if (res.status === 200) {
      //     this.$loading.complete()
      //     Helper.setUserLocalStorage(res.data.data)
      //     this.$router.go(-1)
      //   }
      // }).catch(err => {
      //   this.$loading.complete()
      //   if (err.status === 422) {
      //     this.errors = err.data.errors
      //   }
      //   if (err.status === 500) {
      //     this.message = 'Đăng nhập thất bại'
      //     this.$loading.fail()
      //   }
      // })
    }
  }
}
