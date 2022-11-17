import Logo from '../../assets/logo-dio.png'
import './styles.css'
export const Header = () =>{
return(
    <header className='header'>
       <img src={Logo} alt="Logo DIO" />
        <div className='btn'>
            <p>Home</p>
            <button  type="button">Entrar</button>
            <button  type='button'>Cadastrar</button>
        </div>
    </header>
)
}