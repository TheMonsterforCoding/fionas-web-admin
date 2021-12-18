//LIST PET
//validar nombre de la mascota
function validarNombreMascota(nombreMascota : string) {
    var encontrarNumero=new RegExp(/\d/);
    var validador=false
    var mensajeNombreMascota = "";
    if(encontrarNumero.test(nombreMascota)){
      mensajeNombreMascota="El nombre de mascota no puede tener números"
    }else if(!encontrarNumero.test(nombreMascota)){
      validador=true

    }else if(nombreMascota.length>=10){
       mensajeNombreMascota="Un nombre de mascota no puede tener más de 10 caracteres"
       validador=false
  }else if(nombreMascota.length==0){
    validador=false
  }
    return [nombreMascota,mensajeNombreMascota,validador]
  }

  //validar raza
  function validarBreed(breed:string){
    var validador=false;
    var mensajeBreed="";
    var encontrarNumero=new RegExp(/\d/);
    if(breed.length>1){
    
    if(breed.length>=12){
      mensajeBreed="La raza no puede tener más de 12 caracteres"
    }else if(breed.length<=2){
      mensajeBreed="La raza no puede tener menos de 2 caracteres"
    }else if(encontrarNumero.test(breed)){
      mensajeBreed="La raza no puede tener números"
    }else{
      validador=true
    }
  }
    return [breed,mensajeBreed, validador]

    <CreatePetModal isOpen={isCreatePetModal}
    onRequestClose={handleCloseCreatePetModal} 
    validarNombreMascota={validarNombreMascota}
    validarBreed={validarBreed} />
  }
  //--------------------------

//list user
function validarFirstName(firstName: string){
    var mensajeFirstName="";
    var validador=false;
    var nombreValido = /\D/;
    if(firstName.length>=1){
    if(nombreValido.test(firstName)){
         mensajeFirstName="";
         validador=true;
    }else{
        mensajeFirstName="No se permiten números en el nombre"
    }
   }
    return [firstName,mensajeFirstName,validador];
 }


 //Funcion para validar las contraseñas
 function validarPassword(password:string,password2:string){
   console.log(password)
   var validador=false;
  var passwordValido = /^[a-zA-Z0-9]{6,}$/;
  var  mensajePassword="";
  if(password.length>=1){

    if(password!==password2){
      mensajePassword="las contraseña no son iguales"
      validador=false;
    }
    if(passwordValido.test(password) && password==password2){
    mensajePassword="";
    validador=true;

  }else if(!passwordValido.test(password)){
    mensajePassword="la contraseña tiene que tener letras, números, un minimo de caractes de 6 y un máximo de 12 ";
    validador=false;
  }
  else if(password.length>12){
    mensajePassword="La contraseña no puede ser mayor a 12 caracteres"
    validador=false;
  }
}
  return [password,password2,mensajePassword,validador]
}
//Funcion para mail
function validarMail(mail:string){
  var validador=false;
  var mensajeMail=""; 
  if(mail.length>=1){
  let mailValido = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if(mailValido.test(mail)){
      mensajeMail="";
      validador=true;
  }else{
      mensajeMail="El formato tiene que ser un mail";
  }
}
  return [mail,mensajeMail,validador]
}
//función para celular

function validarMobileNumber(mobileNumber:string){
  var validador=false;
  var mensajeMobileNumber=""
  let mobileNumberValido = /\d/;
  if(mobileNumber.length>=1){
  if(mobileNumberValido.test(mobileNumber)){
      mensajeMobileNumber=""
      validador=true;
  }else{
      mensajeMobileNumber="El formato tiene que ser solo número";
  }
  }
  return [mobileNumber,mensajeMobileNumber,validador]
  }
//validar cpf
function validarCpf(cpf:string){
  var validador=false;
  var mensajeCPF=""
  let cpfValido = /^\d{3}\d{3}\d{3}\d{2}$$/;
  if(cpf.length>=1){
  if(cpfValido.test(cpf)){
      mensajeCPF=""
      validador=true;
  }else{
      mensajeCPF="El formato del cpf es incorrecto xxx.xxx.xxx-xx";
  }
}
  return [cpf,mensajeCPF,validador]
  }
//function validar address
function validarAddress(address:string){
  var validador=false;
  var mensajeAddress=""
  if(address.length>=1){
    if (address.length>25){
      mensajeAddress="La dirección no puede tener más de 25 caracteres"
    }else{
      validador=true;
    }
  }
  return[address,mensajeAddress,validador]
}
//function validar apellido
function validarLastName(lastName:string){
  var validador=false;
  var mensajeLastName=""
  var apellidoValido = /^[a-zA-Z]{3,}$/;
  if(lastName.length>=1){
    if(apellidoValido.test(lastName)){
          mensajeLastName="";
          validador=true;
    }else{
      mensajeLastName="No se puede tener menos de 3 caracteres o números. "
    }
  }
  return [lastName,mensajeLastName,validador]
}

<CreateUserModal
isOpen={isCreateUserModal}
onRequestClose={handleCloseCreateUserModal}
validarFirstName={validarFirstName}
validarPassword={validarPassword}
validarMail={validarMail}
validarCpf={validarCpf}
validarAddress={validarAddress}
validarMobileNumber={validarMobileNumber}
validarLastName={validarLastName}
/>

//-------------------------------------------------------------------------

//index  pet

interface CreatePetModalProps {
    isOpen: boolean
    onRequestClose: () => void
    validarNombreMascota(nombreMascota: string):() => []
    validarBreed(breed: string):() => []
    validarSize(size: string):() => []
  }

  var arrayValidarNombreMascota= validarNombreMascota(nombreMascota);
  nombreMascota=arrayValidarNombreMascota[0];
  var mensajeNombreMascota=arrayValidarNombreMascota[1];
  var validadorNombreMascota=arrayValidarNombreMascota[2];
  //validar raza
  var arrayValidarBreed= validarBreed(breed);
  breed=arrayValidarBreed[0];
  var mensajeBreed=arrayValidarBreed[1];
  var validadorBreed=arrayValidarBreed[2];
 
  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if(validadorNombreMascota && validadorBreed){
    await api
    .post('/pets', {
      name: nombreMascota,
      size: size,
      gender: genderId,
      year_of_birth: 2012,
      breed: breed,
      state: state
    })
    .then(function (response) {
      console.log(response)
      toast.success('Pet cadastrado com susseso!')

      setId('')
      setNombreMascota('')
      setSize('')
      setGenderId(false)  
      setYearOfBirth('')
      setBreed('')
      setCreatedAt('')
      setDueño('')
      setState(false)

      onRequestClose()
    })
    .catch(function (error) {
      console.log(error)
      toast.error('Dados de Pet incorreto!')
    })
  }else{
    toast.error('Dados de Pet incorreto!')
    event.preventDefault()
  }

  //-------------------------------------------------------------------



//user  index
  //validación password
  var mensajePassword="";
  var mensajePassword2="";
  var mensajeFirstName="";
  var mensajeMail="";
  var passwordArray = validarPassword(password, password2)
  password=passwordArray[0]
  password2=passwordArray[1]
  mensajePassword=passwordArray[2]
  var validadorPassword=passwordArray[3]
  //validación nombre
  var firstNameArray=validarFirstName(firstName)
  firstName=firstNameArray[0]
  mensajeFirstName=firstNameArray[1]
  var validadorFirstName=firstNameArray[2]
  //validación mail
  var mailArray=validarMail(mail)
  mail=mailArray[0]
  var mensajeMail=mailArray[1]
  var validadorMail=mailArray[2]

  //validación mobile
  var mensajeMobileNumber="";
  var mobileNumberArray=validarMobileNumber(mobileNumber.toString())
  mobileNumber=mobileNumberArray[0]
  mensajeMobileNumber=mobileNumberArray[1]
  var validadorMobile=mobileNumberArray[2]
  //validación cpf
  var mensajeCpf="";
  var cpfArray=validarCpf(cpf)
  cpf=cpfArray[0]
  mensajeCpf=cpfArray[1]
  var validadorCpf=cpfArray[2]
//validación address
  var mensajeAddress="";
  var addressArray=validarAddress(address)
  address=addressArray[0]
  mensajeAddress=addressArray[1]
  var validadorAddress=addressArray[2]
  //validación lasName
  var mensajeLastName="";
  var lastNameArray=validarLastName(lastName)
  lastName=lastNameArray[0]
  mensajeLastName=lastNameArray[1]
  var validadorLastName=lastNameArray[2]

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if(validadorAddress && validadorFirstName && validadorLastName && validadorMail && validadorMobile && validadorPassword){
    await api
    .post('/users', {
      cpf: cpf,
      avatar: 'https://lh3.googleusercontent.com/a-/AOh14GgJDGOETWdTK25Wqtaed4UofMsYehhJCk1TrGfElg=s360-p-rw-no',
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      password: password,
      year_of_birth: yearOfBirth,
      address: address,
      mail: mail,
      mobile_number: parseInt(mobileNumber.toString()),
      state: state
    })
    .then(function (response) {
      console.log(response)
      toast.success('Usuário cadastrado com susseso!')

      setCpf('')
      setFirstName('')
      setLastName('')
      setGender(true)
      setPassword('')
      setPassword2('')
      setYearOfBirth(1900)
      setAddress('')
      setMail('')
      setMobileNumber(0)
      setState(false)

      onRequestClose()
    })
    .catch(function (error) {
      console.log(error)
      toast.error('Dados de usuario incorreto!')
    })
  }else{
    toast.error('Dados de usuario incorreto!')
    event.preventDefault()
  }
}

//---------------------------





