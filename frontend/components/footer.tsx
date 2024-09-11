import Link from "next/link";
const dataFooter = [
  {
    id: 1,
    name: "About Us",
    link: "",
  },
  {
    id: 2,
    name: "About Us",
    link: "",
  },
  {
    id: 3,
    name: "About Us",
    link: "",
  },
  {
    id: 4,
    name: "Privacy Policy",
    link: "",
  },
];

const Footer = () => {
  return (
    <footer className="mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p>
            <span>FlavorWaves </span>
            E-commerce
          </p>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {dataFooter.map((data) => (
              <li key={data.id}>
                <Link href={data.link} className="hover:underline me-4 md:me-6">
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
