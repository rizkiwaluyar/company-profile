export default function Footer() {
  return (
    <footer>
      {/* parent */}
      <div className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3>NEXUS</h3>
          <p>
            Redefining the standard of excellence in strategic consulting and digital transformation.
            Empowering brands since 2013.
          </p>
        </div>

        <div>
          <h3>COMPANY</h3>
          <ul>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>News Room</li>
          </ul>
        </div>

        <div>
          <h3>SERVICES</h3>
          <ul>
            <li>Strategy Consulting</li>
            <li>Digital Transformation</li>
            <li>Data Analytics</li>
            <li>Cloud Solutions</li>
          </ul>
        </div>

        <div>
          <h3>CONTACT</h3>
          <ul>
            <li>Contact Us</li>
            <li>Request a Consultation</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
