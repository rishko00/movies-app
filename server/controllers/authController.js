const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client('452603262956-95doqiofo2ruistoc8adliloca21ah5m.apps.googleusercontent.com');
const jwt = require('jsonwebtoken');

exports.login = (req,res,next) => {
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken : req.body.token,
      audience : "452603262956-95doqiofo2ruistoc8adliloca21ah5m.apps.googleusercontent.com"
    });
    const payload = ticket.getPayload();
    const userDetails = {
      email : payload['email'],
      firstname : payload['given_name'],
      lastname : payload['family_name']
    }
    let token = jwt.sign(userDetails, process.env.SECRET_KEY, {expiresIn: 1440});
    res.status(200).json({ token: token })
  }
  verify().catch(console.error);
}
