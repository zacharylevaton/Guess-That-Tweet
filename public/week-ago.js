module.exports = () => {
	var today = new Date();
	today.setDate(today.getDate() - 21);
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0');
	var yyyy = today.getFullYear();

	today = yyyy + '-' + mm + '-' + dd;

	return today;
}