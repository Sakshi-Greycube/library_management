// Copyright (c) 2024, Sakshi Solanki and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Member', {
	refresh: function (frm) {
		frm.skip_before_save = false;
	},
	
	//////////////////////////////// Task2 ////////////////////////////////	

	before_save: function (frm) {
		if ( frm.skip_before_save ){
			return;		

		}
        frappe.validated = false;
		const d = new Date(frm.doc.date_of_birth);
		let year = d.getFullYear();
		console.log(year)

		if (year >= 2011) {
			frappe.confirm('You Are Minor Member!! Do You want to contiune??',
				() => {
					
					// frappe.validated = true;
					frappe.show_alert({
						message: __('You can continue Registration'),
						indicator:'green'
					},5)
					frm.skip_before_save = true;
					frm.save().then( () => {
						frappe.msgprint(__('You can continue Registration'))
					})
					
				},
				() => {
					frappe.msgprint(__('See You Again!!'))
					// frappe.validated = false;
					return;
				})
				frappe.validated = false;
}

	},

	refresh: function (frm) {
		frm.add_custom_button('Create Membership', () => {
			frappe.new_doc('Library Membership', {
				library_member: frm.doc.name
			})
		})

		frm.add_custom_button('Issue An Article', () => {
			let dialog = new frappe.ui.Dialog({
				title: 'Issue An Article',
				fields: [
					{
						fieldname: 'article',
						label: 'Article',
						fieldtype: 'Link',
						options: 'Article'      //link the Article doctype here!!
					}
				],
				primary_action(values) {
					// 	// frappe.db.insert({	
					// 	// 	doctype: 'Library Transaction',
					// 	// 	library_member: frm.doc.name,	
					// 	// 	article: values.article,
					// 	// 	type:'Issue',
					// 	// 	date: frappe.datetime.now_date(),
					// 	// }).then(doc => {
					// 	// 	dialog.hide();
					// 	// 	frappe.set_route('Form', 'Library Transaction', doc.name);
					// 	// })

					// 	frappe.new_doc("Library Transaction", { subject: "New Task" },
					// 		doc => {
					// 			doc.library_member = frm.doc.name;
					// 			doc.article = values.article;
					// 			doc.type = 'Issue';
					// 			doc.date = frappe.datetime.now_date();
					// 		})

					//////////////////////////////// Task ////////////////////////////////	

					frappe.call({
						method: 'library_management.library_management.doctype.library_member.library_member.new_doc',
						args: {
							doc: frm.doc.name,
							book_name: values.article,
						},
						callback: function (r) {
							if (r.message) {
								frappe.msgprint(__(r.message))
							}
							console.log(r.message)
						}
					})

					console.log(typeof (values));

				}
			});
			dialog.show();
			//console.log(dialog.primary_action)
		});






		//////////////////////////////// Dialog APIs ////////////////////////////////

		// frm.add_custom_button('dailogs', () => {
		// frappe.msgprint({
		// 	title: __('Notification'),
		// 	message: __('Message Print!!'),
		// 	primary_action: {
		// 		action(){
		// 			frappe.db.get_doc('Article', 'Test Data Management Risks')
		// 			.then(doc => {
		// 				console.log(doc.author);
		// 			})	
		// 		}
		// 	}
		// });

		//frappe.prompt('First Name', ({ value }) => console.log(value))     
		// frappe.prompt('First Name', console.log,'Enter First Name' ,'Submit')      
		// frappe.prompt([
		// 	{
		// 		label: 'First Name',
		// 		fieldname: 'first_name',
		// 		fieldtype: 'Data'
		// 	},
		// 	{
		// 		label: 'Last Name',
		// 		fieldname: 'last_name',
		// 		fieldtype: 'Data'
		// 	},
		// ], (values) => {
		// 	alert(values.first_name + " " +values.last_name);
		// 	console.log(values.first_name, values.last_name);
		// })

		// frappe.confirm('Do You Want to Register!!?', 
		// () => frappe.prompt('First Name', ({ value }) => alert(value)),
		// () => alert("Bye!!"))

		// frappe.warn('Are you sure you want to proceed?',
		// 	'There are unsaved changes on this page',
		// 	() => {
		// 		alert("Hi")
		// 	},
		// 	'Continue',
		// 	true // Sets dialog as minimizable
		// )

		// frappe.show_alert({
		// 	message:__('Saved'),
		// 	indicator: 'green'
		// },5);

		// frappe.show_progress('Loading..', 70, 100, 'Please wait');

		// frappe.new_doc("Article")        //directly open Article docType
		// frappe.new_doc("Article", { subject: "New Article" },
		// 	doc => {
		// 		doc.description = "Do what's necessary";
		// 	})

		// frappe.new_doc("Article", { subject: "New Article" }, doc => {
		// 	let row = frappe.model.add_child(doc, "reviews");
		// 	row.full_name = 'Your Name';
		// 	row.content = 'content';
		// 	row.rating = 3 / 5;

		// });


		// 		})
	},
});
