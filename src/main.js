import { createApp } from 'vue'

import App from './App.vue'
import router from './router';
import store from './store'
import firebase from "firebase/compat/app";
import config from './config/firebaseConfig'

const app = createApp(App);


const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue|js)$/);

requireComponent.keys().forEach(fileName => {
    let baseComponentConfig = requireComponent(fileName);
    baseComponentConfig = baseComponentConfig.default || baseComponentConfig;
    let baseComponentName = baseComponentConfig.name || fileName.replace(/^.+\//, "").replace(".vue", "");
    app.component(baseComponentName, baseComponentConfig);
});

firebase.initializeApp(config)

app.use(router);
app.use(store);

app.mount('#app');
