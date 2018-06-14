var host = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000' : 'http://pe.glviews.com'
var version = 'v1'
var type = 'api'
var URL_API = host + '/' + type + '/' + version + '/'
export default {
  URL_API
}
