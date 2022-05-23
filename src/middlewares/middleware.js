

exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors')
    res.locals.success = req.flash('success')
    res.locals.user = req.session
    next();
  };
  
  exports.outroMiddleware = (req, res, next) => {
    next();
  };
  
  exports.checkCsrfError = (err, req, res, next) => {
    if(err) {
      return res.render('404');
    }
  
    next();
  }
  exports.csrfMiddleware = (req,res,next) => {
      res.locals.csrfToken = req.csrfToken()
      next()
  }

exports.loginRequired = (req,res,next) =>{
  if(!req.session.user){
    req.flash('errors','access denied: Voce precisa fazer login')
    req.session.save( () =>{
      setTimeout(()=>{
        res.redirect('/')
      },1000)
    })
    return
  }
  next()
}  
exports.teste = function(req,res,next){
    const aa = 1
    if(aa === 1){
      document.body.addEventListener('submit',e =>{
        e.preventDefault()
      })
    }

    if(aa === 2 ) next()
}
  

  