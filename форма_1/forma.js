function exportF() {
	//Format your table with form data
	document.getElementById("input").innerHTML = document.getElementById("login").value;
	document.getElementById("password.table").innerHTML = document.getElementById("password").value;
	document.getElementById("pass.table").innerHTML = document.getElementById("pass").value;
	document.getElementById("name.table").innerHTML = document.getElementById("name").value;
	document.getElementById("email.table").innerHTML = document.getElementById("email").value;
	document.getElementById("tel.table").innerHTML = document.getElementById("tel").value;
	document.getElementById("photo.table").innerHTML = document.getElementById("photo").value;
	var table = document.getElementById("table");
	var html = table.outerHTML;

	var url = 'data:application/vnd.ms-excel,' + escape(html); // Set your html table into url 
	var link = document.getElementById("downloadLink");
	link.setAttribute("href", url);
	link.setAttribute("download", "export.xls"); // Choose the file name
	link.click(); // Download your excel file   
	return false;
}