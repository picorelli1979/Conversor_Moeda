
Dolar = 4.9

Euro = 5.3

Btc = 214

function Converter(){ 

    const Moeda_Principal = document.getElementById('Text_Moeda').value;
    
    moeda_usa = Moeda_Principal / Dolar

    moeda_eur = Moeda_Principal / Euro

    moeda_btc = Moeda_Principal / Btc

    document.getElementById('Dolar_USA').innerHTML+= parseFloat(moeda_usa).toLocaleString('us',{style:'currency', currency: 'USD'}) 
    document.getElementById('Euro_EUR').innerHTML+= parseFloat(moeda_eur).toLocaleString('eur',{style:'currency', currency: 'EUR'}) 
    document.getElementById('Bitcoin_BTC').innerHTML+= parseFloat(moeda_btc).toLocaleString('btc',{style:'currency', currency: 'BTC'}) 

    console.log(moeda_convertida)

}



