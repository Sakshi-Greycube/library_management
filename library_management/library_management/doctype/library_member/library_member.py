# Copyright (c) 2024, Frappe and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from datetime import date

today = date.today()

class LibraryMember(Document):
    
    def before_save(self):
        self.full_name = self.first_name + " " +(self.last_name or '')
        self.compute_age()
        
    def compute_age(self):
        if self.date_of_birth:
            self.age = frappe.utils.date_diff(frappe.utils.today(), self.date_of_birth) / 365

        
        
@frappe.whitelist()
def new_doc(doc,book_name):
    
    item = frappe.new_doc("Library Transaction")
    item.article = book_name
    item.library_member = doc
    item.type = "Issue"
    item.date = today
    item.insert()
    print(item.article,"/"*100)
    return item.name