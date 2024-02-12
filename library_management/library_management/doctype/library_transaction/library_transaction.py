# Copyright (c) 2024, Sakshi Solanki and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.model.docstatus import DocStatus

class LibraryTransaction(Document):
	
	def before_submit(self):
		if self.type == "Issue":
			self.validate_issue()
			# set the article status to be Issued
			article = frappe.get_doc("Article", self.article)
			article.status = "Issued"
			article.save()
		
		elif self.type == "Return":
			self.validate_return()
			# set the article status to be available
			article = frappe.get_doc("Article", self.article)
			article.status = "Available"
			article.save()

	def validate(self):
		self.validate_membership()
		self.validate_maximum_limit()

	def validate_issue(self):
		self.validate_membership()
		article = frappe.get_doc("Article", self.article)
		# article cann't be issued if it is already issued
		if article.status == "Issued":
			frappe.throw("Article is Already Issued by another member!!")

	def validate_return(self):
		self.validate_membership()
		article = frappe.get_doc("Article", self.article)
		# article cann't be returned if it is not issued first
		if article.status == "Available":
			frappe.throw("Article Cann't be returned Becasue it is not issued first!!")

	def validate_membership(self):
		return
		# check if a valid membrship exist for the library member
		validate_membership = frappe.db.exists("Library Membership",{
			"library_member": self.library_member,
			"docstatus": DocStatus.submitted(),
			"from_date":("<", self.date),
			"to_date":(">",self.date),
		})

		if not validate_membership:
			frappe.throw("The member does not have valid membership")

	def validate_maximum_limit(self):
		
		max_articles = frappe.db.get_single_value("Library Setting", "maximum_number_of_issued_articles")
		count = frappe.db.count("Library Transaction",{
			"library_member": self.library_member,
			"type":"Issue",
			"docstatus": DocStatus.submitted(),
		},
		)
		print('count' , count,'max_articles',max_articles)
		if count >= max_articles:
			frappe.throw("Maximum Limit Reached for issuing articles")
	