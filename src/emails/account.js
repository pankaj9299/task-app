const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pankaj@webenertia.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const cancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pankaj@webenertia.com',
        subject: 'Good bye!',
        text: `Good bye ${name}, Hope to see you again soon!`
    })
}

module.exports = {
    sendWelcomeEmail,
    cancelEmail
}