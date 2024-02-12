# Copyright (c) 2024, Sakshi Solanki and contributors
# For license information, please see license.txt

import frappe
from frappe import _, msgprint


def execute(filters=None):
	if not filters: filters = {}

	columns = []

	columns = get_columns()
	cs_data = get_cs_data(filters)

	if not cs_data:
		msgprint(_('No records found'))
		return columns, cs_data
	
	data = []
	for d in cs_data:
		row = frappe._dict({
			'article': d.article,
			'library_member': d.library_member,
			'type': d.type, 
			'count': d.count,
			'date':d.date
			})
		data.append(row)
	
	chart = get_chart_data(data)
	report_summary = get_report_summary(data)

	return columns, cs_data, "Library Transaction", chart, report_summary

def get_columns():
	return[
		{
			'fieldname':'article',
			'label': _('Article'),
			'fieldtype':'Link',
			'options': 'Article',
			'width':'150'
		},
		{
			'fieldname':'library_member',
			'label': _('Library Member'),
			'fieldtype':'Data',
			'width':'120'
		},
		{
			'fieldname':'type',
			'label': _('Type'),
			'fieldtype':'Data',
			'width':'100'
		},
		{
			'fieldname':'count',
			'label': _('Count'),
			'fieldtype':'Int',
			'width':'150'
		},
		{
			'fieldname': 'date',
			'label':_('Date'),
			'fieldtype': 'Date',
			'width': '100'
		}
		]

def get_cs_data(filters):
	data = frappe.get_all(doctype='Library Transaction',
					   fields=['article' ,'library_member', 'type', 'count(article) as count', 'date'],
					   filters={'type':'Issue'},
					   group_by='article')
	return data

# 	conditions = get_conditions(filters)
# 	data = frappe.get_all(
# 		doctype = 'Library Transaction',
# 		fields = ['article', 'library_member', 'type', 'date'],
# 		filters = conditions,
# 		order_by = 'library_member desc'
# 	)
# 	return data

# def get_conditions(filters):
# 	conditions = {}
# 	for key, value in filters.items():
# 		if filters.get(key):
# 			conditions[key] = value
# 	return filters

# def get_chart_data(data):
# 	if not data:
# 		return None
	
	# labels = ['Issued', 'Returned']

	# transaction_data = {
	# 	'Issued': 0,
	# 	'Returned': 0
	# }

	# datasets = []
	# for entry in data:
	# 	if entry.type == 'Issue':
	# 		transaction_data['Issued'] += 1
	# 	else:
	# 		transaction_data['Returned'] +=1

	# datasets.append({
	# 	'name': 'Library Transaction',
	# 	'values': [transaction_data.get('Issued'), transaction_data.get('Returned')]
	# })

# def get_report_summary(data):
# 	if not data:
# 		return None

	# issued_article, returned_article = 0, 0

	# for entry in data:
	# 	if entry.type == 'Issue':
	# 		issued_article += 1

	# 	else:
	# 		returned_article += 1

	# return [
	# 	{
	# 		'value': issued_article,
	# 		'indicator': 'Green',
	# 		'label': 'Issued Aricle',
	# 		'datatype': 'Int',
	# 	},
	# 	{
	# 		'type': 'separator',
	# 		'value': '+',
	# 	},
	# 	{
	# 		'value': returned_article,
	# 		'indicator': 'Red',
	# 		'label': 'Returned Article',
	# 		'datatype': 'Int',
	# 	},
	# 	{
	# 		'type': 'separator',
	# 		'value': '=',
	# 	},
	# 	{
	# 		'value': issued_article + returned_article,
	# 		'indicator': 'blue',
	# 		'label': 'Total Article',
	# 		'datatype': 'Int',
	# 	}
	# ]

def get_chart_data(data):
	if not data:
		return None

	# labels = ['Beautiful World, Where Are You', 'Test Data Management Risks', 'Technology', 'Returned']

	# issued_article = {
	# 	'Beautiful World, Where Are You': 0,
	# 	'Test Data Management Risks': 0,
	# 	'Technology': 0,
	# 	'Returned':0
	# }

	# datasets = []
	# for a in data:
	# 	if a.article == 'Beautiful World, Where Are You' and a.type == 'Issue':
	# 		issued_article['Beautiful World, Where Are You'] += 1
	# 	elif a.article == 'Test Data Management Risks' and a.type == 'Issue':
	# 		issued_article['Test Data Management Risks'] +=1
	# 	elif a.article == 'Technology' and a.type == 'Issue':
	# 		issued_article['Technology'] +=1
	# 	else:
	# 		issued_article['Returned'] +=1
			

	# datasets.append({
	# 	'name': 'Count Issue Article',
	# 	'values': [issued_article.get('Beautiful World, Where Are You'), 
	# 		 issued_article.get('Test Data Management Risks'), 
	# 		 issued_article.get('Technology'), 
	# 		 issued_article.get('Returned')]
	# })

	labels = frappe.db.get_list('Article', pluck = 'name')

	dataset = []
	dataset.append({
		'name': 'Article Issue',
		'values': [a['count'] for a in data]
	})

	chart = {
		'data': {
			'labels': labels,
			'datasets': dataset
		},
		'type': 'bar',
		'height': 300,
	}

	return chart

def get_report_summary(data):
	if not data:
		return None

	my_list = []
	for a in data:
		my_list.append({'label': a.article,
				 	'value': a.count,
					'indicator': 'Green'})
	return my_list


	# beautiful, test, tech, returned = 0, 0, 0, 0

	# for a in data:
	# 	if a.article == 'Beautiful World, Where Are You' and a.type == 'Issue':
	# 		beautiful += 1
	# 	elif a.article == 'Test Data Management Risks' and a.type == 'Issue':
	# 		test +=1
	# 	elif a.article == 'Technology' and a.type == 'Issue':
	# 		tech +=1
	# 	else:
	# 		returned +=1	
	
	# return [
	# 	{
	# 		'value': beautiful,
	# 		'indicator': 'Green',
	# 		'label': 'Beautiful World, Where Are You',
	# 		'datatype': 'Int',
	# 	},
	# 	{
	# 		'type': 'separator',
	# 		'value': '+',
	# 	},
	# 	{
	# 		'value': test,
	# 		'indicator': 'Green',
	# 		'label': 'Test Data Management Risks',
	# 		'datatype': 'Int',
	# 	},
	# 	{
	# 		'type': 'separator',
	# 		'value': '+',
	# 	},
	# 	{
	# 		'value': tech,
	# 		'indicator': 'Green',
	# 		'label': 'Technology',
	# 		'datatype': 'Int',
	# 	},
	# 	{
	# 		'type': 'separator',
	# 		'value': '+',
	# 	},
	# 	{
	# 		'value': returned,
	# 		'indicator': 'Red',
	# 		'label': 'Returned Books ',
	# 		'datatype': 'Int',
	# 	},
	# 	{
	# 		'type': 'separator',
	# 		'value': '=',
	# 	},
	# 	{
	# 		'value': beautiful + test + tech + returned,
	# 		'indicator': 'blue',
	# 		'label': 'Total Article',
	# 		'datatype': 'Int',
	# 	}
	# ]
