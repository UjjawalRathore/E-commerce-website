const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    
    <div class="footer-content">
    <img src="img/logo-dark.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Men</li>
            <li><a href="#" class="footer-link">T-shirts</a></li>
            <li><a href="#" class="footer-link">Sweatshirts</a></li>
            <li><a href="#" class="footer-link">Shirts</a></li>
            <li><a href="#" class="footer-link">Jeans</a></li>
            <li><a href="#" class="footer-link">Trousers</a></li>
            <li><a href="#" class="footer-link">Shoes</a></li>
            <li><a href="#" class="footer-link">Casuals</a></li>
            <li><a href="#" class="footer-link">Formals</a></li>
            <li><a href="#" class="footer-link">Sports</a></li>
            <li><a href="#" class="footer-link">Watches</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">Women</li>
            <li><a href="#" class="footer-link">T-shirts</a></li>
            <li><a href="#" class="footer-link">Sweatshirts</a></li>
            <li><a href="#" class="footer-link">Shirts</a></li>
            <li><a href="#" class="footer-link">Jeans</a></li>
            <li><a href="#" class="footer-link">Trousers</a></li>
            <li><a href="#" class="footer-link">Shoes</a></li>
            <li><a href="#" class="footer-link">Casuals</a></li>
            <li><a href="#" class="footer-link">Formals</a></li>
            <li><a href="#" class="footer-link">Sports</a></li>
            <li><a href="#" class="footer-link">Watches</a></li>
        </ul>
    </div>
    
</div>
<p class="footer-title">About Company</p>
    <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dignissimos, assumenda impedit incidunt a architecto velit. Natus exercitationem commodi, sint nostrum tempora minima fugit atque delectus. Repellat voluptatibus temporibus, quidem voluptatum recusandae ipsum possimus. Est quam quo nemo tenetur quis porro dignissimos. Eos similique cumque enim animi deserunt neque quia dolore at iste recusandae nisi delectus iure dolor dolorem, totam odit consectetur qui magni magnam assumenda odio eum eaque cum maiores? Rerum itaque soluta dolorem unde quidem ipsam quis, vel temporibus cum. Reiciendis ut esse sed alias vero voluptatum harum minima obcaecati dolor, blanditiis eveniet, perferendis saepe consequatur accusamus aliquam!</p>
    <p class="info">Support Emails - lemmino@clothing.com,customersupport@clothing.com</p>
    <p class="info">Telephone - 180 00 00 005,180 00 00 007</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy policy</a>
        </div>
        <div>
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Twitter</a>
        </div>
    </div>
    <p class="footer-credit">Clothing,Best apparels online store</p>

    `;
}

createFooter();