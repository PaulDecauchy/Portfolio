import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

function ContactInfo() {
    return (
      <div className="flex flex-col space-y-6">
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-700 hover:text-gray-900"
        >
          <FaGithub className="w-6 h-6 mr-1" />
          <span>Mon Github</span>
        </a>
        <a
          href="mailto:your-email@example.com"
          className="flex items-center text-gray-700 hover:text-gray-900"
        >
          <FaEnvelope className="w-6 h-6 mr-1" />
          <span>Mon email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-700 hover:text-gray-900"
        >
          <FaLinkedin className="w-6 h-6 mr-1" />
          <span>Mon Linkedin</span>
        </a>
      </div>
    );
  }
  
  

export default ContactInfo;
