import Link from "next/link";
import Image from "next/image";
import MobileBtn from "./MobileBtn";
import Youtube from "./logos/Youtube";
import Instagram from "./logos/Instagram";
import Facebook from "./logos/Facebook";
import Linkedin from "./logos/Linkedin";
import Rede from "./logos/Rede";
import Phone from "./Phone";
import LinkBtn from "../navbar/links/LinkBtn";
import LinkBtnLg from "../navbar/links/LinkBtnLg";
import LinkBtnLgDrop from "../navbar/links/LinkBtnLgDrop";

const Navbar = () => {
  return (
    <nav className="bg-white z-30 shadow-md justify-center top-0 fixed inset-x-0">
      <div className="h-10 w-full bg-yellow-600 flex mb-2 px-4">
        <div className="flex container mx-auto justify-between">
          <div className="flex items-center space-x-4">
            <Instagram />
            <Youtube />
            <Facebook />
            <Linkedin />
          </div>
          <Phone />
        </div>
      </div>
      <div className="max-w-5xl px-0 mx-auto">
        <div className="flex justify-between pr-4">
          <div className="flex justify-between items-center space-x-6">
            <Rede />

            <div className="hidden md:flex space-x-6 justify-around">
              <LinkBtnLg link={"/"} label={"Home"} />

              {/* Dropdown - Quem Somos */}
              <nav className="relative z-20 flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:flex-row">
                <div className="relative group">
                  <button className="flex flex-row text-left hover:font-semibold items-center rounded-lg md:w-full md:inline md:mt-0 md:ml-0 focus:outline-none">
                    <Link href="/quem-somos">
                      <a className="hover:text-green-700 px-4">Quem Somos</a>
                    </Link>
                  </button>
                  <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                    <div className="pt-2 rounded-md shadow-md bg-white w-36">
                      <div className="">
                        <LinkBtnLgDrop
                          link={"/carta-de-principios"}
                          label={"Carta de Princípios"}
                        />
                        <LinkBtnLgDrop
                          link={"/conselho-internacional"}
                          label={"Conselho Internacional"}
                        />
                        <LinkBtnLgDrop
                          link={"/conselho-diretor"}
                          label={"Conselho Diretor"}
                        />
                        <LinkBtnLgDrop
                          link={"/secretaria-tecnica"}
                          label={"Secretaria Técnica"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              {/*  */}

              <LinkBtnLg link={"#"} label={"Campanhas"} />
              <LinkBtnLg link={"/teste-api"} label={"Arquivos"} />
              <LinkBtnLg link={"/blog"} label={"Blog"} />
              <LinkBtnLg link={"/contact"} label={"Contatos"} />
            </div>
          </div>

          {/* Mobile Button */}
          <MobileBtn />
        </div>
        {/* Menu Mobile */}
        <div
          id="mobile-menu"
          className="hidden md:hidden py-4 bg-yellow-500 w-full"
        >
          {/* Home */}
          <div className="text-center font-bold">
            <LinkBtn link={"/"} label={"Home"} />
          </div>
          {/*  */}

          <div className="relative group">
            <button className="flex mx-auto rounded-lg md:w-full md:inline md:mt-0 md:ml-0 focus:outline-none">
              <a className="hover:text-green-700 px-4">Quem Somos</a>
            </button>
            <div className="absolute z-10 hidden mt-4 bg-gray-50 group-hover:block w-full rounded-b-md">
              <div className=" rounded-md shadow-lg w-full py-4 flex justify-center">
                <div className="flex flex-col justify-center items-center">
                  <LinkBtn link={"/quem-somos"} label={"Quem Somos"} />
                  <LinkBtn link={"/#"} label={"Carta de Princípios"} />
                  <LinkBtn
                    link={"/conselho-internacional"}
                    label={"Conselho Internacional"}
                  />
                  <LinkBtn
                    link={"/conselho-diretor"}
                    label={"Conselho Diretor"}
                  />
                  <LinkBtn
                    link={"/secretaria-tecnica"}
                    label={"Secretaria Técnica"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

if (typeof window !== "undefined") {
  const btn = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}
