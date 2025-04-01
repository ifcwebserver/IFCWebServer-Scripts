<HTML>

<HEAD>

<META http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<TITLE>Speedport W 303 V Konfigurationsprogramm</TITLE>


<script language="JavaScript">
<!--

//******************************************************************************
//* Programm =    Simulation einer Konfigurations-Oberfläche
var sim_autor =   "J. Huber"
var sim_version = "2008-05-13"
//******************************************************************************
// *****************************************************************************
// Folgende  g e r ?t e s p e z i f i s c h e n  Werte müssen
// von der Tk-Anlage bzw. Router zur Verfügung gestellt werden
// *****************************************************************************
// Produktname, wird auch als Routername im Netzwerk verwendet (Leerzeichen!?)
  var prodname = "Speedport_W_303V_Typ_B";

// URL für Firmware-Update
  var url_fwupd = "http://www.t-home.de/downloads";
  
// URL für OnlineControl-Download
  var url_ocontrol = "";
  
// URL für Kundencenter-VoIP
  var url_voip1 = "http://www.t-online.de/service/redir/ata_csc_anmeldung.htm";
  var url_voip2 = "http://www.t-online.de/service/redir/ata_csc_callsettings.htm";
  var url_voip3 = "http://www.t-online.de/service/redir/ata_emailadresse.htm";
  var url_voip4 = "http://www.t-online.de/service/redir/ata_passwort.htm";
  
// URL für VoIP-AWS
  var url_awsvoip = "https://telweb.t-online.de/telcenter/weiterleitungInitial.do?navigation=true";

// URL für AWS des Festnetz-Anschlusses
  var url_awsfnetz = "http://www.t-home.de/anrufweiterschaltung";
// Vordefiniert: Port-Weiterleitungs-Regeln
  var pw_vor = new Array("Web-Server","FTP-Server","E-Mail-Server","Telnet-Server");
  var pw_vortcp = new Array("80","21","25,110","23");
  var pw_vorudp = new Array("","","","");

// Vordefiniert: Port-Umleitungs-Regeln
  var pu_vor = new Array("Zweiter Web-Server");
  var pu_vorpubltcp = new Array("8080");
  var pu_vorpubludp = new Array("");
  var pu_vorprivtcp = new Array("80");
  var pu_vorprivudp = new Array("");

// Vordefiniert: Port-Öffnungs-Regeln
  var po_vor = new Array("Dialpad","ICU II");
  var po_vortrigport = new Array("7175","2019");
  var po_vortrigprot = new Array(0,0);
  var po_voropentcp = new Array("","");
  var po_voropenudp = new Array("51200,51201,51210","2000-2038,2050,2051,2069,2085,3010-3030");

// Vordefiniert: Modusnamen
  var modusname_kurz = new Array("Modus DSL / Festnetz","Modus DSL-Anschluss (IP)");
  var modusname_lang = new Array("DSL / Festnetz Konfiguration","DSL-Anschluss (IP) Konfiguration");

// Vordefiniert: Name analoger Anschluss
  var telname = "Standard-Anschluss (T-Net)";

// Vordefiniert: Providernamen
  var provname = new Array("T-Online","Anderer Provider");

// Vordefiniert: Verschlüsselungsarten
  var encryptname = new Array("Aus","WEP","WPA2 mit Pre-shared key","WPA / WPA2 mit Pre-shared key","WPA mit Pre-shared key");

// Vordefiniert: Telefon Amtsberechtigungs Arten
  var abername = new Array("International","National","Ortsberechtigt","Halbamtsberechtigt","Nicht amtsberechtigt","Nur TFE berechtigt");

// Vordefiniert: Telefon Endgerätetypen
  var etypname = new Array("Telefon","Anrufbeantworter","Telefax","Kombigerät");

// Vordefiniert: Telefon AWS Arten
  var awsname = new Array("Sofort","Bei Besetzt","Bei Nichtmelden","Bei Nichtmelden oder Besetzt","Sofort mit Klingeln");

// Vordefiniert: Telefon Call Through Arten
  var cthrname = new Array("Deaktiviert","Definiertes Call Through","Unteranlagenbetrieb");

// Vordefiniert: VoIP Providerdaten
  var voipprovname = new Array("T-Online","Anderer Anbieter");
  var voipprovtxt1 = new Array("DSL-Telefonnummer","Internetrufnummer");
  var voipprovtxt2 = new Array("E-Mail-Adresse","Benutzername");
  var voipprovbnea = new Array(false,false); //Benutzername ein-/ausschaltbar
  var voipprovtxt3 = new Array("Passwort (Webkennwort)","Passwort");
  var voipprovtxt4 = new Array("","Registrar/Proxy");
  var voipprovovnr = new Array(true,true); //Ortsvorwahl vorhanden
  var voipprovdtmf = new Array(false,true);
  var voipprovnaea  = new Array(false,true);//Name des Anbieters
  var voipprovparm = new Array(false,true);

	var reload_flag;
	var t_number;
	var t_mail;
	var t_pass;
	var t_ortsvo;
	var t_verw;
		
	var anoth_servname;
	var anoth_number;
	var anoth_authname;
	var anoth_pass;
	var anoth_ortsvo;
	var anoth_verw;
	var anoth_prox;
	var anoth_proxport;
	var anoth_dtmf;
	var anoth_vad;
	var anoth_bandcompres;

// Gesamtzahl Schritte im Assistent
  var ass_steps_mode = new Array("4","2");   //Vorgabe für Modus 0 und 1

// Gesamtzahl Schritte im Assistent
  var ass_steps_file = new Array("hcti_assistent_lern.htm",
                                  //"hcti_modus.htm",
                                  "hcti_netzwerk_wan.htm",
                                  "hcti_assistent_ausw.htm",
                                  "hcti_assistent_voip.htm",
                                  "hcti_assistent_fnetz.htm",
                                  "hcti_statoview.htm");

// File-Server Funktionalität vorhanden
  var fsrvfkt = false;

// Maximale Benutzer Wechseldatenträgerverwaltung
  var max_fsrvuser = 6;
// Netzwerk Anzahl LAN Ports
  var anz_port = 1;

// Betriebsmodus DSL-Anschluss(IP) einstellbar
  var ipone_avail = 0;
// Telefon max. Anzahl Internetrufnummern
  var max_voip = 15;

// Telefon Anzahl ISDN-Rufnummern
  var anz_msn = 10;

// Telefon Anzahl Anschlüsse
  var anz_as = 1;

// Telefon Anzahl Kurzwahlen
  var anz_kuwa = 0;

// IP-Adresse
  var ip_block1 = "192";
  var ip_block2 = "168";
  var ip_block3 = "2";
  var ip_block4 = "1";

// Analoger Standard-Anschluss vorhanden
  var pstnfkt = true;

// Festnetz-Anschluss
// Keiner gefunden = 0
// Standard-Anschluss = 1
// ISDN-Anschluss = 2
  var tel_status = 2;

// WLAN Funktionalität vorhanden
  var wlanfkt = true;

// Max. Anzahl SSIDs
  var max_ssid = 1;

//Anzahl der maximal aktivierbaren Repeater (5 = alle)
  var max_rep = 5;
// Budget Funktionalität vorhanden
  var budfkt = false;

// Gesamtbudget vorhanden
  var budgesamt = false;

// DSL Statusseite vorhanden
  var dslstat = true;

// Startgröße des Fenster für Resize
  var start_w = 821;
  var start_h = 707;

// *****************************************************************************
// Folgende Variablen und Unterprogramme sind notwendig
// für Funktion des Konfigurators - Vorsicht bei Änderung!
// *****************************************************************************

function highlight(high)
{
  if(document.F1.B1.style)
  {
  	if (high==true)
   		document.F1.B1.style.color = '#E20074';
  	else 
  		document.F1.B1.style.color = '#000000';
  }
}

function getW(){
  if (self.innerWidth){ //alle Internet-Browser außer IE
  	return top.innerWidth;
  }
  else if (document.body){ //IE nicht im strict-Modus
  	return top.document.body.clientWidth;
  }
}

function getH(){
  if (self.innerHeight){ //alle Internet-Browser außer IE
  	return top.innerHeight;
  }
  else if (document.body){ //IE nicht im strict-Modus
  	return top.document.body.clientHeight;
  }
}

function gotosite(htmlsite){
  location.href = htmlsite;
}

function mousehigh(but,high){
  var col;
  if (high==1) col = '#E20074';
  else col = '#000000';

  document.getElementById(but).style.color = col;
  document.getElementById(but).style.borderColor = col;
}

//-->

</script>


<SCRIPT language="JavaScript">
<!--
function chk(){ 
  document.getElementById("startseite").style.visibility = "visible";
  document.getElementById("status").style.visibility = "visible";
 // if (budfkt == true) document.getElementById("budget").style.visibility = "visible";

  document.getElementById("actionbut").style.visibility = "visible";
  if (screen.width > 800 && screen.height > 600){
    document.getElementById("cTextChg").innerHTML = "<p>&nbsp;</p>";
  }
  else{
    document.getElementById("cTextChg").innerHTML = "<p>Wir empfehlen ihnen für die <b>optimale Benutzung</b> dieses Programms<br>" +
													"eine Bildschirmauflösung von <b>min. 1024 x 768 Pixel</b> einzustellen oder<br>" +
													"die Einstellung des Vollbildes mit der <b>Taste F11</b>, die Sie auf Ihrer PC-<br>" +
													"Tastatur finden.<br>" +
													"Mit der <b>Taste F11</b> können Sie das <b>Vollbild ein- und ausschalten</b>.</p>" +
                                                    "<p>&nbsp;</p>";
}
  
}

function stOk(){
var start_w = 821;
var start_h = 707;
var need_w = 792;
var need_h = 557;

var akt_w;
var akt_h;

	location.href ="top_start_passwort.htm";
  
  window.resizeTo(start_w,start_h);
  
  if (self.innerHeight){ //alle Browser außer IE
  	akt_w = self.innerWidth;
  	akt_h = self.innerHeight;
  }
  else if (document.body){ //IE nicht im strict-Modus
  	akt_w = document.body.clientWidth;
  	akt_h = document.body.clientHeight;
  }
  
  start_w = start_w + (need_w - akt_w);
  start_h = start_h + (need_h - akt_h);
  
  window.resizeTo(start_w,start_h);

}

//-->
</SCRIPT>


<STYLE type="text/css">
input.stylepwd {POSITION: relative; LEFT: -107px; TOP: -360px; font-family: Courier New; font-size:14px;}
input.stylebut {width:191px; height:24px; font-family:Arial; font-size:12px; font-weight:bold; padding-left:5px; cursor: pointer; cursor: hand;}

td {font-family: Arial, sans-serif; font-size: 12px;}
li {font-family:Arial, sans-serif; font-size:12px;}
p {font-family:Arial, sans-serif; font-size:12px; margin: 0px;}
body {font-family:Arial, sans-serif; font-size:12px; margin-left: 0px; margin-top: 0px; margin-bottom: 0px;}

form {margin: 0px;}

#cProd {
	margin-left: 0px; margin-top: 15px; width: 402px; height: 24px; line-height: 24px; background-image: url(pic_prodname.gif);
}
#cBorderTxt {
	margin-left: 0px; margin-top: 15px; width: 402px; background-color: #000000; color: #FFFFFF;
	border-color: #E20074; border-width: 2px; border-style: solid;
}
#cText {
	line-height: 15px; padding-left: 10px;
}
#cTextChg {
	line-height: 15px; padding-left: 10px;
}

#druckbut {
  float: left; text-align:left; margin-top: 10px;
}
#actionbut {
  text-align:right; margin-top: 10px; VISIBILITY: hidden;
}

#startseite {
  height: 24px; line-height: 24px; width: 135px; cursor: pointer; cursor: hand; 
  font-weight: bold; border-width: 1px; border-top-style: solid; border-bottom-style: solid; VISIBILITY: hidden;
}

#status {
  height: 24px; line-height: 24px; width: 135px; cursor: pointer; cursor: hand; 
  font-weight: bold; border-width: 1px; border-bottom-style: solid; VISIBILITY: hidden;
}

#budget {
  height: 24px; line-height: 24px; width: 135px; cursor: pointer; cursor: hand; 
  font-weight: bold; border-width: 1px; border-bottom-style: solid; VISIBILITY: hidden;
}


</STYLE>


<STYLE type="text/css">

#startseite {color:#FFFFFF; background-color:#E20074; border-color: #000000;}
#status {color: #000000; background-color:#E7E7E7; border-color: #000000;}
#budget {color: #000000; background-color:#E7E7E7; border-color: #000000;}

body {overflow: hidden;}

</STYLE>

</HEAD>

<BODY onload=chk()>

<form name="F1">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%" id="Inhalt">
    <tr>
      <td valign="middle" align="center">
        <table border="1" cellpadding="0" cellspacing="0" height="483" width="644">
          <tr>
            <td valign="top">
              <img border="0" src="pic_welcome_b.gif" width="640" height="44">
              <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="160" valign="top">
                    <br>
                    <p><DIV id=startseite>&nbsp;&nbsp;&nbsp;&gt;&gt;&nbsp;Startseite</DIV></p>
                    <p><DIV id=status onclick=gotosite("top_status.htm") onmouseover=mousehigh("status",1) onmouseout=mousehigh("status",0)>&nbsp;&nbsp;&nbsp;&gt;&gt;&nbsp;Status</DIV></p>
                    <p><DIV id=budget onclick=gotosite("top_budget.htm") onmouseover=mousehigh("budget",1) onmouseout=mousehigh("budget",0)>&nbsp;&nbsp;&nbsp;&gt;&gt;&nbsp;Budget</DIV></p>
                  </td>
  
                  <td valign="top">
                  <DIV id=cProd></DIV>
                    <DIV id=cBorderTxt>
                      <DIV id=cText>
                        <p>&nbsp;</p>
                        <b>Willkommen im Konfigurationsprogramm!</b></p>
                        <p>&nbsp;</p>
                        <p>Für die erfolgreiche Konfiguration Ihres Routers empfehlen wir Ihnen die Verwendung folgender Internet-Browser:</p>
                        <p>&nbsp;</p>
                        <li>Internet Explorer, ab Version 6</li>
                        <li>Firefox, ab Version 2</li>
                        <li>T-Online Browser, ab Version 6</li>
                        <p>&nbsp;</p>
                      </DIV>
                      <DIV id=cTextChg>
                        <p>Die soeben durchgeführte Systemüberprüfung hat ergeben,<br>
                        dass in Ihrem Internet-Browser die Javascript-Funktion deaktiviert ist.</p>
                        <p>&nbsp;</p>
                        <p>Bitte aktivieren Sie in Ihrem Internet-Browser die Javascript-Funktion<br>
                        und rufen Sie dann das Konfigurationsprogramm erneut auf.</p>
                        <p>&nbsp;</p>
                      </DIV>
                    </DIV>
                    <DIV id=actionbut><input type="button" name="B1" class="stylebut" onclick=stOk() onmouseover=highlight(true) onmouseout=highlight(false) value="&gt;&gt;&nbsp;Konfiguration starten"></DIV>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</form>

</BODY>

</HTML>
