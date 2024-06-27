import frappe 
from frappe import auth

@frappe.whitelist(allow_guest=True)
def login(user, pwd):
	try:
		login_manager = frappe.auth.LoginManager()
		login_manager.authenticate(user=user, pwd=pwd)
		login_manager.post_login()
	except frappe.exceptions.AuthenticationError:
		frappe.clear_messages()
		frappe.local.response["message"] = {
			"success_key": 0,
			"message": "Authentication Error!"
		}

		return
	
	api_generate = generate_keys(frappe.session.user)
	user = frappe.get_doc('User', frappe.session.user)

	frappe.response['message'] = {
		"success_key": 1,
		"message": "Authentication success",
		"sid": frappe.session.sid,
		"api_key": user.api_key,
		"api_secret": api_generate,
		"user": user.username,
		"email": user.email 
	}

def generate_keys(user):
		user_details = frappe.get_doc('User', user)
		api_secret = frappe.generate_hash(length=15)

		if not user_details.api_key:
			api_key = frappe.generate_hash(length=15)
			user_details.api_key = api_key

		user_details.api_secret = api_secret
		user_details.save()

		return api_secret

@frappe.whitelist()
def receive_post_data():
	data = frappe.db.get_all('Article', filters={
		'status':'Issued'
	})

	print(f"\n\n{data}\n\n")

	return data	

@frappe.whitelist()
def get_member_details(member_id=None):
	return frappe.db.sql("""SELECT * FROM `tabLibrary Member`;""",as_dict=True)