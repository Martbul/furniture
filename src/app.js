//entry point for whole app

import page from '../../node_modules/page/page.mjs';
import { catalogView } from './views/catalogView.js';
import { detailsView } from './views/detailsView.js';
import { loginView } from './views/loginView.js';
import { updateNav } from './utils.js';
import { editView } from './views/editView.js';


//update nav bar
updateNav()

// go to '/'(home page)
//initialize app's routs
page('/', catalogView)
page('/details/:id', detailsView)
page('/login', loginView)
page('/edit/:id', editView)
page.start()