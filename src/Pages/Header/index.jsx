import Logo from '../../assets/logo-dio.png'
import './headerStyles.css'
export const Header = () =>{
return(
    <header className='header'>
       <img src={Logo} alt="Logo DIO" />
        <div className='btn'>
            <p>Home</p>
            <button className='button' type="button">Entrar</button>
            <button className='button' type='button'>Cadastrar</button>
        </div>
    </header>
)
}