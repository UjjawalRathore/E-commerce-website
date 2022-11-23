const createNav = () => {
    let nav = document.querySelector('.navbar')

    nav.innerHTML = `
    <div class="nav">
            <img src="img/logo-dark.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand,product">
                    <button class="search-btn">search</button>
                    <a href="#"><img src="img/user.png" alt=""></a>
                    <a href="#"><img src="img/cart.png" alt=""></a>
                </div>
                
            </div>
        </div>
        <ul class="links-containers">
            <li class="link-items"><a href="#" class="link">Home</a></li>
            <li class="link-items"><a href="#" class="link">Women</a></li>
            <li class="link-items"><a href="#" class="link">Men</a></li>
            <li class="link-items"><a href="#" class="link">Kids</a></li>
            <li class="link-items"><a href="#" class="link">Accessories</a></li>
        </ul>
    `;
}
createNav();