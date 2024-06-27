// Copyright (c) 2024, Sakshi Solanki and contributors
// For license information, please see license.txt

frappe.ui.form.on('Article', {
	refresh: function(frm) {
		frm.add_custom_button('Fetch ISBN', () => {
			// frm.call('get_isbn')
			// .then(r => {
			// 	if(r.message){
			// 		frm.set_value('isbn', r.message)
			// 	}
			// 	console.log(r)
			// });	

			frm.call('set_isbn')
		})

		//frappe.call()

		frm.add_custom_button('Fetch ISBN(frappe.call)', () => {
			frappe.call('library_management.library_management.doctype.article.article.get_isbn')
			.then(r => {
				console.log(r);
			})
		})

		// frm.add_web_link('https://www.google.co.in/', 'Go To Google')
	}
});

frappe.ui.form.on('Article Review',{
	reviews_add(frm, cdt, cdn){
		console.log('row added', cdt, cdn);
		let row = frappe.get_doc(cdt, cdn);
			row.rating = 3 / 5;
			frm.refresh();
	},
	reviews_remove(frm, cdt, cdn){
		console.log('row remove', cdt, cdn);
	},
	reviews_move(frm, cdt, cdn){
		console.log('row move', cdt, cdn);
	},
	form_render(frm, cdt, cdn){
		console.log('form render', cdt, cdn);
	},
})