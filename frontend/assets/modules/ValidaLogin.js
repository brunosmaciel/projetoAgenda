
export default class ValidaLogin{
    constructor(formClass){
        this.form = document.querySelector(formClass)
        this.validador = require('validator')
        this.errorsDiv = document.querySelector('.errors-div')
        this.errorsText = document.querySelector('.alert-danger')
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
        const email = el.querySelector('[name="email"]')
        const password = el.querySelector('[name="password"]')

        if(!validator.isEmail(email.value) && !password.value.length < 3 || password.value.length > 50){
            this.clearWarningMessage()
            this.errorsText.innerHTML = 'Formato de email invalido <br> Sua senha deve ter entre 3 e 50 caracteres'
            this.errorsDiv.classList.remove('d-none')
            return 
        }
        
        if(!validator.isEmail(email.value)){
            this.clearWarningMessage()
            this.errorsText.innerHTML = 'Formato de email invalido <br> Sua senha deve ter entre 3 e 50 caracteres'
            this.errorsDiv.classList.remove('d-none')
            return
             
        }
        
        if(password.value.length < 3 || password.value.length > 50){
            this.clearWarningMessage()
            this.errorsText.innerHTML = 'Sua senha deve ter entre 3 e 50 caracteres'
            this.errorsDiv.classList.remove('d-none')
            return
        }
        this.form.submit()
    }
    clearWarningMessage(){
        this.errorsText.innerHTML = ''
    }
    // isValid(){
    //         if(!this.isEmailValid() && !this.isPasswordValid()){
    //             this.errorsText.innerHTML = 'Formato de email invalido <br> Sua senha deve ter entre 3 e 50 caracteres'
    //             this.errorsDiv.classList.remove('d-none')
    //             return  
    //         }
            
            
    //         if(!this.isEmailValid()){
    //             this.clearWarningMessage()
    //             this.errorsText.innerHTML = 'Formato de email invalido <br>'
    //             this.errorsDiv.classList.remove('d-none')
    //             return
    //         }
    //         if(!this.isPasswordValid()){
    //             this.clearWarningMessage()
    //             this.errorsText.innerHTML = 'Sua senha deve ter entre 3 e 50 caracteres'
    //             this.errorsDiv.classList.remove('d-none')
    //             return
                
    //         }
            
            
    //         this.errorsText.innerHTML = ''
    //         this.errorsDiv.classList.add('d-none')
    //         // this.form.submit()
            
        

        
    // }
    // isEmailValid(){
    //     const email = this.form.querySelectorAll('[name="email"]')
    //     return this.validador.isEmail(email[0].value)
        
    // }
    // isPasswordValid(){
    //     const password = document.querySelectorAll('[name="password"]')
    //     if(password[0].value.length < 3 ||password[0].value.length > 51 ) return false

    //     return true
    // }
    // clearWarningMessage(){
    //     this.errorsText.innerHTML = ''
    // }
    
}


