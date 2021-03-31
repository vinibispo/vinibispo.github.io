export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full text-center flex flex-wrap justify-center items-center flex-col">
            <h5 className="uppercase mb-6 font-bold">Social</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="https://www.facebook.com/vinibispo0/"
                  target="_blank"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                  rel="noopener"
                >
                  Facebook
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="https://www.linkedin.com/in/vinibispo16/"
                  target="_blank"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                  rel="noopener"
                >
                  Linkedin
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="https://github.com/vinibispo"
                  target="_blank"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                  rel="noopener"
                >
                  Github
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="https://instagram.com/vinibispodev"
                  target="_blank"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                  rel="noopener"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
