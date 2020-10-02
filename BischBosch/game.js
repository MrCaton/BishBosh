function game() {

    var x = document.getElementById("values");
    var N = x.elements[0].value;
    var Bish = x.elements[1].value;
    var Bosh = x.elements[2].value;
    var text="";
    var i;
    for (i = 1; i <= N; i++) {

        if (i % Bish == 0 && i % Bosh == 0) {

          text += "Bish-Bosh" + ", ";

        } else if (i % Bish == 0) {
            text+="Bish" + ", ";


        } else if (i % Bosh == 0) {
            text+="Bosh" + ", ";

        } else {
          text+=i + ", ";

        }

    }
    document.getElementById("result").innerHTML = text;


}