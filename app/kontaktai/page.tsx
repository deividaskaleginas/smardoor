import { contactsPageContacts } from "@/constants/contactsPage";
import Image from "next/image";
import "./contacts.scss";

export default function Page() {
  return (
    <main className="contacts">
      <div className="contacts__container">
        <h1 className="contacts__container__title">Kontaktai</h1>
        <div className="contacts__container__dataBlock">
          <div className="contacts__container__dataBlock__requisites">
            <h2 className="contacts__container__dataBlock__requisites__blockName">
              Rekvizitai
            </h2>
            <h3 className="contacts__container__dataBlock__requisites__title">
              UAB &quot;Cargolita&quot;
            </h3>
            <p className="contacts__container__dataBlock__requisites__paragraph">
              <span className="contacts__container__dataBlock__requisites__paragraph__span">
                Įmonės kodas:
              </span>{" "}
              300994532 <br />
              <span className="contacts__container__dataBlock__requisites__paragraph__span">
                PVM mokėtojo kodas:
              </span>{" "}
              LT100004320513 <br />
              <span className="contacts__container__dataBlock__requisites__paragraph__span">
                Adresas:
              </span>{" "}
              Fabijoniškių g. 99 - 1 aukštas, LT-07101, Vilnius, Lietuva <br />
              <span className="contacts__container__dataBlock__requisites__paragraph__span">
                A/S:
              </span>{" "}
              LT907300010102656252 <br />
              <span className="contacts__container__dataBlock__requisites__paragraph__span">
                AB bankas:
              </span>{" "}
              Swedbank <br />
              <span className="contacts__container__dataBlock__requisites__paragraph__span">
                Banko kodas:
              </span>{" "}
              73000
            </p>
          </div>
          <div className="contacts__container__dataBlock__contacts">
            <h2 className="contacts__container__dataBlock__contacts__blockName">
              Susisiekite
            </h2>
            <ul className="contacts__container__dataBlock__contacts__list">
              {contactsPageContacts.map(({ icon, alt, span, data }, index) => (
                <li
                  key={index}
                  className="contacts__container__dataBlock__contacts__list__item"
                >
                  <Image src={icon} alt={alt} />
                  <p className="contacts__container__dataBlock__contacts__list__item__paragraph">
                    <span className="contacts__container__dataBlock__contacts__list__item__paragraph__span">
                      {span}
                    </span>{" "}
                    {data}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
