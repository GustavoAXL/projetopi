import { useEffect, useState } from 'react';
import './App.css';
import Lixeira from '../../assets/16qg.svg'
import api from '../../services/api'
function Home() {
const [users, setUsers] = useState([])

const inputNome = useRef()
const inputIdade = useRef()
const inputEmail = useRef()

async function getUsuarios(){
const  usersApi =  await api.get('/usuarios')

setUsers (usersApi.data)
}

async function criarUsuarios(){
  await api.post('/usuarios',{
    name: inputNome.current.value,
    idade: inputIdade.current.value,
    email: inputEmail.current.value
  })
}

async function removerUsuarios(){
 await api.delete(`/usuarios/${ìd}`)
  


useEffect(()=>{
getUsuarios()
},[])

  const usuarios= [{
id:'212as',
name:'Axl',
age:33,
email:'email.com'
  },{
    id:'3132as',
    name:'Gustavo',
    age:11,
    email:'emails.com'
  }]



  return (
   <div className='container'>
    <form>
      <h1>Cadastrar Usuário</h1>
      <input placeholder='Nome' name='Nome' type='text' ref ={inputNome}/>
      <input placeholder='Idade' name='Idade' type='number' ref ={inputNome}/>
      <input placeholder='Email' name='Email' type='email' ref ={inputNome}/>
      <button type='button'>Cadastrar</button>
    </form>
{usuarios.map(usuario =>(
  <div key={usuario.id} className='card'>
      <div>
        <p>Nome:<span>{usuario.name}</span></p>
        <p>Idade:<span>{usuario.age}</span></p>
        <p>Email:<span>{usuario.email}</span></p>
      </div>
      <button onClick ={deleteUsers(user.id)}>
        <img src={Lixeira} />
      </button>
    </div>


))}
    

    
   </div>
  );
}
}
export default Home;
