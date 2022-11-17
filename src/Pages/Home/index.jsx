import HeroImage from'../../assets/hero-image.png'
import './styles.css'
export const Home = () =>{
    return(
        <div className="main">
            <div className="text">
                <h1 className='title'>Implemente</h1>
                <h1>o seu futuro global agora!</h1>
                <p>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, 
                    evoluindo em comunidade com os melhores experts.
                </p>
                
                <div className='outlineBtn'>
                    <button type="button">Começar agora</button>
                </div> 
            </div>

        <img src={HeroImage} alt="Hero logo" />
        </div>
    )
}