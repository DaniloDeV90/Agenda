import validator from 'validator'


function errorP (errorText, local) {
    const div = document.createElement ('div')
   div.id = 'estilo'
   div.style.color ='red' 
    div.innerText = errorText
    return local.insertAdjacentElement ('afterend', div)
}

export default class Login {
    constructor (formClass) {
           this.form = document.querySelector (formClass)

    }

    init () {
        this.events ()
    }
    events () {
        if (!this.form) return
        this.form.addEventListener ('submit', e =>{
            e.preventDefault ()
            this.validate (e)

        })
    }

    validate (e) {
        const el = e.target
        const emailInput = el.querySelector ('input[name="email"]')
        const senha  = el.querySelector ('input[name="senha"]')
        let error = false

          let remover = document.querySelectorAll ("#estilo")

          remover.forEach (elemento =>{
            elemento.remove ()
          }) 
        if (!validator.isEmail (emailInput.value)) {
              errorP ("Email inválido",emailInput)
            error = true

        }

        if (senha.value.length < 3 || senha.value.length > 50 )  {
            errorP ("Senha deverá conter entre 3 e 50 caracteres ",senha)
            error = true

        }

        if (!error) el.submit ()
      
    }
}