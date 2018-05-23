let fs = require('fs')

let code = `
self.addEventListener('push', e => {
  const data = e.data.json()
  console.log('Push Recieved...')
  self.registration.showNotification(data.title, {
    body: 'This Is A Fucking Push Notification',
    icon: 'https://png.icons8.com/color/1600/push-notifications.png'
  })
})`

fs.appendFileSync('./build/service-worker.js', code ,'utf8')
console.log('Done')
