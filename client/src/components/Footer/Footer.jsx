import React from "react";
import { Footer } from "flowbite-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid-full justify-between sm:flex md:grid-cols-1"></div>
        <div className="grid grid-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <Footer.Title title="About" />
            <Footer.LinkGroup col>
              <Footer.Link
                className="flex flex-row"
                href="/projects"
                target="_blank"
                rel="noopener noreferrer"
              >
                Projects
              </Footer.Link>
              <Footer.Link
                href="/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lucille Alvar
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="LET'S CONNECT" />
            <Footer.LinkGroup col>
              <Footer.Icon href="https://github.com/lucillealvar" icon={BsGithub} />
              <Footer.Icon href="https://www.linkedin.com/in/lucillealvar/" icon={BsLinkedin} />
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="LEGAL" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </Footer.Link>
              <Footer.Link
                className="flex flex-row"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms &amp; Conditions
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <Footer.Divider />
        <div className="">
          <Footer.Copyright
            href="#"
            by="Lucille's Portfolio"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
