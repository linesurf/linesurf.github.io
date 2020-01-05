function nav() {
    // language=HTML
    document.write(`
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <a class="navbar-brand" href="#">
                <img src="assets/linesurflogo.png" width="30" height="30" class="d-inline-block align-top" alt="">
                linesurf
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="https://discord.gg/EnQQYkC">
                        <img src="assets/discord.png" height=16px class="pb-1">    
                        Discord
                    </a>
                    <a class="nav-item nav-link active" href="https://github.com/linesurf">
                        <img src="assets/ghicon.png" height=20px class="pb-1">
                        GitHub
                    </a>
                </div>
            </div>
        </nav>
    `);
}