var templateString = `
<style>
    .page {
        width: 18cm;
        height: 29.7cm;
    }

    body, .page {
        margin: 0;
    }

    .paragraph {
        margin-top: 16px;
        margin-bottom: 16px;
    }

    .text-box {
        font-weight: bold;
        /* border: 1px solid #000;*/
        line-height: 0.7cm;
        padding-left: 2px;
    }

    .text-box-m {
        display: inline-block;
        width: 36%;
    }

    .text-box-xxl {
        display: inline-block;
        width: 100%;
    }

    .info {
        display: inline-block;
        /* font-weight: bold; */
        font-size: 16px;
    }

    .small-text {
        font-size: 15px;
    }

    .radio-text-first-row {
        width: 95%;
        display: inline-block;
    }

    .radio-text-row {
        width: 95%;
        display: inline-block;
        margin-left: 30px;
    }

    .radio-checkbox-row {
        width: 4%;
        display: inline-block;
    }

    .radio-paragraph {
        margin-left: 0cm;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .radio {
        width: 9px;
        height: 9px;
        background-color: white;
        border: 2px solid black;
    }

    .radio.selected {
        background-color: black;
    }

    .address-container {
        display: inline-block;
        width: 73%;
        margin-left: 7px;
    }
    .destinations-container {
        width: 91.7%;
    }
    .center {
       text-align: center;
    }
</style>
<div class="page">
    <div class="center" style="font-size: 18px">DECLARAȚIE PE PROPRIE RĂSPUNDERE</div>
    <br>
    <div class="paragraph">
        <div class="info" style="margin-right: 9px;">Nume, prenume:</div>
        <div class="text-box text-box-m"> {{lastName}} {{firstName}} </div>
        <br>
        <div class="info" style="margin-right: 30px;">Data nașterii:</div>
        <div class="text-box" style="display: inline-block; width: 8%;">{{birthDay}}.{{birthMonth}}.{{birthYear}}</div>
        <br>
        <div class="info" style="display: inline-block; vertical-align: top">Adresa locuinței:</div>
            <div class="text-box text-box">
                {{city}}, {{county}}, {{streetName}}, Nr. {{streetNo}} {{building}} {{buildingEntrance}} {{floor}} {{apartmentNo}} &nbsp;
            </div>
            <div class="small-text" style="margin-left: 0px;">Se va completa adresa locuinței în care
                persoana locuiește
                în fapt, indiferent dacă este identică sau nu cu cea menționată în actul de identitate.
            </div>
    </div>
    <div class="paragraph" style="margin-top: 0.8cm;">
        <div class="info">Locul/locurile deplasării:</div>
        <div class="destinations-container">
            <div class="text-box text-box-xxl">
                {{destinations}}
            </div>
            <div class="small-text" style="margin-top: 5px;">Se vor menționa locurile în care persoana se deplasează, în
                ordinea în care aceasta intenționează să-și desfășoare traseul.
            </div>
        </div>
    </div>
    <div class="paragraph" style="margin-top: 0.8cm;">
        <div class="info">Motivul deplasării:</div>




        <div class="radio-paragraph">
            <div class="radio-checkbox-row"><div class="radio {{reason_1}}"></div></div>
            <div class="radio-text-first-row">1. interes profesional, inclusiv între locuință/gospodărie și
                locul/locurile de desfășurare a
            </div>
            <div class="radio-text-row">activității profesionale și înapoi</div>
        </div>
        <div class="radio-paragraph">
            <div class="radio-checkbox-row"><div class="radio {{reason_2}}"></div></div>
            <div class="radio-text-first-row">2. asigurarea de bunuri care acoperă necesitățile de bază ale persoanelor
                și animalelor de
            </div>
            <div class="radio-text-row">companie/domestice</div>
        </div>
        <div class="radio-paragraph">
            <div class="radio-checkbox-row"><div class="radio {{reason_3}}"></div></div>
            <div class="radio-text-first-row">3. asistență medicală care nu poate fi amânată și nici realizată de la
                distanță
            </div>
        </div>
        <div class="radio-paragraph">
            <div class="radio-checkbox-row"><div class="radio {{reason_4}}"></div></div>
            <div class="radio-text-first-row">4. motive justificate, precum îngrijirea/ însoțirea unui minor/copilului,
                asistența persoanelor
            </div>
            <div class="radio-text-row">vârstnice, bolnave sau cu dizabilități ori deces al unui membru de familie</div>
        </div>
        <div class="radio-paragraph">
            <div class="radio-checkbox-row"><div class="radio {{reason_5}}"></div></div>
            <div class="radio-text-first-row">5. activitate fizică individuală (cu excluderea oricăror activități sportive de echipă/ colective) </div>
            <div class="radio-text-row">sau pentru nevoile animalelor de companie/domestice, în apropierea locuinței, deplasare scurtă, lângă domiciliu, pentru desfășurarea de activități fizice individuale, în aer liber, cu excluderea oricărei forme de activitate sportivă colectivă;</div>
        </div>
        <div class="radio-paragraph">
            <div class="radio-checkbox-row"><div class="radio {{reason_6}}"></div></div>
            <div class="radio-text-first-row">6. realizarea de activități agricole</div>
        </div>
        <div class="radio-paragraph">
            <div class="radio-checkbox-row"><div class="radio {{reason_7}}"></div></div>
            <div class="radio-text-first-row">7. donarea de sânge, la centrele de transfuzie sanguină</div>
        </div>
        <div class="radio-paragraph">
            <div class="radio-checkbox-row"><div class="radio {{reason_8}}"></div></div>
            <div class="radio-text-first-row">8. scopuri umanitare sau de voluntariat;</div>
        </div>
        <div class="radio-paragraph">
            <div class="radio-checkbox-row"><div class="radio {{reason_9}}"></div></div>
            <div class="radio-text-first-row">9. comercializarea de produse agroalimentare (în cazul producătorilor
                agricoli)
            </div>
        </div>
        <div class="radio-paragraph">
            <div class="radio-checkbox-row"><div class="radio {{reason_10}}"></div></div>
            <div class="radio-text-first-row">10. asigurarea de bunuri necesare desfășurării activității profesionale.
            </div>
        </div>



        <div class="small-text" style="margin-left: 0cm; margin-top: 0.5cm">Se va bifa doar motivul/motivele
            deplasării dintre cele
            prevăzute în listă, nefiind permise deplasări realizate
            invocând
            alte motive decât cele prevăzute în Ordonanța Militară nr. 3/2020
        </div>
    </div>

    <div class="paragraph" style="text-align: left">
        <div style="width: 49%; display: inline-block">Data: {{date}}</div>
        <div style="width: 49%; display: inline-block">
            Semnătura
            <img style="width: 200px; height: 70px;" src="{{signatureSrc}}">
        </div>
    </div>
    <hr align=left>
    <div style="font-size: 16px;">Persoanele care au împlinit vârsta de 65 de ani completează doar pentru motivele prevăzute la punctele 1-6 și 9. Deplasarea se face în orice interval orar, pentru motivele prevăzute la pct.1, 3, 6 și 9, respectiv între orele 07.00-11.00 și 19.00-22.00, pentru motivele prevăzute la punctele 2, 4 și 5.
    </div>
</div>
`;
