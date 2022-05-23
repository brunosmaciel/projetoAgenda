const Login = require('../models/LoginModel')
exports.index = (req,res) =>{
    if(req.session.user) return res.render('login-logado')
    res.render('login')
}
exports.register = async (req,res) =>{
  try {
    const login = new Login(req.body)
    await login.register()
    
    if(login.errors.length > 0){
        req.flash('errors',login.errors)
        req.session.save(() => res.redirect('back'))
        return
    }
    
    req.flash('success','Sua conta foi criada com sucesso')
    req.session.save(() => res.redirect('back'))
    return
    
    
    
  
  } catch (e) {
    console.log(e)  
    return res.render('404')
  }
}

exports.login = async (req,res) =>{
  try {
    const login = new Login(req.body)
    await login.login()
    
    if(login.errors.length > 0){
        req.flash('errors',login.errors)
        req.session.save(() => res.redirect('back'))
        return
    }
    if(!login.user){
      req.flash('errors',login.errors)
      req.session.save(() => res.redirect('back'))
      return
  }
    
    
    req.flash('success','Voce entrou no sistema com sucesso')
    req.session.user = login.user
    req.session.save(() => res.redirect('back'))
    return
    
    
    
    
  } catch (e) {
    console.log(e)  
    return res.render('404')
  }
}
exports.logout = function(req, res) {
   req.session.destroy(() =>{
    setTimeout(() =>{
      res.redirect('/')
     },1000)
   })
  
   
};