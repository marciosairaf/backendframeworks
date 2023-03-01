const buttonCadastrar =  document.querySelector('.cadastrar');
const form = document.querySelector('form')

buttonCadastrar.addEventListener('click', (e) => {
    e.preventDefault()
    
    const allInputs = form.elements;

    const NomeSobrenome = allInputs.NomeSobrenome.value;
    const Email = allInputs.Email.value;
    const CPF = allInputs.CPF.value;
    const Telefone = allInputs.Telefone.value;
    const Senha = allInputs.Senha.value;
    const Sexo = allInputs['radio-sexo'].value;
    const Checkbox = allInputs.checkbox.value;
    console.log(NomeSobrenome, Email, CPF, Telefone, Senha, Sexo, Checkbox)

})