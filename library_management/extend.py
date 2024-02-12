from __future__ import unicode_literals 
import frappe
from frappe.desk.doctype.todo.todo import ToDo

def boot_session(bootinfo):
    bootinfo.library = {
        'article': 'test'
    }

def todo_update(doc, method):
    print(doc, '---'*10)


####################### hooks: override method #######################

def get_events(start, end, user=None, for_reminder=False, filters=None):

    from frappe.desk.doctype.event.event import get_events

    result = get_events(start, end, user=None, for_reminder=False, filters=None)

    print(result, '---'*10)

    return result

class CustomToDo(ToDo):
    def my_custom_method(self):
        return 'abcde'