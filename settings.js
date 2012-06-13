var settings = {};

settings.imap = {
		"name": "helpdesk",
		"email": "",
        "host": "",
        "port": 993,
        "secure": true,
        "username": "",
       	"password": "",
        "box": "Inbox" 
};
settings.smtp = {
        "host": "",
        "ssl": true
};

settings.mongo = {
};

settings.blankticket = {
	"description": "left blank by sender",
	"status": "open",
	"from": "don't know why this isn't here!",
	"subject": "left blank by sender"
};



module.exports = settings;

