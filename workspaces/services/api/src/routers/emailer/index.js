import nodemailer from 'nodemailer'
import { render } from '@react-email/render'
import { Router } from 'express'
import TestEmail from 'emailer/emails/test-email'
import CONFIG from 'config'

const emailerRouter = new Router()

emailerRouter.get('/', async (req, res) => {
  const emailHtml = render(TestEmail({ label: 'Your label here' }))
  const options = {
    from: 'michelle@test.com',
    to: 'john@gmail.com',
    subject: 'HELLO EMAIL',
    html: emailHtml,
  }
  const result = await transporter.sendMail(options)
  res.send(result)
})

export default emailerRouter

const transporter = nodemailer.createTransport({
  host: CONFIG.email.host,
  port: CONFIG.email.port,
  secure: false,
  // auth: {
  //   user: 'my_user',
  //   pass: 'my_password',
  // },
})
