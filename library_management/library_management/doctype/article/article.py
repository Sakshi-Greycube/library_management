# Copyright (c) 2024, Sakshi Solanki and contributors
# For license information, please see license.txt

import frappe
from frappe.website.website_generator import WebsiteGenerator

class Article(WebsiteGenerator):
	def after_insert(self):
		frappe.publish_realtime('new_article', self.name)

		# frappe.enqueue(get_article_information, article=self.name)

	def get_title(self):
		return self.article_name
	
	def get_test(self):
		return 'asdf'
	
	@frappe.whitelist()
	# def get_isbn(self):
	# 	return frappe.generate_hash('Article', 10)

	def set_isbn(self):
		self.isbn = frappe.generate_hash('Article', 10)

@frappe.whitelist()
def get_isbn():
	return frappe.generate_hash('Article', 10)

def get_article_information():
	pass