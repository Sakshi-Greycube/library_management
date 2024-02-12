// Copyright (c) 2024, Sakshi Solanki and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Library Script Report"] = {
	"filters": [
		{
			"fieldname": "article",
			"label": __("Article"),
			"fieldtype": "Link",
			"options": "Article"
		},
		{
			"fieldname": "library_member",
			"label": __("Library Member"),
			"fieldtype": "Link",
			"options": "Library Member",
		},
		{
			"fieldname": "type",
			"label": __("Type"),
			"fieldtype": "Select",
			"options": [" ", "Issue", "Return"],
		}

	]
};
