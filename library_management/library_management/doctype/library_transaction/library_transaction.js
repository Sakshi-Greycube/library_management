// Copyright (c) 2024, Sakshi Solanki and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Transaction', {

	/**Apply filters on a Link field to show limited records to choose from. 
	 * You must call frm.set_query very early in the form lifecycle, usually in setup or onload. */
	
	onload: function(frm){
		frm.set_query('article', () => {
			return {
				filters: {
					isbn: ['is', 'set']
				}
			}
		})
	}, 		
});
