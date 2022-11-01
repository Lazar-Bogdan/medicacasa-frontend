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

la frontend de schimbat textele alea inutile - ND

poze - se salveaza pe un bucket aws, e 5GB free, dupa e contra cost (nu stiu cat) dar nu cred ca o sa folosesc mai mult de 5GB :)
        - din 10 sept o sa activez contu si o sa fac setup (am un card separat, in care nu prea am sursa se venit, si sa nu mi intre automat in contra-cost)

PROBLEME:
    - Problema cand se incearca intrarea pe alta pagina (de ex daca esti admin nu ai voie sa mergi pe pagina de client, cand se intampla asta, te redirectioneaza pe pagina principala
        a rolului care esti doar ca dupa se blocheaza, is revine la un refresh) - De scris maine
    - Poze - Se rezolva - TO BE DONE
    - input nu merge asa cum ar trebuii sa mearga - DONE 
    - Google / Facebook login cum sa salvez info urile - DONE

next 29.09.2022:
    de adus aminte problema cu schimbarea paginii si se blocheaza
    de scos afisarea parolei in crud
    schedule de facut
        -la schedule sa fie un calendar in care poate sa vada ce program are maine/peste o sapt/ o luna etc
    frontend
la google/facebook, se trimite direct pe site, nu salvezi parola sau ceva, daca ai nevoie poti sa iei informatii
    chat btw doctor & client
    email la form
    doctor info page
    pop-uri de erori (la login/logout - delete ceva sau add)
    scheletu pentru mobile app - 
        - profile
        - add something 
        - chat
    animations when changin pages/scrolling

Marti 30.08.2022:
    de scos afisarea parolei in crud
    schedule de facut
        -la schedule sa fie un calendar in care poate sa vada ce program are maine/peste o sapt/ o luna etc
Miercuri 31.08.2022:
    de continuat cu calendarul ala de vazut de ce raspunde asa greu la comenzi (daca reusesti daca nu lasa ca improvment) - DONE
    de mai vazut de ce nu se pune zilele cum trebuie (poate de gasit un nou algoritm) - NOTDONE, de gasit un algoritm mai bun pt numele zilelor

Joi 01.09.2022
    la google/facebook, se trimite direct pe site, nu salvezi parola sau ceva, daca ai nevoie poti sa iei informatii - DONE
    fix la my doctor + added oportunity to add new subscription btw doctor & client - DONE
    chat btw doctor & client
    email la form - DONE
    de mai vazut faza cu input
Vineri 02.09.2022
    doctor info page
    pop-uri de erori (la login/logout - delete ceva sau add)
    de mai vazut faza cu freeze la pagina
Sambata 03.09.2022 - 12.09.2022 
    scheletu pentru mobile app - 
        - profile
        - add something 
        - chat
    animations when changin pages/scrolling

recapitulare 01.09.2022

    DONE :
        - de scos afisarea parolei in crud - DONE
        - schedule de facut - DONE
        - la schedule sa fie un calendar in care poate sa vada ce program are maine/peste o sapt/ o luna etc - DONE
        - de continuat cu calendarul ala de vazut de ce raspunde asa greu la comenzi (daca reusesti daca nu lasa ca improvment) - DONE
        - la google/facebook, se trimite direct pe site, nu salvezi parola sau ceva, daca ai nevoie poti sa iei informatii - DONE
        - trimite email la from cu emailjs - DONE
        - implement client chat - DONE
        - doctor part chat - DONE
        - ceva probleme in addDoctor, nu stiu de ce nu vrea sa dea add in cometchat ( poate aceasi chestie se intampla si pt addClient) - DONE
        - de mai vazut faza cu input - DONE
        - pop-uri de erori (la login/logout - delete ceva sau add) - inceput de mai modificat la style + de adaugare onClick sau ceva de genu la el - DONE
        - de mai vazut faza cu freeze la pagina - DONE (daca mai apar probleme pe viitor (n ar mai trebuii))
        - de refactorizat  + rezolvat probleme la add appointment ( s a schimbat zilele + luniile) un algoritm nou ceva - DONE
        - myschedule, ultima oara nu a mers, de revizuit - DONE
        26.09.2022
        - poze done:
            - SE STOCHEAZA POZA - DONE
        -mobile:
            - login - DONE
            - se salveaza id-ul userului - DONE
                - pentru client s a facut profile - EDIT / ADD PROFILE - DONE
                - pentru doctor de implementat doar EDIT - DONE
                - de impartit in 2 parti, pagini pt user, pagini pt doctor - DONE
                    -pagina pentru doctor -
                        -am diferentiat login ul, sa se aleaga daca esti doctor sau user - DONE
                        -la doctor de vazut cum sa ai 2 screen ul ca la client - DONE
                        -profile ramane la fel - DONE
                        - de modificat catre cine se trimite baza de date - DONE
            - client page 
                - message page - DONE - de inlocuit email cu cel de la asyncStorage
            - doctor page
                - message page DONE
             - tab de profile
                -edit profile - implementat doar asa crud, inca nu e functional - DONE
                    - adaugat 2 input uri pt email si username - poza choose DONE
                -add info - ar fii frumos sa se poata adauga si la google "health" - de vazut - pagina create - DONE
                    -add pulse
                    -greutate
                    -inaltime
                - pop up de eroare la log - DONE
        -pop ul dupa ce se adauga info corect pt user - DONE
        - piesa de pulse stricat, luat una noua, pare ca da ceva ouput - DONE
        - toate piese sunt aici - DONE
        - bug gasit in partea de client chat - DONE
        -de vazut cum adaugi prieteni pe cometChat ( acuma vede toti useri) - DONE, am reusit sa adaug priteni din comanda
            - acum de pus specific, adica de luat uid de la doctor + uid de la client si sa se trimita
                aici se poate face un fetch pt doctor si una pt client si de acolo sa se trimita uid ul - DONE
        -Poze - Se rezolva - aws cloud - ceva access forbidden - DONE
            - SE ADAUGA LINK CATRE POZA PE MONGO - ONGOING
                - medicine/user/doctor from admin - DONE - ONLY JPEG PHOTO CAN BE ADDED
                - register - DONE 
                - poate de adaugat o info ca doar jpeg se poate ?

    not DONE:
        -scheletu pentru mobile app - ONGOING
            - message btw doctor and client - ONGOING
            - doua tab-uri jos cu chat / profile - 
                        -edit profile sa fie pentru descriere etc - ONGOING - sau maybe not ?
                - legat de chat de vazut cum sa fie async totul, poate cu socket.io ? de vazut - ONGOING
            - la tab ul dechat sa fie chat ul efectiv (cometchat ? streamchat.io ?) - ideal ar fii sa ti faci mecanism de chat si 
                sa   fie bagat in mongodb - ONGOING - baza de date pentru message creata, trebuie sa vad ce fite face useEffectul 
                ala
                - socket.io ? functioneaza sa trimita notificari chiar si daca aplicatia este closed ? ONGOING
                -  de vazut cum se implementeaza asta - ONGOING
                - client page 
                    - message channel ONGOING
                - doctor page 
                    - la edit sa se editeze first desc si second desc
                    - message channel ONGOING
        -poate un pop-ul la momentul intrarii in site / logout 
        -animations when changin pages/scrolling
        -style popups
        -doctor info page
    TO-DO:
        -frontent pentru chat (backend ul ar trebuii sa fie ok)
        -de schimbat din axios in call uri normale. ex - UserService -> getAllUsers.
        -style
        -hardware

    - IMPROVMENT:
        -la fiecare edit sa fie valoarea si sa se poata edita ( momentan e doar valorea da nu poti edita)
        -la addAppointment , sa fie initializate year + month, sa apara un pop-up la response negativ de la server (alert mai bine)
        -la mySchedule, de gasit un argoritm mai bun pentru numele zilelor ( cand trebuie nu mi da exact numele zii care trebuie)
        -de modificat mesajul la emailjs cand se trimite catre user
        -de modificat chestii hardcoded ( de ex myDoctor se trimite email hardcoded)
        -remove axios, use something else that is not a library. (use the normal call);
            - error on getAllDoctors - to be checked 
                - error on add client/doctor is related to cometChat, progress DONE
                - error on deleting user / message still unknown, wip
        
    - HARDWARE IMPLEMENTATION - ONGOING
        - de testat placa wifi
        - de pus LCD urile si testat - DONE
        - de pus asamblu impreuna - WIP

    INTREBARI:
        -unde sa fie pop ul ? pana acum doar login/register/contact) la admin ? Se merita? - DONE
        -intrebari legat de solve freeze - nu mai e nevoie, s-a rezolvat - DONE
        -ceva informatii legat de react-native ? cum sa dau switch pe screen-uri. (nu am exp cu react-native si inca invat) - de vazut link salvat ( de luat ca paramtru )
