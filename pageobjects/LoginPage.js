class LoginPage {

constructor(page)
{
this.page = page;
this.userName = page.locator("#login_id");
this.passWord = page.locator("#password");
this.loginbutton = page.locator("#login_button");
}

async goTO()
{
    await this.page.goto("https://cloudphone.tatateleservices.com");

}

async validLogin(username, userpassword)
{
await this.userName.type(username);
await this.passWord.type(userpassword);
await this.loginbutton.click();
}

}
module.exports = {LoginPage};