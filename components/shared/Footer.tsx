import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/eventique.png"
            alt="logo main"
            width={28}
            height={28}
          />
        </Link>

        <p>© 2025 Eventique. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
