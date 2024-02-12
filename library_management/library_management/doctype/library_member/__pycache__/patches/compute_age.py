
from __future__ import unicode_literals
import frappe

def execute():
    print('a' *100)
    for member in frappe.db.get_all('Library Member', pluck = 'name'):
        doc = frappe.get_doc('Library Member', member)
        doc.compute_age()
        doc.save()  