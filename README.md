# Team2 Project Backend

Aplicatie de programat la vaccinare

Cerinte: {

    O pagina de autentificare unde te poți conecta ca cetățean sau ca centru de vaccinare. Datele de conectare o sa fie transmise în plain text, nu o sa fie incriptate. Exista opțiunea de register și de login. Trebuie sa fie făcute check-uri ca datele introduse sunt corecte(pentru numere de telefon și adrese de email) și ca utilizatorul nu este deja înregistrat.

    Cerinte cetatean: {
        Cand te inregistrezi trebuie sa completezi următoarele câmpuri: nume, cnp, număr de telefon, adresa, și tipul de cetățean(adică din ce categorie este) email și parola.
        Pe pagina principala o sa iti apara toate centrele de vaccinare din țară. Le poți filtra prin 3 filtre: “județ, oraș, număr de persoana pe lista de așteptare(e un range) și tip de vaccin(poți alege mai multe în același timp)”. Tot pe pagina asta apare si un buton de profil.
        Centrelor le apare numele, locația, tipul vaccinului și numărul de persoane pe lista de așteptare. Ca sa te înscrii pe lista sau direct la vaccinare apeși pe un buton de langa centru care te redirectioneaza pe alta pagina de pe care poți să-ți alegi ziua și ora când sa te programezi, zilele disponibile sunt alese de către centrul de vaccinare. Atunci cand programezi pentru vaccin te programezi și pentru rapel, perioada dintre vaccinari diferă de la vaccin la vaccin(21 pentru pfizer, 28 pentru moderna, etc).
        Cand se apasa pe butonul de profil utilizatorul este directionat pe o pagina unde poate sa vada centrele la care este pe lista de așteptare(poate sa fie la maxim unul), programarile trecute și programări curente(pe care le poate modifica sau anula) care pot fi de tip inițial sau rapel. Tot pe pagina asta poate sa modifice detaliile profilului. Tot aici exista un buton de delete profile.
    }

    Cerințe centru vaccinare: {
        Cand te inregistrezi trebuie sa completezi următoarele câmpuri: denumire, locație, tip vaccin.
        Pe pagina principala o sa fie o lista cu toate persoanele de pe lista de as așteptare, dacă se da click pe ele ele o sa poate sa se programeze atunci cand intra pe cont. Tot pe pagina asta exista butonul de profil.
        Cand se apasa pe butonul de profil administratorul centrului este redirectionat pe o pagina unde îi apar toate persoanele care s-au programat(care au și terminat cu vaccinurile), numărul de locuri libere și zilele și orele în care sunt locuri libere(le poate modifica). Tot pe pagina asta poate sa modifice datele centrului(denumire, locație, tip vaccin). Tot aici exista un buton de delete-profile.
    Cand este șters un centru toate persoanele care erau pe lista de așteptare acolo sau aveau programari o sa aiba programarile șterse și o sa fie scoși de pe lista de așteptare.
    }
}
