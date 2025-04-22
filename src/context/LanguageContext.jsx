import React, { createContext, useMemo } from "react";

const translationsData = {
    et: {
        navigation: {
            home: "Avaleht",
            contact: "Kontakt",
            callNow: "Helista",
        },
        home: {
            hero: {
                title: "Kvaliteetne saematerjal Märjamaal",
                subtitle: "Ligi 30 aastat kogemust. Kohalik tootja, kiire tarne, paindlikud lahendused.",
                requestQuote: "Küsi pakkumist",
                callNow: "Helista kohe"
            },
            servicesTitle: "Meie Teenused",
            servicesDescription: "Pakume laia valikut puidutöötlemise teenuseid vastavalt teie vajadustele, sealhulgas kvaliteetset õhukuiva materjali:",
            examplesTitle: "Tehtud Tööde Näited",
            examplesDescription: "Oleme aidanud paljusid kliente nende ehitus- ja renoveerimisprojektides.",
            aboutTitle: "Meist",
            aboutIntro: "Simeli Saeveski OÜ on Märjamaal tegutsev puidutöötlemisettevõte, mille juured ulatuvad ligi kolme aastakümne taha.",
            aboutOwner: "Ettevõtte omanik Siim Soosaar omab pikaajalist kogemust puiduvaldkonnas, tagades asjatundliku teeninduse ja kvaliteetse materjali.",
            aboutFocus: "Keskendume eelkõige kohalikele väikeklientidele, pakkudes paindlikke lahendusi ja konkurentsivõimelist hinda.",
            aboutArticleMention: "Nagu mainitud ka Maa Elu artiklis (12.09.2024), on meie eesmärk pakkuda stabiilset kvaliteeti ja usaldusväärset partnerlust.",
            contactLinkText: "Võta meiega ühendust",
            testimonialsTitle: "Klientide Tagasiside",
            faqTitle: "Korduma Kippuvad Küsimused",
            ctaButton: "Küsi personaalset pakkumist",
            featureSectionTitle: "Miks valida Simeli Saeveski?",
            feature1Title: "Kodumaine kvaliteet",
            feature1Desc: "Kasutame kohalikku toorainet ja tagame parima kvaliteedi.",
            feature2Title: "Paindlikud lahendused",
            feature2Desc: "Täidame eritellimusi vastavalt teie joonistele ja mõõtudele.",
            feature3Title: "Transport kokkuleppel",
            feature3Desc: "Toimetame materjalid mugavalt teie objektile.",
            feature4Title: "Ligi 30a Kogemust",
            feature4Desc: "Pikaajaline kogemus puidutöötlemises tagab asjatundliku nõu.",
            feature5Title: "Mugav Asukoht",
            feature5Desc: "Asub Märjamaal – säästa aega ja kütust võrreldes linnasõiduga.",
        },
        footer: {
            copyright: `© ${new Date().getFullYear()} Simeli Saeveski OÜ, Märjamaa. Kõik õigused kaitstud.`,
            privacyPolicy: "Privaatsuspoliitika",
            termsOfService: "Kasutustingimused",
        },
        contact: {
            metaTitle: "Kontakt | Simeli Saeveski | Saematerjal Märjamaal",
            metaDescription: "Võtke ühendust Simeli Saeveskiga Märjamaal päringute, tellimuste või konsultatsiooni saamiseks. Asume Orgita tee 11.",
            title: "Võta meiega ühendust",
            subtitle: "Ootame teie küsimusi ja päringuid!",
            formTitle: "Saada meile sõnum",
            infoTitle: "Kontaktandmed ja Asukoht",
            locationInfo: "Asume mugavalt Märjamaal, Raplamaal – lihtne ligipääs nii kohalikele kui kaugemalt tulijatele."
        },
        contactForm: {
            nameLabel: "Teie nimi",
            nameRequired: "Nimi on kohustuslik",
            emailLabel: "E-posti aadress",
            emailRequired: "E-post on kohustuslik",
            emailInvalid: "Palun sisestage korrektne e-posti aadress",
            phoneLabel: "Telefoninumber (valikuline)",
            subjectLabel: "Teema (valikuline)",
            messageLabel: "Sõnum",
            messageRequired: "Sõnum on kohustuslik",
            messageMinLength: "Sõnum peab olema vähemalt 10 tähemärki pikk",
            sendButton: "Saada sõnum",
            sending: "Saadan...",
            successMessage: "Täname! Teie sõnum on saadetud.",
            errorMessage: "Vabandust, sõnumi saatmine ebaõnnestus. Palun proovige hiljem uuesti."
        },
        notFound: {
            title: "404 - Lehte ei leitud",
            message: "Vabandust, otsitud lehte ei eksisteeri või see on teisaldatud.",
            button: "Tagasi avalehele"
        }
    },
};

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const language = "et";
    const translations = useMemo(() => translationsData[language], [language]);

    const value = useMemo(() => ({
        language,
        translations
    }), [language, translations]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
