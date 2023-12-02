//Cálculo de secciones minimas en columnas de  H°A°
    // Obtener valores de los inputs
    function Calcular() {
    const LX = document.getElementById('lx').valueAsNumber;
    const LY = document.getElementById('ly').valueAsNumber;
    const NUMER = document.getElementById('Numeros').valueAsNumber;
    const FAC = document.getElementById('Factor').valueAsNumber;
    const CALCULAR = document.getElementById('Calcular');
    const ERROR = document.getElementById('error');
    const SECCION = document.getElementById('seccion');
    const DIMEN= document.getElementById('Dimen');
    const FACT=FAC;
    const LUZX= LX;
    const LUZY = LY;
    const NUMEROS=NUMER;

    // Función para el cálculo de Áreas//
function Secciones(FACT){
    const ALFA= 0.40;
    const CVIVAS=0.2;
    const CMUERTAS=0.34;
    const PP=0.46;
    const PSER= CVIVAS+CMUERTAS+PP;
    const RES= 21;
    let AreaTri=0.25*(LUZX*LUZY);
    let PSerTotal= PSER*AreaTri*NUMEROS*1000;
    let ResistenciadeDiseño= ALFA*RES*10;

if(FACT==0.35){ 
        let AreaNecesaria=(PSerTotal/(0.35*ResistenciadeDiseño));
        return(AreaNecesaria);
}else if(FACT==0.40){
        let AreaN=(PSerTotal*2)/(0.40*ResistenciadeDiseño);
        return(AreaN);
}else(FACT==0.50)
        let AreaN=(PSerTotal*4)/(0.50*ResistenciadeDiseño);
        return(AreaN);

 }
        if (FACT==0.35){
            ERROR.style.display = 'none';
            SECCION.style.display = 'block';
            DIMEN.style.display = 'block';
            let SeccionR=Math.round(Secciones(FACT));
            let DIMENS=Secciones(FAC)/20;
            let DimRed= Math.round(DIMENS);
            SECCION.innerHTML = "SECCIÓN NECESARIA="+SeccionR+"cm2";
            DIMEN.innerHTML = "DIMENSIONES:" + "(20 ;"  + DimRed +   ")"+ "cm";
        } if (FACT==0.40){
            ERROR.style.display = 'none';
            SECCION.style.display = 'block';
            DIMEN.style.display = 'block';
            let SeccionR=Math.round(Secciones(FACT));
            let DIMENS=Secciones(FACT)/20;
            let DimRed= Math.round(DIMENS);
            SECCION.innerHTML = "SECCIÓN NECESARIA="+SeccionR+"cm2";
            DIMEN.innerHTML = "DIMENSIONES:" +"(20 ,"  + DimRed +   ")" + "cm";
        } if(FACT==0.50){
            ERROR.style.display = 'none';
            SECCION.style.display = 'block';
            DIMEN.style.display = 'block';
            let SeccionR=Math.round(Secciones(FACT));
            let DIMENS=Secciones(FACT)/20;
            let DimRed= Math.round(DIMENS);
            SECCION.innerHTML = "SECCIÓN NECESARIA="+SeccionR+"cm2";
            DIMEN.innerHTML = "DIMENSIONES:" +"(20 ,"+   + DimRed + ")" +  "cm"; 
        }
        }