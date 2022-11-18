import'./loginStyles.css'
import pwdLogo from '../../assets/password.png'
import emailLogo from '../../assets/email.png'
export const Login = () =>{
    return (
        <div className="hero">
            <h1 className='txt'>
                A plataforma para você aprender com experts,
                 dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </h1>
            <div className="login">
                <div className="titulo">
                    <h1>Já tem cadastro?</h1>
                    <p>Faça seu login e make the change._</p>
                </div>
                <div className="inputBtn">
                <span className='icon'>
                    <img src={emailLogo} alt="png email" />
                    <input type="email" placeholder="E-mail" />
                </span>
                <span className='icon'>
                    <img src={pwdLogo} alt="logo png" />
                    <input type="password" placeholder="Password" />
                </span>
                
                <span className='outline'>
                    <button type="submit">Entrar</button>
                </span>
                </div>
                <div className="link">
                    <a href="/" className='forgetpwd'>Esqueci minha senha</a>
                    <a href="#">Criar conta</a>
                </div>
            </div>
        </div>
    )
}