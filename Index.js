// Uitkomst is de content die die laad
xmlhttp = new XMLHttpRequest();
var  Test = document.getElementById("Test");

    function loadXMLDoc()
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {

            var obj = JSON.parse(xmlhttp.responseText); // Zet het om in de string obj

            content(obj);                           // voert de function content uit, geeft obj mee.
        }
    }
    xmlhttp.open("POST","http://codetuts.nl/json/list.php",true);
    xmlhttp.send();

    //  document.getElementById("Test").innerHTML=xmlhttp.responseText;
    //  content(xmlhttp.responseText);
    //  xmlhttp.open("GET","http://codetuts.nl/json/list.php",true);
}


function content(obj){


    Test.innerHTML = "";// Maakt de div schoon, hierdoor komen dr steeds meer namen


        for(i = 0; i < obj.length; i++){ // Hij loopt door tot de laaste naam ( Rebacca)


        if(obj[i].name.toLowerCase().indexOf(SearchEngine.value.toLowerCase()) !== -1
                                    && SearchEngine.value !== "" // Controlleert of dr iets in getyped is, iets ingevuld is in de Searchmachine
                                    || // Of
            obj[i].name.indexOf(SearchEngine.value) !== -1 && SearchEngine.value !== ""
            || // Of
            obj[i].name.toUpperCase().indexOf(SearchEngine.value.toUpperCase()) !== -1){ // Zet het naar Hoodletters


            document.getElementById("Test").innerHTML +=
            // Naam
           "<br>" +
           "<div id='Naam'> <h2>Naam :</h2> " + obj[i].name + "<br> </div>" +

            // Leeftijd
           "<div id='Leeftijd'><h2>Leeftijd : </h2>" + obj[i].age + "<br></div>" +

            // Geslacht
           "<div id='Geslacht'><h2>Geslacht :</h2> " + obj[i].gender + "<br></div>" +

            // Email
            "<div id='Email'><h2>Email :</h2> " +obj[i].email + "<br></div>" +

            // Telefoon Nummer
            "<div id='Telefoon'><h2>Telefoon Nummer : </h2>" + obj[i].phone + "<br></div>" +

            // Geregistreeerd
            "<div id='Registratie'><h2>Geregistreed :</h2> " + obj[i].registered+ "<br></div> " ;








            }// if IndexOf

        }//for loop






}