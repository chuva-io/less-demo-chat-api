from helpers import send_email

def process(message):
    name = message.get('name')
    email = message.get('email')
    message = message.get('message')
    if email:
        subject = f'{name} sent you a message from Less Chat API.'
        body = f'Message:\n{message}'
        send_email(email, subject, body)