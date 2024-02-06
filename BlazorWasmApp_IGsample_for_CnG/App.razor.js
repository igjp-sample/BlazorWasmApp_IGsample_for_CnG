 export const init () => {

    $("#barcode").igQRCodeBarcode({
        height: "300px",
        width: "100%",
        data: "http://www.infragistics.com/products/jquery/",
    });

	$("#spreadsheet").igSpreadsheet({
		height: "600",
		width: "100%",
		isFormulaBarVisible: true,
	});

}
