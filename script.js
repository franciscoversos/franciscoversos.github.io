document.querySelector('#GreenButton').addEventListener("click", changeColorg);
  function changeColorg() {
   document.body.style.background = 'green';
  }
  document.querySelector('#RedButton').addEventListener("click", changeColorr);
  function changeColorr() {
   document.body.style.background = 'red';
  }
  document.querySelector('#YellowButton').addEventListener("click", changeColory);
  function changeColory() {
   document.body.style.background = 'yellow';
  }
   document.querySelector('#WhiteButton').addEventListener("click", changeColorw);
  function changeColorw() {
   document.body.style.background = 'white';
  }
  document.querySelector('#CyanButton').addEventListener("click", changeColorc);
  function changeColorc() {
   document.body.style.background = 'cyan';
  }
  document.getElementById("offsetSpan").addEventListener("mousemove", displyOffset);
  function displyOffset(e) {
    var cordx = e.offsetX;
    var cordy = e.offsetY;
    document.getElementById("spanCoord").innerHTML = " As coordenadas em x: "+ cordx +" e coordenadas em y:"+ cordy +";";
  }
  document.getElementById("changeClrhover").addEventListener("mouseenter", changeBckgClr);
  function changeBckgClr() {
    document.body.style.background ='coral';
  }
  document.getElementById("changeClrhover").addEventListener("mouseout", changeBckgClri);
  function changeBckgClri() {
    document.body.style.background ='white';
  }
  var a =0;
  var textNodel = ["Il Postino;", "Paris, Texas;","Apocalipse Now;", "Os Intocáveis;"];
  document.getElementById("btnAddLi").addEventListener("click", addLIbtn);
  function addLIbtn(){
    var lIAdd = document.createElement("li");
    var textLiadd = document.createTextNode(textNodel[a]);
    lIAdd.appendChild(textLiadd);
    document.getElementById("NuR").appendChild(lIAdd);
    a=a+1;
    if(a>=4){
      document.getElementById("btnAddLi").classList.add("escondido");
    }
    else if(a>0){
      document.getElementById("btnAddLiRem").classList.remove("escondido");
    }
  }
  document.getElementById("btnAddLiRem").addEventListener("click", addLIbtnRem);
  function addLIbtnRem(){
    v=7;
    var olElem = document.getElementById('NuR');
    var tamanho = olElem.childNodes.length ;
    if (tamanho> 7){
      olElem.removeChild(olElem.childNodes[tamanho-1]);
      a=a-1;
      console.log(a);
    if(a<=4){
      document.getElementById("btnAddLi").classList.remove("escondido");
    }
    if(a==0){
      document.getElementById("btnAddLiRem").classList.add("escondido");
    }
  }
  }