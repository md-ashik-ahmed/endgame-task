import logo from "../../assets/apna-svg.svg"

const Footer = () => {
    return (
        <div>
           <footer className="footer max-w-screen-xl p-10 bg-gray-200 mt-10 rounded text-base-content" data-aos="flip-down">
  <div> 
    <img src={logo} alt="" />
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">My College</a> 
    <a className="link link-hover">Admission</a> 
    <a className="link link-hover">College</a> 
  
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
   
  </div> 
  <div>
    <span className="footer-title">Contact</span> 
    <a className="link link-hover">Email : info@gmail.com</a> 
    <a className="link link-hover">Phone : 0151818181818</a> 
    <a className="link link-hover">Adrress : Rajshahi Bangladesh</a>
  </div>
</footer>
        </div>
    );
};

export default Footer;