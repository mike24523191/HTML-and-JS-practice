 city=()=>{
     temp = ""
     inside = document.getElementById("inside").value
    var anycity=[["A","10 台北市"],["B","11 台中市"],["C","12 基隆市"],["D","13 台南市"]
    ,["E","14 高雄市"],["F","15 台北縣"],["G","16 宜蘭縣"],["H","17 桃園縣"],["I","34 嘉義市"],["J","18 新竹縣"]
    ,["K","19 苗栗縣"],["L","20 台中縣"],["M","21 南投縣"],["N","22 彰化縣"],["O","35 新竹市"],["P","23 雲林縣"],["Q","24 嘉義縣"],["R","25 台南縣"],
    ["S","26 高雄縣"],["T","27 屏東縣"],["U","28 花蓮縣"],["V","29 台東縣"],["W","32 金門縣"],["X","30 澎湖縣"],["Y","31 陽明山"],["Z","33 連江縣"]];
    for (i=0;i<anycity.length;i++) {
        if(anycity[i][0] == inside){
            temp = anycity[i][1]
        }
    }
    document.getElementById("out").innerHTML = temp;
}