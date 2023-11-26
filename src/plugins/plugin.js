export default {
  install: (app, options) => {
    app.config.globalProperties.$myPlugin = () => {
      ccnsole.log(
        'This is Vue Plugin!'
      )
    }
  }
}