
export default class ValidaContato{
    constructor(){
        this.form = document.querySelector('.form-contato')
        this.validador = require('validator')
        this.errorsDiv = document.querySelector('.errors-div')
        this.errorsText = document.querySelector('.alert-danger')
        this.errors = []
    }
    init(){

        this.events()
     
    }
    events(){
        if(!this.form) return
        this.form.addEventListener('submit',e =>{
            e.preventDefault()
            this.valida(e)
            return
            
        })
    }
    valida(e){
        const validator = require('validator')
        const el = e.target
        const nome = el.querySelector('[name="nome"]')
        const email = el.querySelector('[name="email"]')
        const telefone = el.querySelector('[name="telefone"]')
        
        if(!email.value && !telefone.value && !nome.value){
            this.clearWarningMessage()
            this.errorsText.innerHTML = 'É necessário informar um nome <br> É necessário informar pelo menos um email ou telefone'
            this.errorsDiv.classList.remove('d-none')
            return
        }
        if(!nome.value){
            this.clearWarningMessage()
            this.errorsText.innerHTML = 'É necessário informar um nome'
            this.errorsDiv.classList.remove('d-none')
            return
        }
        if(!email.value && !telefone.value){
            this.clearWarningMessage()
            this.errorsText.innerHTML = 'É necessário informar pelo menos um email ou telefone'
            this.errorsDiv.classList.remove('d-none')
            return

        }
        if(email.value !== ''){
            if(!validator.isEmail(email.value)){
                this.clearWarningMessage()
                this.errorsText.innerHTML = 'Formato de email invalido'
                this.errorsDiv.classList.remove('d-none')
                return
                 
            }
            
        }
        


        this.form.submit()
    }
    clearWarningMessage(){
        this.errorsText.innerHTML = ''
    }
}    