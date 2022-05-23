import 'core-js/stable';
import 'regenerator-runtime/runtime'

import './assets/css/style.css';

import ValidaLogin from './assets/modules/ValidaLogin'
import ValidaContato from './assets/modules/ValidaContato'


const validaLogin = new ValidaLogin('.form-login')
const validaCadastro = new ValidaLogin('.form-cadastro')
const validaContato = new ValidaContato()
validaLogin.init()
validaCadastro.init()
validaContato.init()






