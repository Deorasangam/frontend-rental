const Footer = () => {
  return (
    <div className="bg-purple-600  text-white ">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-purple-400">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-purple-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Safety Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-purple-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-purple-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 StayEase. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
