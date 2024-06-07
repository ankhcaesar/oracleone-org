import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)" }} >
        <div className="redes">
            <a href="https://www.facebook.com/JulioCesaron/">
                <img src="/img/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/juliocesaroniv/">
                <img src="/img/instagram.png" alt="Instagram" />
            </a>

        </div>

        <div className="me">
        <img src="./img/me.png" alt="Logo julio cesar" />
        <strong>Desarollado por </strong>
        <strong>Julio  Cesar Niveyro</strong>
        </div>
        

    </footer>

}

export default Footer