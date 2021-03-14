/*Szorozzunk össze 1 és 10 között minden egymás melletti számot,
majd emeljük négyzetre! Az eredményt vesszővel elválasztva jelenítsük meg a képernyőn! */
let i = 1;

function szamolas(valtozo)
{
    //elvégzi a szorzást és a négyzetre emelést a (** 2) segítségével 
    let sum = (i * (i+1)) ** 2;
    return sum;
}

function emel()
{
    for(i = 1; i < 10; i++)
    {
        /*spanba rakja a számokat, title-t ad az eredmény létrejöttéről, megfelelő számú id-t rendel melléjük*/
        let span = document.createElement("span");
        span.setAttribute("title", `(${i} * ${i+1}) a négyzeten`);
        span.setAttribute("id", `szam${i}`)
        document.getElementById("megold").appendChild(span);

        //utolsó számnál nincs vessző
        if(i < 9)
            document.getElementById(`szam${i}`).innerHTML = szamolas(i) + ", ";
        else
            document.getElementById(`szam${i}`).innerHTML = szamolas(i);
    }

    // elrejt / megjelenít
    let btn = document.getElementById("kezd");
    let div = document.getElementById("megold");

    if(div.style.display == "block")
    {
        btn.innerHTML = "Megjelenít";
        div.style.display = "none";
        while (div.hasChildNodes())
        {  
            div.removeChild(div.firstChild);
        }
    }
    else
        if(div.style.display == "none")
    {
        btn.innerHTML = "Elrejt";
        div.style.display = "block";
    }

}