# Copyright (c) 2024, Sakshi Solanki and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.model.docstatus import DocStatus

class LibraryMembership(Document):

	def validate(self):
		# if self.to_date <= self.from_date:
		# 	frappe.throw("To date Cann't be earlier than from date")

		# get loan period and compute to_date by adding loan_period to from_date
		loan_period = frappe.db.get_single_value("Library Setting", "loan_period")
		self.to_date = frappe.utils.add_days(self.from_date, loan_period or 30)

	def before_submit(self):
		exists = frappe.db.exists("Library Membership", {
			"library_member": self.library_member,
			"docstatus": DocStatus.submitted(),
			# check exits membership's end date is later than this membership's last date
			"to_date": (">", self.from_date),
		},	
		)
		print(type(exists), "--------Type of Exists")
		print(exists,"----------exists")

		if exists:
			frappe.throw("There is an active membership for this member")

	def before_save(self):
		exist = frappe.db.exists("Library Membership","LM-2024-0004")
		print(type(exist), "--------docname Type")


		