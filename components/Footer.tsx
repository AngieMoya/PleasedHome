import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className="flex items-center justify-between p-8">
      <div className="flex flex-col">
        <p className="pb-4 text-sm font-extrabold text-primary-green">PlasedHome</p>
        <span className="text-xs text-gray-500"> &copy; 2024 PleasedHome</span>
      </div>
      <div className="flex w-52 justify-between">
        <FontAwesomeIcon icon={faXTwitter} size="xl" className="text-primary-green" />
        <FontAwesomeIcon icon={faFacebookF} size="xl" className="text-primary-green" />
        <FontAwesomeIcon icon={faInstagram} size="xl" className="text-primary-green" />
      </div>
    </footer>
  );
}
