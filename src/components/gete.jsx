export default function Footer() {
    return(
        <footer>
            <section className="flex">
                <article>
                    <figure></figure>
                    <article></article>
                </article>
                <article>
                    <h5>Navigation</h5>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>  
                         <li><Link to="/contact">Contact</Link></li>   
                    </ul>
                </article>
                <article>
                     <h5>Services</h5>
                    <ul>
                        <li><Link to="/services">Executive Coaching</Link></li>
                        <li><Link to="/services">Keynote Speaking</Link></li>
                        <li><Link to="/services">Leadership Programs</Link></li> 
                    </ul>
                </article>
                
                <article>
                    <article>
                        <h5>Leadership Podcast</h5>
                        <div>
                            <figure></figure>
                            <article></article>
                        </div>
                    </article>
                    <article>
                        <h5>Newsletter</h5>
                        <div>
                            <input type="email" />
                            <button type="submit">Subscribe</button>
                        </div>
                    </article>
                </article>



            </section>
            <section className="border-t-2">
                <P>&copy;Dr. James O. Rodgers. All rights reserved</P>
            </section>
        </footer>
    )

    
}