Date : 26.07.2022
INFO :
    change titles/description/photo + create register page
    adjust some things
    next:
        Client interface
            - When logged it, replace login button with logout
            - Add new page of list of medicamente XD
            - Instead of contact us/about us maybe create a page for "my doctor"
            - Home should remain
        Doctor interface
            - When logged it, replace login button with logout
            - Delete home + about + contact us page
            - Add "my clients" page
            - Add "Add a review about a medicament"
        Administrator interface
            - remove home/about/contact
            - replace login with logout
            - add "modify user" page
            - add "modify product" page
            - ?


Date 27.07.2022
INFO:
    CLIENT INTERFACE MADE (not the best and not as I expted)
    next:
        Client interface
            - modify tests style
        Doctor interface
            - When logged it, replace login button with logout
            - Delete home + about + contact us page
            - Add "my clients" page
            - Add "Add a review about a medicament"
        Administrator interface
            - remove home/about/contact
            - replace login with logout
            - add "modify user" page
            - add "modify product" page
            - ?

Date 29.07.2022
INFO:
    CLIENT INTERFACE MADE
    DOCTOR INTERFACE MADE
    next:
        Client interface
            - modify tests style
        Doctor interface
            - modify tests style
        Administrator interface
            - remove home/about/contact
            - replace login with logout
            - add "modify user" page
            - add "modify product" page
            - ?

DATE 31.07.2022
INFO:
    CLIENT INTERFACE MADE
    DOCTOR INTERFACE MADE
    next:
        Client interface
            - modify tests style
        Doctor interface
            - modify tests style
        Administrator interface
            - add med nearly implemented
            - add "modify user" page
            - add "modify product" page
            - ?

DATE 01.08.2022
INFO:
    ADJUST ADMIN PAGE -> ALL PAGE WERE CREATED BUT THERE IS NO FUNCTIONALITY YET
    Correcting some warnings about components that are not used.
    next:
        Client interface
            - modify tests style
        Doctor interface
            - modify tests style
        Administrator interface
            - create functionality 
            - !! time to start backend server !!

DATE 04.08.2022
INFO:
    Loggin connected with database
    Register connected with database
    Tried to show different things on home (Worked)
    NEXT:
        - styling
        - switching pages
        - page permission
        - admin page (TO DO)
        - fullfill database
        - bugs if found
        - clint/doctor/adm connection with database + functionality
        
DATE 06.08.2022
INFO:
    Medicine page of user done
    mydoctor should be take a look how toget info from that currentUser list
    NEXT:
        - styling
        - switching pages
        - page permission
        - admin page (TO DO)
        - fullfill database
        - bugs if found
        - clint/doctor/adm connection with database + functionalit

DATE 08.08.2022:
    myDoctor page nearly done (maybe more style should be added)
    solved bug on myDoctor page
    NEXT:
        - styling
        - switching pages
        - page permission
        - admin page (TO DO)
        - fullfill database
        - bugs if found
        - clint/doctor/adm connection with database + functionalit


admin page - crud to be done - review sa fie scos
    - add / edit / delete / readt client-doctor done
    - add / edit / delete / read meds done
    - add / delete / read form done
    - add / read / delete App done
    next:
        Solve problem with input
de adaugat o pagina noua pt doctors - unde apar toti doctori - DONE
in loc my clients -  sa fie my schedule - DONE
in loc add review - sa fie clients in care doctorul poate adauga un medicament mai potriv pentru fiecare pacient. - De inlocuic cu baza de date useri + de facut reviewPage - DONE 
    - de modificat user database sa aiba alti parametri - DONE
sa se poata adauga cu email/facebook etc  - m am uitat, google este app implementat, 
    - google done, primesc inapoi google profile-ul - de intrebat cum as putea totusi sa l inregistrez, fara parola ? sa i dau register doar cu email + parola dupa ce google 
        trimite inapoi success ? Sign in ar trebuii sa fie doar pe register? sau sa fie pus si pe login ?
    - facebook done, dar avem ceva erori care nu afecteaza neaparat ( noi primim oricum credentialele de la facebook) -  aici aceasi intreabre ca la google, cum salvez 
        ce trimite facebook ul inapoi ? primesc doar nume si cam atat, nici macar email :/ - Sa fie si la Login optiunea asta?

la frontend de schimbat textele alea inutile

poze - se salveaza pe un bucket aws, e 5GB free, dupa e contra cost (nu stiu cat) dar nu cred ca o sa folosesc mai mult de 5GB :)
        - din 10 sept o sa activez contu si o sa fac setup (am un card separat, in care nu prea am sursa se venit, si sa nu mi intre automat in contra-cost)

PROBLEME:
    - Problema cand se incearca intrarea pe alta pagina (de ex daca esti admin nu ai voie sa mergi pe pagina de client, cand se intampla asta, te redirectioneaza pe pagina principala
        a rolului care esti doar ca dupa se blocheaza, is revine la un refresh)
    - Poze - Se rezolva
    - input nu merge asa cum ar trebuii sa mearga
    - Google / Facebook login cum sa salvez info urile

next:
    schedule de facut
    frontend
    chat btw doctor & client
    pop-uri de erori (la login/logout - delete ceva sau add)
    animations when changin pages/scrolling