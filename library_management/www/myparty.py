import frappe

def get_context(context):
    if frappe.form_dict:
        context.name = frappe.form_dict.name
    context.msg = 'i am from python'
    return context