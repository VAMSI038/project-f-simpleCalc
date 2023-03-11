var a = '';
function update(value) {
    // a = String(document.getElementById("screen").value) + String(value);
    a += String(value);
    document.getElementById("screen").value = a;
}



function result() {
    let variable = document.getElementById("screen").value;
    try {
        let v1 = eval(variable);
        document.getElementById("screen").value = v1;
        a = v1;
    }
    catch {
        console.log("error");
    }


}

function form_reset() {

    document.getElementById("screen").value = '';
    a = '';

}
