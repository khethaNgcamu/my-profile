const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('P1HZETZJG2VEAU92LD6DW214'); 

exports.handler = async (event, context) => {
  const message = {
    to: '43405363@mylife.unisa.ac.za', 
    from: 'ngcamukhetha@gmail.com', 
    subject: 'New Visitor on Smanga Ngcamu Portfolio',
    text: `Someone accessed your portfolio website at ${new Date().toLocaleString()}.`,
    html: `<p>New visitor alert!</p><p>Time: ${new Date().toLocaleString()}</p>`,
  };

  try {
    await sgMail.send(message);
    return {
      statusCode: 200,
      body: 'Email sent successfully!',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: 'Failed to send email',
    };
  }
};
