import Card from './components/Card'

Nova.booting((Vue, store) => {
  Vue.component('nova-list-items-card', require('./components/Card'))
})
