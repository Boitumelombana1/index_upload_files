
function uploadfiles() {
    const input = document.getElementById("upload");
    const files = input.files;

    if (files.length === 0) {
        alert("Please select a file.");
        return;
    }

    for (let i = 0; i < files.length; i++) {
        console.log("File:", files[i].name);
        console.log("Size:", files[i].size);
        console.log("Type:", files[i].type);
    }

    alert(files.length + " file(s) selected.");
}

