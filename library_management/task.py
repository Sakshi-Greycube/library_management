import frappe
import string
import random

# def scheduler():
#     print('-'*100)
#     for transaction in frappe.db.get_all('Library Transaction', {'docstatus': 0}):
#         print('transaction',transaction,transaction.name)
#         doc = frappe.get_doc('Library Transaction', transaction.name)
#         doc.submit()

# def cron():

#     print("\n\nInserting a new note\n\n")

#     letters = string.ascii_letters
#     note = " ".join(random.choice(letters) for i in range(20))

#     new_note = frappe.get_doc({"doctype": "Note",
#                                "title": note})
	
#     new_note.insert()
#     frappe.db.commit()

def changedate():
	for transaction in frappe.db.get_all('Library Transaction', fields=['article','date'], filters={'docstatus': 0}):
		print(transaction, "-"*50)
		doc = frappe.get_doc('Library Transaction', transaction)
		doc.date = frappe.utils.add_days(doc.date, 2)
		print(doc.date, '/'*25)
		print(doc, "="*50)
		doc.save()
		print(doc.date, '#'*25)
		
		
		