function Footer() {
    return <footer className="page-footer deep-purple lighten-3">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text
                <a class="grey-text text-lighten-4 right" href="https://github.com/stanislav-akolzin/react_movies_project">Porject repo</a>
            </div>
        </div>
    </footer>
}

export { Footer }