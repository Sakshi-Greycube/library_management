frappe.pages['library-dashboard'].on_page_load = function(wrapper){
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Library Dashboard!!',
		single_column: true
	});

	// var a = $(frappe.render_template("library_dashboard"))

    // a.appendTo(page.body);
	
	frappe.require(['library_dashboard.bundle.js', 'party.bundle.js','library_dashboard.bundle.css'], () => {
		console.log('Library Bundle Loaded!!')
	});
} 
