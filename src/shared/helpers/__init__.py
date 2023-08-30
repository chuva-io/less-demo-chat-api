import os
import sendgrid
from sendgrid.helpers.mail import Mail

SENDGRID_API_KEY = os.environ.get('SENDGRID_API_KEY')

def send_email(to, subject, body):
    sg = sendgrid.SendGridAPIClient(api_key=SENDGRID_API_KEY)

    message = Mail(
        from_email='less@chuva.io',
        to_emails=to,
        subject=subject,
        plain_text_content=body
    )

    sg.send(message)